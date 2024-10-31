// ——— Next.js ———
import { NextRequest, NextResponse } from "next/server";

// ——— GraphQL ———
import graphqlRequest, { addCommentToRecipe } from "@/graphql";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const body = await request.json();
        const { comment, userId } = body;

        const data = {
            data: {
                comment,
                userId,
                recipeId: params.id
            }
        }

        const response = await graphqlRequest(addCommentToRecipe, data);
        return NextResponse.json(response, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}