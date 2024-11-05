'use server';

// ——— GraphQL ———
import graphqlRequest, { getRecipes } from "@/graphql";

// ——— Types ———
import Recipe from "@/types/Recipe";

// ——— Components ———
import Button from "@/components/common/Button";
import RecipeCard from "@/components/ui/RecipeCard";
import CommentCard from "@/components/ui/CommentCard";
import Hero from "@/components/layout/Hero";
import Title from "@/components/common/Title";

// ——— Next Auth ———
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Account() {

    const session = await getServerSession(authOptions);
    const userId = session?.user.strapiUserId;

    const variablesRecipes = {
        "filters": {
            "user": {
                "documentId": {
                    "eq": userId
                }
            }
        },
        "pagination": {
            "limit": -1
        },
        "sort": "createdAt"
    }

    const responseRecipes: { recipes: Recipe[] } = await graphqlRequest(getRecipes, variablesRecipes);
    const recipes = responseRecipes.recipes;

    const variablesComments = {
        "filters": {
            "comments": {
                "user": {
                    "documentId": {
                        "eq": userId
                    }
                }
            }
        },
        "pagination": {
            "limit": -1
        },
    }
    const responseComments: { recipes: Recipe[] } = await graphqlRequest(getRecipes, variablesComments);
    const comments = responseComments.recipes.flatMap(recipe =>
        recipe.comments
            .filter(comment => comment.user.documentId === "hx5q5gk59cj7ol15lp685o47")
            .map(comment => ({
                recipeId: recipe.documentId,
                comment
            }))
    );

    return (
        <div className="flex flex-col gap-12">
            <Hero title="Dashboard" />

            <div className="mw p-4 w-full">
                <div className="flex flex-col gap-2 my-8">
                    <div className="flex gap-4 justify-between">
                        <Title>My recipes</Title>

                        <Button color='beige' function='link' href='/recipes/add' style={{ borderColor: 'rgb(var(--color-red))' }}>
                            Share a recipe
                        </Button>
                    </div>

                    {recipes.length === 0 && (
                        <div>
                            <p className="font-normal">You haven't shared any recipes yet.</p>
                        </div>
                    )}
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 w-full">
                        {recipes.map((recipe: any) => (
                            <RecipeCard recipe={recipe} key={recipe.documentId + '-link'} className="flex-1 max-lg:max-w-full" />
                        ))}
                    </div>
                </div>
            </div>


            <div className="mw p-4 w-full">
                <div className="flex flex-col gap-2 my-8">
                    <div className="flex gap-4 justify-between">
                        <Title>My comments</Title>
                    </div>

                    {recipes.length === 0 && (
                        <div>
                            <p className="font-normal">You haven't commented on any recipes yet.</p>
                        </div>
                    )}
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {comments.sort((a, b) => new Date(b.comment.datePosted).getTime() - new Date(a.comment.datePosted).getTime()).map((comment) => (
                            <CommentCard key={comment.comment.documentId} comment={comment.comment} recipeId={comment.recipeId} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}