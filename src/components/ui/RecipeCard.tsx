'use client';
// ——— NPM Imports ———
import Image from 'next/image';

// ——— Types ———
import RecipeType from "@/types/Recipe"

// ——— Assets ———
import star from '@/assets/icons/star.svg';
import starFilled from '@/assets/icons/star.fill.svg';

type RecipeCardProps = {
    recipe: RecipeType,
    toggleFavoriteStatus: () => void,
    className?: string
}

export default function RecipeCard({ recipe, toggleFavoriteStatus, className }: RecipeCardProps) {
    const firstImage = recipe.images[0];

    const totalTimeInMinutes = recipe.totalTime;
    const makeTimePretty = (totalTimeInMinutes: number) => {
        const hours = Math.floor(totalTimeInMinutes / 60);
        const minutes = totalTimeInMinutes % 60;

        if (hours === 0) return `${minutes}min`;
        if (hours >= 1) return `${hours}h ${minutes}min`;
    }

    const likes = 12451;
    const makeLikesPretty = (likes: number) => {
        if (likes < 1000) return likes;
        if (likes >= 1000) {
            const kLikes = likes / 1000;
            return `${kLikes.toFixed(1)}k`;
        }
    }

    const userFirstName = "Mees Akveld";

    // ——— Favorite star ———
    const userIsLoggedIn: boolean = true
    const userHasRecipeFavorited: boolean = false;
    const favoriteIcon = userHasRecipeFavorited ? starFilled : star;

    return (
        <article className={`bg-beige border-2 border-red rounded-[15px] p-3 flex flex-col gap-4 max-w-72 card-after-hover ${className ?? ""}`}>
            <div className="relative">
                <img
                    src={firstImage}
                    alt={recipe.title}
                    className='w-full h-full object-cover aspect-video rounded-[15px] pointer-events-none'
                />

                { userIsLoggedIn && (
                    <button className={`absolute top-2 right-2 hover:opacity-70 transition-opacity duration-200`} onClick={toggleFavoriteStatus}>
                        <Image src={favoriteIcon} alt="Favorite" />
                    </button>
                )}
            </div>

            <h2 className='font-manukaCondensed uppercase text-red text-3vw leading-[90%]'>
                {recipe.title}
            </h2>

            <div>
                <div className="flex gap-6">
                    <div>
                        <h3 className="uppercase text-red font-openSansCondensed font-normal">Difficulty</h3>
                        <div className="flex gap-[2px]">
                            <p className="hidden">{recipe.difficulty}/5</p>
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i} className={`w-4 h-4 ${i < recipe.difficulty ? 'bg-red' : 'bg-gray'} rounded-full inline-block`}></span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="uppercase text-red font-openSansCondensed font-normal">Total Time</h3>
                        <p className="uppercase font-manukaCondensed text-2vw text-red">{makeTimePretty(totalTimeInMinutes)}</p>
                    </div>

                    <div>
                        <h3 className="uppercase text-red font-openSansCondensed font-normal">Likes</h3>
                        <p className="uppercase font-manukaCondensed text-2vw text-red">{makeLikesPretty(likes)}</p>
                    </div>
                </div>

                <div>
                    <h3 className="uppercase text-red font-openSansCondensed font-normal">By user</h3>
                    <p className="uppercase font-manukaCondensed text-2vw text-red">{userFirstName}</p>
                </div>

            </div>

        </article>
    )
}