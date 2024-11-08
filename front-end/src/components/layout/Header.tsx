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
import checkUserStatus from '@/utils/checkUserStatus';

export default async function Header() {
    const userIsLoggedIn: boolean = await checkUserStatus();

    return (
        <header className='mw px-4 pt-4'>
            <Card className='flex max-[400px]:flex-col max-[400px]:gap-2 items-center justify-between px-6 py-2'>
                <Link href='/' className='max-[400px]:scale-150 max-[400px]:py-2'><Title hTag='p'>Cook and Share</Title></Link>

                <nav className='flex gap-4 min-[400px]:gap-6 items-center max-[400px]:mb-2'>
                    <Link href='/recipes' className='font-manukaCondensed uppercase text-red text-3vw hover:opacity-70 transition-opacity duration-200'>Recipes</Link>
                    <Link href='/dashboard' className='font-manukaCondensed uppercase text-red text-3vw hover:opacity-70 transition-opacity duration-200'>Dashboard</Link>
                    <Link href='/search' className='font-manukaCondensed uppercase text-red text-3vw hover:opacity-70 transition-opacity duration-200'>Search</Link>

                    <Link href='/account' className='hover:opacity-70 transition-opacity duration-200'>
                        <Image 
                            src={userIsLoggedIn ? loggedInIcon : notLoggedInIcon} 
                            alt='Account' 
                            className='w-3vw h-3vw'
                        />
                    </Link>
                </nav>
            </Card>
        </header>
    )
}