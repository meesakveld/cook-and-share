import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            strapiToken: unknown;
            documentId: number,
            firstName: string,
            lastName: string,
            email: string,
            username: string,
            role: {
                documentId: number,
                name: "Authenticated" | "Admin"
            }
        };
    }

    interface User {
        documentId: number,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        role: {
            documentId: number,
            name: "Authenticated" | "Admin"
        }
    }

}