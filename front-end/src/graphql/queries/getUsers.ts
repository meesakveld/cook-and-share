import { gql } from "graphql-request";

export const getUsersDocumentIds = gql`
    query UsersPermissionsUsers($filters: UsersPermissionsUserFiltersInput) {
        usersPermissionsUsers(filters: $filters) {
            documentId
        }
    }
`