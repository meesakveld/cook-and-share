import client from "./config/graphql_client.mjs";
import categories from "./data/categories.mjs";

const mutation = `
    mutation createCategory($data: CategoryInput!) {
        createCategory(data: $data) {
            name
        }
    }
`;

const createCategory = async (category) => {
    let data = { data: category };
    try {
        const result = await client.request(mutation, data);
        console.log(result);
    } catch (error) {
        console.log(" ———— Error creating category ————\n", category);
        console.error("Error:", error);
    }
}

const createCategories = async () => {
    for (const category of categories) {
        await createCategory(category);
    }
}

createCategories();