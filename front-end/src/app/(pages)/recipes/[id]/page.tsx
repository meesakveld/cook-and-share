'use server';
// ——— GraphQL ———
import graphqlRequest, { getRecipe } from "@/graphql";

// ——— Next.js ———
import Image from "next/image";

// ——— Types ———
import RecipeType from "@/types/Recipe";

// ——— Assets ———
import accImg from "@/assets/icons/account_logged_in.svg";

// ——— Components ———
import RecipeImageRotator from '@/components/ui/RecipeImageRotator'

export default async function recipe({ params }: { params: { id: string } }) {

    const reponse = await graphqlRequest(getRecipe, { documentId: params.id });
    const recipe: RecipeType = reponse.recipe;

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-16 mw p-4">
                <div className="sm:w-1/2 flex flex-col gap-4 sm:gap-6">
                    <h1 className="uppercase font-manuka text-red w-full sm:w-[70%] text-[29vw] sm:text-[9vw] leading-[24vw] sm:leading-[8vw]">{recipe.title}</h1>

                    <div className="flex gap-2 sm:w-[70%]">
                        <Image className="aspect-auto w-8 justify-center" src={accImg} alt="account" />
                        <p className="text-red">{recipe.user.firstname} {recipe.user.lastname}</p>
                    </div>

                    <p className="text-red w-[90%]">{recipe.description}</p>

                    <div className="flex flex-wrap gap-2 sm:w-[70%]">
                        {recipe.categories.map((category) => (
                            <span key={category.documentId} className="bg-red text-[14px] text-white rounded-[5px] px-2 py-1">{category.name}</span>
                        ))}
                    </div>
                </div>

                <RecipeImageRotator recipe={recipe} />
            </div>
        </div>
    );
}