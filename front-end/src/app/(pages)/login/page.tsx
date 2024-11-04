'use client';

// ——— Next.js ———
import Link from "next/link";

// ——— Components ———
import LoginForm from "@/components/forms/LoginForm";
import Hero from "@/components/layout/Hero";

export default function login() {

    const getCallbackUrl = () => {
        const url = new URL(window.location.href);
        const callbackUrl = url.searchParams.get("callbackUrl");
        return callbackUrl ? callbackUrl : "/";
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