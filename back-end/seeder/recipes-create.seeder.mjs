import client from "./config/graphql_client.mjs";
import recipes from "./data/recipes.mjs";

const mutation = `
    mutation upsertRecipe($data: UpsertRecipeInput!) {
        upsertRecipe(data: $data) {
            title,
            description,
            difficulty,
            totalTime,
            datePosted,
            ingredients {
                name,
                amount
            },
            categories {
                documentId
            },
            user {
                documentId
            }
        }
    }
`;

const createRecipe = async (recipe) => {
    let data = { data: recipe };
    try {
        const result = await client.request(mutation, data);
        console.log(result);
    } catch (error) {
        console.log(" ———— Error creating recipe ————\n", recipe);
        console.error("Error:", error);
    }
}

const createRecipes = async () => {
    for (const recipe of recipes) {
        await createRecipe(recipe);
    }
}

createRecipes();