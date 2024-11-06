'use server';

import Title from "@/components/common/Title";
// ——— Next.js ———
import Hero from "@/components/layout/Hero";
import Card from "@/components/ui/Card";

// ——— Auth ———
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Account() {

    const session = await getServerSession(authOptions);
    const user = session?.user;

    return (
        <div className="flex flex-col gap-12">

            <Hero title="Account" />

            <div className="mw p-4 w-full flex flex-col gap-4">
                <Title>Your personal information</Title>

                <Card className="p-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="flex gap-2 items-end">
                            <h3 className="uppercase font-manuka text-2vw text-red w-1/5">Username</h3>
                            <p>{user?.name}</p>
                        </div>

                        <div className="flex gap-2 items-end">
                            <h3 className="uppercase font-manuka text-2vw text-red w-1/5">Email</h3>
                            <p>{user?.email}</p>
                        </div>

                        <div className="flex gap-2 items-end">
                            <h3 className="uppercase font-manuka text-2vw text-red w-1/5">Firstname</h3>
                            <p>{user?.firstname}</p>
                        </div>

                        <div className="flex gap-2 items-end">
                            <h3 className="uppercase font-manuka text-2vw text-red w-1/5">Lastname</h3>
                            <p>{user?.lastname}</p>
                        </div>

                        <div className="flex gap-2 items-end">
                            <h3 className="uppercase font-manuka text-2vw text-red w-1/5">Role</h3>
                            <p>{user?.role}</p>
                        </div>

                    </div>

                </Card>

            </div>
        </div>
    )
}