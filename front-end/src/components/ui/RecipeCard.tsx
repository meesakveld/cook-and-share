// ——— Types ———
import RecipeType, { ImageType } from "@/types/Recipe"
import Link from "next/link";

type RecipeCardProps = {
    recipe: RecipeType,
    className?: string
}

export default async function RecipeCard({ recipe, className }: RecipeCardProps) {
    const firstImage: ImageType = recipe.images[0];

    const totalTimeInMinutes = recipe.totalTime;
    const makeTimePretty = (totalTimeInMinutes: string) => {
        switch (totalTimeInMinutes) {
            case "5":
                return "5min";
            case "15":
                return "15min";
            case "30":
                return "30min";
            case "45":
                return "45min";
            case "60":
                return "1h";
            case "60+":
                return "1h+";
        }
    }

    return (
        <Link href={`/recipes/${recipe.documentId}`} className={`bg-beige border-2 border-red rounded-[15px] p-3 flex flex-col gap-4 justify-between max-w-72 mb-2 flex-shrink-0 h-full card-after-hover ${className ?? ""}`}>
            <div className="flex flex-col gap-4">
                <div className="relative">
                    <img
                        src={firstImage?.url}
                        alt={recipe.title}
                        className='w-full h-full object-cover aspect-video rounded-[15px] pointer-events-none'
                    />
                </div>

                <h3 className='font-manukaCondensed uppercase text-red text-3vw leading-[90%]'>
                    {recipe.title}
                </h3>
            </div>

            <div>
                <div className="flex gap-6">
                    <div>
                        <h4 className="uppercase text-red font-openSansCondensed font-normal">Difficulty</h4>
                        <div className="flex gap-[2px]">
                            <p className="hidden">{recipe.difficulty}/5</p>
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i} className={`w-4 h-4 ${i < recipe.difficulty ? 'bg-red' : 'bg-gray'} rounded-full inline-block`}></span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="uppercase text-red font-openSansCondensed font-normal">Total Time</h4>
                        <p className="uppercase font-manukaCondensed text-2vw text-red">{makeTimePretty(totalTimeInMinutes)}</p>
                    </div>

                </div>

                <div>
                    <h4 className="uppercase text-red font-openSansCondensed font-normal">By user</h4>
                    <p className="uppercase font-manukaCondensed text-2vw text-red">{recipe.user.firstname} {recipe.user.lastname}</p>
                </div>

            </div>
        </Link>
    )
}