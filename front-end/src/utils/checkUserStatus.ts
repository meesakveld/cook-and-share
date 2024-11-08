'use server';

// ——— Next Auth ———
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function checkUserStatus(): Promise<boolean> {
    // Check if user is logged in
    const session = await getServerSession(authOptions);
    const isLoggedIn = session ? true : false;

    return isLoggedIn;
}