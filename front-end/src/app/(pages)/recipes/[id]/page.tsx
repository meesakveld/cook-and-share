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
import CommentCard from "@/components/ui/CommentCard";
import AddCommentToRecipeForm from "@/components/forms/AddCommentToRecipeForm";

// ——— Actions ———
import { deleteCommentAction, addCommentToRecipe } from "./actions";

// ——— Auth ———
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function recipe({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    const reponse = await graphqlRequest(getRecipe, { documentId: params.id });
    const recipe: RecipeType = reponse.recipe;

    return (
        <article className="mw p-4 flex flex-col gap-20">
            <section className="flex flex-col sm:flex-row gap-16 items-center">
                <div className="sm:w-1/2 flex flex-col gap-4 sm:gap-6 justify-center">
                    <h1 className="uppercase font-manuka text-red w-full sm:w-[70%] text-[29vw] sm:text-[9vw] leading-[24vw] sm:leading-[8vw]">{recipe.title}</h1>

                    <div className="flex gap-2 sm:w-[70%]">
                        <Image className="aspect-auto w-8 justify-center" src={accImg} alt="account" />
                        <p className="text-red">{recipe.user.firstname} {recipe.user.lastname}</p>
                    </div>

                    <p className="text-red w-[90%]">{recipe.description}</p>

                    <ul className="flex flex-wrap gap-2 sm:w-[70%]">
                        {recipe.categories.map((category) => (
                            <li key={category.documentId + category.name}>
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
                    <ol className="flex flex-col gap-4 md:gap-6">
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

            <section className="flex flex-col">
                <Title id="comments">Comments</Title>

                <div className="sm:w-2/5">
                    <AddCommentToRecipeForm recipe={recipe} addCommentToRecipe={addCommentToRecipe} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {recipe.comments.sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()).map((comment) => (
                        <CommentCard key={comment.documentId} comment={comment} recipeId={recipe.documentId} user={user} onSubmitDelete={deleteCommentAction} />
                    ))}
                </div>
            </section>

        </article>
    );
}