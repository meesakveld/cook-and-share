'use server';
// ——— GraphQL ———
import graphqlRequest, { getCategories, getRecipes } from "@/graphql";

// ——— Next.js ———
import Link from "next/link";

// ——— Components ———
import Button from "@/components/common/Button";
import Title from "@/components/common/Title";
import Hero from "@/components/layout/Hero";
import FilterRecipeForm from "@/components/forms/FilterRecipeForm";
import RecipeCard from "@/components/ui/RecipeCard";

export default async function Recipes({ params, searchParams }: Readonly<{ params: any, searchParams: any }>) {

    let categoryIdsFromUrl: string[] = []
    const { cids } = searchParams
    if (cids) {
        categoryIdsFromUrl = cids.split(',')
    }

    // ——— Get Categories ———
    const categoryVariables = {
        "pagination": {
            "limit": 1000
        }
    }
    const allCategories = await graphqlRequest(getCategories, categoryVariables).then((response: any) => {
        return response.categories
    })

    // ——— Get Recipes ———
    const recipeVariables = {
        "sort": "createdAt",
        "filters": {
            "categories": {
                "or": categoryIdsFromUrl.map(categoryId => ({
                        "documentId": {
                            "contains": categoryId
                        }
                }))
            }
        }
    }
    const recipes = await graphqlRequest(getRecipes, recipeVariables).then((response: any) => {
        return response.recipes
    })

    return (
        <div className="flex flex-col gap-12">

            <Hero title="Share recipes" />

            <div className="mw p-4 w-full flex flex-col gap-4">
                <div className="flex justify-between">
                    <Title>Share recipes</Title>

                    <div className="flex gap-4">
                        <Button color='beige' function='link'>Search</Button>
                        <Button color='red' function='link' style={{ borderColor: 'rgb(var(--color-red))' }}>Share a recipe</Button>
                    </div>
                </div>

                <p className="sm:w-1/2">On <span className="text-red">Cook & Share</span>, users can post and share their favorite recipes, complete with detailed instructions and ingredient lists. Explore a diverse collection of global cuisines and cooking techniques, <span className="text-red">inspiring others</span> to create delicious meals in their kitchens!</p>

                <div className="sm:w-2/5">
                    <FilterRecipeForm allCategories={allCategories} categoryIdsFromUrl={categoryIdsFromUrl} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 p-4">
                {recipes.map((recipe: any) => (
                    <Link key={recipe.documentId + '-link'} href={`/recipes/${recipe.documentId}`}>
                        <RecipeCard recipe={recipe} />
                    </Link>
                ))}
            </div>

        </div>
    )
}