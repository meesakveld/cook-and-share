import { gql } from "graphql-request";

/**
 * Get all recipes from the database.
 * @param limit: PaginationArg | null
 *  Add { limit: number } to get the number of recipes you want. 
 * @returns recipes: Recipe[]
 */
const query = gql`
    query Recipes($sort: [String], $pagination: PaginationArg, $filters: RecipeFiltersInput) {
        recipes(sort: $sort, pagination: $pagination, filters: $filters) {
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
            comments {
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