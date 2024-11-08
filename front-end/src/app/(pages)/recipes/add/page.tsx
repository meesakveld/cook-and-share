'use server';
// ——— GraphQL ———
import graphqlRequest, { getCategories } from '@/graphql';

// ——— Actions ———
import addRecipeFunc from './actions';

// ——— Components ———
import AddRecipeForm from "@/components/forms/AddRecipeForm";

export default async function addRecipe() {
    const categoryVariables = {
        "pagination": {
            "limit": -1,
        }
    }
    const categoryResponse = await graphqlRequest(getCategories, categoryVariables)
    const categories = categoryResponse.categories

    return (
        <div className='mw p-4'>
            <AddRecipeForm categories={categories} addRecipeFunction={addRecipeFunc} />
        </div>
    )
}