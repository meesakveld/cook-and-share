import { gql } from "graphql-request";

/**
 * Get all categories from the database.
 * @returns categories: Category[]
 */
const query = gql`
    query Categories($pagination: PaginationArg) {
        categories(pagination: $pagination) {
            documentId
            name
        }
    }
`

export default query;