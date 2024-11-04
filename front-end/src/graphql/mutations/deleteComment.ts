import { gql } from "graphql-request";

const deleteComment = gql`
    mutation Mutation($documentId: ID!) {
        deleteComment(documentId: $documentId) {
            documentId
        }
    }
`;

export default deleteComment;