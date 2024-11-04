import { gql } from "graphql-request";

const addComment = gql`
    mutation Mutation($data: AddCommentToRecipeInput!) {
        addCommentToRecipe(data: $data) {
            comments {
                documentId
            }
        }
    }
`;

export default addComment;