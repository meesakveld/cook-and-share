'use server';
// ——— Next.js ———
import Link from "next/link";

// ——— Components ———
import LoginForm from "@/components/forms/LoginForm";
import Hero from "@/components/layout/Hero";

// ——— Next Auth ———
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function login({ params, searchParams }: Readonly<{ params: any, searchParams: any }>) {

    const getCallbackUrl = () => {
        return searchParams.callbackUrl ? searchParams.callbackUrl : '/';
    }

    const session = await getServerSession(authOptions);
    if (session) {
        redirect("/");
    }

    return (
        <div className="flex flex-col gap-6">

            <Hero title="Login" />
            <p className="text-center">No account yet? <Link href={`/register?callbackUrl=${getCallbackUrl()}`} className="text-red hover:underline">Register here</Link>.</p>

            <div className="mw p-4 w-full">
                <LoginForm />
            </div>
        </div>
    )
}