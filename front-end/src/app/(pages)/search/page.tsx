'use server';

// ——— GraphQL ———
import graphqlRequest, { getRecipes } from "@/graphql";

// ——— Types ———
import Recipe from "@/types/Recipe";

// ——— Components ———
import Hero from "@/components/layout/Hero";
import Title from "@/components/common/Title";
import RecipeCard from "@/components/ui/RecipeCard";
import SearchRecipesForm from "@/components/forms/SearchRecipesForm";

export default async function Search({ params, searchParams }: Readonly<{ params: any, searchParams: any }>) {

    const searchQuery = searchParams.q;

    const graphqlParams = {
        "filters": {
            "or": [
                {
                    "documentId": {
                        "contains": searchQuery
                    }
                },
                {
                    "title": {
                        "contains": searchQuery
                    }
                },
                {
                    "description": {
                        "contains": searchQuery
                    }
                }
            ]
        },
        "sort": null,
        "pagination": {
            "limit": -1
        }
    }

    let recipes: Recipe[] = [];
    if (searchQuery) {
        const response = await graphqlRequest(getRecipes, graphqlParams);
        recipes = response.recipes;
    }

    return (
        <div className="flex flex-col gap-12">
            <div>
                <Hero title="Search recipes" className="h-[30vw]" />
                <div className="m-auto w-1/2">
                    <SearchRecipesForm />
                </div>
            </div>

            <div className="mw p-4 w-full">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {recipes.map((recipe: Recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.documentId + '-link'} className="flex-1 max-lg:max-w-full" />
                    ))}
                </div>
                {recipes.length === 0 && searchQuery && (
                    <div className="text-center flex flex-col gap-2">
                        <Title hTag="p">No recipes found</Title>
                        <p>Try searching for something else</p>
                    </div>
                )}
            </div>

        </div>
    )
}