'use server';
// ——— GraphQL ———
import graphqlRequest, { addRecipe as addRecipeMutation } from "@/graphql";

// ——— NextAuth ———
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

// ——— Types ———
export type addRecipeProps = {
    title: string,
    description: string,
    ingredients: { name: string, amount: string }[],
    difficulty: number,
    totalTime: '5' | '15' | '30' | '45' | '60' | '60+',
    categories: string[],
    directions: { step: number, description: string }[],
    images: string[]
}

export default async function addRecipe({ title, description, ingredients, difficulty, totalTime, categories, directions, images }: addRecipeProps) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return { error: 'You must be signed in to add a recipe' }
    };

    if (!title || !description || !ingredients || !difficulty || !totalTime || !categories || !directions) {
        return { error: 'Please fill out all required fields' }
    };
    
    const recipe = {
        title,
        description,
        ingredients,
        difficulty,
        totalTime,
        categories,
        directions,
        images,
        user: session.user.strapiUserId,
        datePosted: new Date().toISOString()
    };

    console.log(recipe);

    try {
        const response = await graphqlRequest(addRecipeMutation, { data: recipe });
        revalidatePath(`/recipes/${response.addRecipe.documentId}`);
    } catch (error) {
        console.error(error);
        return { error: 'An error occurred while adding the recipe' }
    }

}