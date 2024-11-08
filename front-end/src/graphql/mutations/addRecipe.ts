import { gql } from "graphql-request";

const mutation = gql`
    mutation addRecipe($data: AddRecipeInput!) {
        addRecipe(data: $data) {
            documentId,
            title,
        }
    }
`;

export default mutation;