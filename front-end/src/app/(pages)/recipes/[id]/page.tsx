'use server';
// ——— GraphQL ———
import graphqlRequest, { getRecipe } from "@/graphql";

// ——— Next.js ———
import Image from "next/image";
import Link from "next/link";

// ——— Types ———
import RecipeType from "@/types/Recipe";

// ——— Assets ———
import accImg from "@/assets/icons/account_logged_in.svg";

// ——— Components ———
import RecipeImageRotator from '@/components/ui/RecipeImageRotator'
import Title from "@/components/common/Title";
import Card from "@/components/ui/Card";

// ——— Functions ———
import dateFormatter from "@/functions/dateFormatter";

export default async function recipe({ params }: { params: { id: string } }) {

    const reponse = await graphqlRequest(getRecipe, { documentId: params.id });
    const recipe: RecipeType = reponse.recipe;

    return (
        <article className="mw p-4 flex flex-col gap-20">
            <section className="flex flex-col sm:flex-row gap-16 items-center">
                <div className="sm:w-1/2 flex flex-col gap-4 sm:gap-6 justify-center">
                    <h1 className="uppercase font-manuka text-red w-full sm:w-[70%] text-[29vw] sm:text-[9vw] leading-[24vw] sm:leading-[8vw]">{recipe.title}</h1>

                    <div className="flex gap-2 sm:w-[70%]">
                        <Image className="aspect-auto w-8 justify-center" src={accImg} alt="account" />
                        <Link href={`/users/${recipe.user.documentId}`}>
                            <p className="text-red">{recipe.user.firstname} {recipe.user.lastname}</p>
                        </Link>
                    </div>

                    <p className="text-red w-[90%]">{recipe.description}</p>

                    <ul className="flex flex-wrap gap-2 sm:w-[70%]">
                        {recipe.categories.map((category) => (
                            <li>
                                <Link href={`/recipes?cids=${category.documentId}`} className="hover:underline text-white">
                                    <span key={category.documentId} className="bg-red text-[14px] rounded-[5px] px-2 py-1">{category.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <RecipeImageRotator recipe={recipe} />
            </section>

            <section className="flex flex-col gap-4">
                <Title>Ingredients</Title>

                <Card className="px-4 py-3">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4 md:gap-y-2">
                        {recipe.ingredients.map((ingredient, i) => (
                            <li key={ingredient.name + i} className="flex gap-2 justify-between">
                                <p className="text-red">{ingredient.amount}</p>
                                <p>{ingredient.name}</p>
                            </li>
                        ))}
                    </ul>
                </Card>
            </section>

            <section className="flex flex-col gap-4">
                <Title>Instructions</Title>

                <Card className="p-4">
                    <ol className="flex flex-col gap-4 md:gap-8">
                        {recipe.directions.sort((a, b) => a.step - b.step).map((direction, i) => (
                            <li key={direction.step + i} className="text-red list-none">
                                <div className="flex gap-8 md:gap-16">
                                    <span className="text-red">{direction.step}.</span>
                                    <p className="text-black">{direction.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Card>
            </section>

            <section className="flex flex-col gap-4">
                <Title>Comments</Title>

                <div>
                    {/* Add comment */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {recipe.comments.map((comment) => (
                        <Card key={comment.documentId} className="p-4 flex flex-col justify-between gap-4 h-full">
                            <div>
                                <p>{comment.comment}</p>
                            </div>

                            <div className="flex justify-between items-center text-red">
                                <div className="flex gap-2">
                                    <Image src={accImg} alt={comment.user.firstname + comment.user.lastname} className="aspect-auto w-8" />
                                    <Link href={`/users/${comment.user.documentId}`} className="hover:underline">
                                        <p>{comment.user.firstname} {comment.user.lastname}</p>
                                    </Link>
                                </div>
                                <div>
                                    <p className="opacity-50">{dateFormatter(comment.datePosted)}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

        </article>
    );
}