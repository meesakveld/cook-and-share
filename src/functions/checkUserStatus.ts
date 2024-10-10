'use server';

// ——— NPM Imports ———
import { cookies } from 'next/headers';

export default async function checkUserStatus(): Promise<boolean> {
    // Check if user is logged in
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('next-auth.session-token');
    const isLoggedIn = sessionToken ? true : false;

    return isLoggedIn;
}