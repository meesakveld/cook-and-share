// ——— NPM Imports ———
import Link from 'next/link';

// ——— Components ———
import Card from "@/components/ui/Card";

// ——— Assets ———
import Title from '@/components/common/Title';

export default function Header() {

    return (
        <header className='mw'>
            <Card>
                <Link href='/'><Title>Cook and Share</Title></Link>

                <div>
                    <Link href='/recipes'>Recipes</Link>
                    <Link href='/dashboard/favourites'>Favourites</Link>
                </div>
            </Card>
        </header>
    )
}