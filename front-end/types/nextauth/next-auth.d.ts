import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    // Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context

    interface Session {
        strapiToken?: string;
        provider?: 'google' | 'local';
        user: User;
    }

    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */
    interface User extends DefaultSession['user'] {
        // not setting this will throw ts error in authorize function
        strapiUserId?: string;
        strapiToken?: string;
        blocked?: boolean;
        documentId?: string;
        firstname?: string;
        lastname?: string;
        role?: 'Authenticated' | 'Public' | 'Admin'; 
    }

}

declare module 'next-auth/jwt' {
    // Returned by the `jwt` callback and `getToken`, when using JWT sessions
    interface JWT {
        strapiUserId?: string;
        blocked?: boolean;
        strapiToken?: string;
        provider?: 'local' | 'google';
        role?: 'Authenticated' | 'Public' | 'Admin'; 
    }
}