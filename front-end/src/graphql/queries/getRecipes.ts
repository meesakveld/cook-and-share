import { gql } from "graphql-request";

/**
 * Get all recipes from the database.
 * @param limit: PaginationArg | null
 *  Add { limit: number } to get the number of recipes you want. 
 * @returns recipes: Recipe[]
 */
const query = gql`
    query Recipes($sort: [String], $pagination: PaginationArg) {
        recipes(sort: $sort, pagination: $pagination) {
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
        }
    }
`

export default query;