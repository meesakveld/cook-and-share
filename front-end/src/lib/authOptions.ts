import { StrapiErrorT } from "@/types/strapi/StrapiErrorT";
import { StrapiLoginResponseT } from "@/types/strapi/User";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'email and password',
            credentials: {
                identifier: {
                    label: 'Email or username *',
                    type: 'text',
                },
                password: { label: 'Password *', type: 'password' },
            },
            async authorize(credentials): Promise<any> {
                try {
                    const strapiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            identifier: credentials!.identifier,
                            password: credentials!.password,
                        }),
                    });

                    if (!strapiResponse.ok) {
                        const contentType = strapiResponse.headers.get("content-type");
                        if (contentType === "application/json; charset=utf-8") {
                            const data: StrapiErrorT = await strapiResponse.json();
                            throw new Error(data.error.message);
                        } else {
                            throw new Error(strapiResponse.statusText);
                        }
                    }

                    // Succes
                    const data: StrapiLoginResponseT = await strapiResponse.json();

                    const strapiMeResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users?populate=role&filters[documentId]=${data.user.documentId}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${process.env.API_TOKEN}`,
                        },
                    });
                    const dataMe = await strapiMeResponse.json();

                    if (strapiResponse.ok) {
                        return {
                            name: data.user.username,
                            firstname: dataMe[0].firstname,
                            lastname: dataMe[0].lastname,
                            email: data.user.email,
                            documentId: data.user.documentId,
                            strapiUserId: data.user.documentId,
                            blocked: data.user.blocked,
                            strapiToken: data.jwt,
                            role: dataMe[0].role.name,
                        }
                    }
                } catch (error) {
                    throw error
                }
            }
        }),
    ],
    pages: {
        signIn: '/login',
        newUser: '/register',
        error: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, trigger, account, user, session }) {
            if (account) {
                if (account.provider === "credentials") {
                    token.strapiToken = user.strapiToken;
                    token.strapiUserId = user.strapiUserId;
                    token.provider = account.provider === "credentials" ? "local" : account.provider;
                    token.blocked = user.blocked;
                    token.documentId = user.documentId;
                    token.role = user.role;
                    token.firstname = user.firstname;
                    token.lastname = user.lastname;
                }
            }
            return token;
        },
        async session({ token, session }) {
            session.strapiToken = token.strapiToken;
            session.provider = token.provider;
            session.user.strapiUserId = token.strapiUserId;
            session.user.blocked = token.blocked;
            session.user.role = token.role; // Maak de rol van de gebruiker beschikbaar in de sessio
            session.user.firstname = token.firstname;
            session.user.lastname = token.lastname;
            return session;
        },
    },
};
