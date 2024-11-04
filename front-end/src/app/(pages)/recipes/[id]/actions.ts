'use server';
// ——— Next.js ———
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

// ——— GraphQL ———
import graphqlRequest, { addComment, deleteComment } from "@/graphql";
import { revalidatePath } from "next/cache";

// ——— Types ———
type addCommentToRecipeType = {
    comment: string;
    userId: string;
    recipeId: string;
}

export async function addCommentToRecipe(data: addCommentToRecipeType) {

    const session = await getServerSession(authOptions);
    const user = session?.user;
    const userStrapiUserId = user?.strapiUserId;

    if (!userStrapiUserId) {
        return null;
    }

    try {
        await graphqlRequest(addComment, {
            data: {
                comment: data.comment,
                userId: data.userId,
                recipeId: data.recipeId
            }
        });
        revalidatePath(`/recipes/${data.recipeId}`);
    } catch (error: any) {
        console.log(error);
    }
}


export async function deleteCommentAction(commentId: string, recipeId: string) {

    const session = await getServerSession(authOptions);
    const user = session?.user;
    const userStrapiUserId = user?.strapiUserId;

    if (!userStrapiUserId) {
        throw new Error("Unauthorized");
    }

    try {
        const data = {
            "documentId": commentId
        }

        await graphqlRequest(deleteComment, data);
        revalidatePath(`/recipes/${recipeId}`);
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
    }
}