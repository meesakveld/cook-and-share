// ——— Next.js ———
import { authOptions } from "@/lib/authOptions";
import { getServerSession, type User } from "next-auth";

export default async function Account () {

    const session = await getServerSession(authOptions);
    const user = session?.user;

    return (
        <div className="mw p-4">
            <h1>Account</h1>
            <p>Hi, {user?.name}</p> 
            <p>Your email is: {user?.email}</p>
            <p>DocumentId: {user?.strapiUserId}</p>
            <p>Role: {user?.role}</p>
            <p>Strapitoken: {session?.strapiToken}</p>
        </div>
    )
}