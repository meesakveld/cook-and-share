'use server';
// ——— NPM Imports ———
import Link from 'next/link';
import Image from 'next/image';

// ——— Components ———
import Card from "@/components/ui/Card";
import Title from '@/components/common/Title';

// ——— Assets ———
import loggedInIcon from '@/assets/icons/account_logged_in.svg';
import notLoggedInIcon from '@/assets/icons/account_not_logged_in.svg';
import checkUserStatus from '@/functions/checkUserStatus';

export default async function Header() {
    const userIsLoggedIn: boolean = await checkUserStatus();

    return (
        <header className='mw px-4 pt-4'>
            <Card className='flex max-[400px]:flex-col max-[400px]:gap-2 items-center justify-between px-6'>
                <Link href='/' className='max-[400px]:scale-150 max-[400px]:py-2'><Title>Cook and Share</Title></Link>

                <div className='flex gap-12 min-[400px]:gap-6 items-center max-[400px]:mb-2'>
                    <Link href='/recipes' className='font-manukaCondensed uppercase text-red text-3vw hover:opacity-70 transition-opacity duration-200'>Recipes</Link>
                    <Link href='/dashboard/favourites' className='font-manukaCondensed uppercase text-red text-3vw hover:opacity-70 transition-opacity duration-200'>Favourites</Link>

                    <Link href='/dashboard' className='hover:opacity-70 transition-opacity duration-200'>
                        <Image 
                            src={userIsLoggedIn ? loggedInIcon : notLoggedInIcon} 
                            alt='Account Dashboard' 
                            className='w-3vw h-3vw'
                        />
                    </Link>
                </div>
            </Card>
        </header>
    )
}