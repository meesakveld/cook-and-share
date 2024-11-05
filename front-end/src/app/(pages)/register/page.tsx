'use server';

// ——— Next.js ———
import Link from "next/link";

// ——— Components ———
import RegisterForm from "@/components/forms/RegisterForm";
import Hero from "@/components/layout/Hero";

// ——— Next Auth ———
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function register({ params, searchParams }: Readonly<{ params: any, searchParams: any }>) {

    const getCallbackUrl = () => {
        return searchParams.callbackUrl ? searchParams.callbackUrl : '/';
    }

    const session = await getServerSession(authOptions);
    if (session) {
        redirect("/");
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