import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { cookies } from "next/headers";

type StrapiErrorT = {
    error: {
        message: string;
    };
};

type StrapiLoginResponseT = {
    jwt: string;
    user: {
        id: number;
        username: string;
        email: string;
        blocked: boolean;
        role: {
            id: number;
            name: "Authenticated" | "Admin";
        };
    };
};

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                identifier: {
                    label: "Email",
                    type: "email",
                    placeholder: "user@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }
            
                const strapiResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            identifier: credentials.identifier,
                            password: credentials.password,
                        }),
                    }
                );
            
                const data: StrapiLoginResponseT = await strapiResponse.json();
            
                if (strapiResponse.ok && data.user && !data.user.blocked) {
                    return {
                        id: data.user.id.toString(),  // Convert `id` to string
                        documentId: data.user.id,
                        firstName: data.user.username.split(" ")[0],
                        lastName: data.user.username.split(" ")[1] || "",
                        email: data.user.email,
                        username: data.user.username,
                        strapiToken: data.jwt,
                        role: {
                            documentId: data.user.role.id,
                            name: data.user.role.name as "Authenticated" | "Admin",
                        },
                    };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }

            if (account && (account.provider === "google" || account.provider === "github")) {
                try {
                    const strapiResponse = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account.access_token}`,
                        { cache: "no-cache" }
                    );

                    if (!strapiResponse.ok) {
                        const strapiError: StrapiErrorT = await strapiResponse.json();
                        throw new Error(strapiError.error.message);
                    }

                    const strapiLoginResponse: StrapiLoginResponseT = await strapiResponse.json();
                    token.strapiToken = strapiLoginResponse.jwt;
                    const cookieStore = cookies();
                    cookieStore.set("next-auth.jwt-token", strapiLoginResponse.jwt);
                } catch (error) {
                    throw error;
                }
            }

            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.documentId = token.id as number;
                session.user.strapiToken = token.strapiToken as string;
                session.user.role = token.role as { documentId: number; name: "Authenticated" | "Admin" };
            }
            return session;
        },
    },
};
