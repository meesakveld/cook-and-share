import { gql } from "graphql-request";

/**
 * Get a recipe by its documentId
 * @param documentId The documentId of the recipe
 * @returns The recipe
 */
const query = gql`
    query Recipe($documentId: ID!) {
        recipe(documentId: $documentId) {
            documentId
            title,
            description,
            categories {
                documentId
                name
            }
            difficulty
            totalTime
            images {
              url
              documentId
            }
            ingredients {
                name
                amount
            }
            directions {
                step
                description
            }
            user {
                firstname
                lastname
                documentId
            }
            comments(pagination: { limit: 999 }) {
                comment
                documentId
                datePosted
                user {
                    firstname
                    lastname
                    documentId
                }
            }
        }
    }
`

export default query;