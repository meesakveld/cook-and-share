import { gql } from "graphql-request";

export const updateUser = gql`
    mutation UpdateUsersPermissionsUser($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
        updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
            data {
                documentId
                firstname
                lastname
            }
        }
    }
`