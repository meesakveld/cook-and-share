'use server';
// ——— GraphQL ———
import graphqlRequest, { getCategories } from '@/graphql';

// ——— Components ———
import AddRecipeForm from "@/components/forms/AddRecipeForm";

export default async function addRecipe() {
    const categoryResponse = await graphqlRequest(getCategories)
    const categories = categoryResponse.categories

    return (
        <div className='mw p-4'>
            <AddRecipeForm categories={categories} />
        </div>
    )
}