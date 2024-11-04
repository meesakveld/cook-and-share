import { gql } from "graphql-request";

const mutation = gql`
    mutation Mutation($input: UsersPermissionsRegisterInput!) {
        register(input: $input) {
            user {
                id
            }
            jwt
        }
    }
`

export default mutation;