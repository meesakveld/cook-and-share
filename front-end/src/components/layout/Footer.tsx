// ——— NPM Imports ———
import Link from "next/link"

// ——— Components ———
import Title from "../common/Title"
import Card from "../ui/Card"

// ——— Assets ———
import footerImage from "@/assets/images/footer-image.png"
import Image from "next/image"

export default function Footer() {
    const urls = [
        {
            title: 'Share recipes', links: [
                { title: 'Recipes', href: '/recipes/' },
                { title: 'My recipes', href: '/dashboard/my-recipes' },
                { title: 'Favourite recipes', href: '/dashboard/favourites' }
            ]
        },
        {
            title: 'Customer service', links: [
                { title: 'FAQ', href: '/faq' },
                { title: 'Contact Us', href: '/contact' },
                { title: 'Developer info', href: '/developer-info' }
            ]
        },
        {
            title: 'Legal', links: [
                { title: 'Privacy Policy', href: '/privacy-policy' },
                { title: 'Terms & Conditions', href: '/terms-and-conditions' },
                { title: 'Cookie Policy', href: '/cookie-policy' }
            ]
        },
    ]

    return (
        <div className="mt-16">
            <Image src={footerImage} alt="Footer image" className="pointer-events-none mw w-full" />

            <footer className="bg-red py-4">
                <div className="mw px-4">
                    <Card color="red">
                        <nav className="flex flex-col md:flex-row md:flex-wrap max-md:gap-4 justify-between p-5">
                            {urls.map((url, i) => (
                                <ul key={i} className="flex flex-col gap-1">
                                    <h3 className="uppercase text-beige opacity-50">{url.title}</h3>
                                    {url.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-beige hover:opacity-70 transition-opacity duration-200">{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                            <Link href='/' className='max-[400px]:py-2'><Title color="red">Cook and Share</Title></Link>
                        </nav>
                    </Card>
                </div>
            </footer>
        </div>
    )
}