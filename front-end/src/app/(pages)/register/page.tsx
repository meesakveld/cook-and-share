'use client';

// ——— Next.js ———
import Link from "next/link";

// ——— Components ———
import RegisterForm from "@/components/forms/RegisterForm";
import Hero from "@/components/layout/Hero";

export default function register() {

    const getCallbackUrl = () => {
        const url = new URL(window.location.href);
        const callbackUrl = url.searchParams.get("callbackUrl");
        return callbackUrl ? callbackUrl : "/";
    }

    return (
        <div className="flex flex-col gap-6">
            
            <Hero title="Register" />
            <p className="text-center">Allready have an account? <Link href={`/login?callbackUrl=${getCallbackUrl()}`} className="text-red hover:underline">Login here</Link>.</p>
    

            <div className="mw p-4 w-full">
                <RegisterForm />
            </div>
        </div>
    )
}