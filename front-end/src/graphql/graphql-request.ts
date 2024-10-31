'use server';
import client from "./config/graphql_client";

/**
 * Send a request to the GraphQL server.
 * @param query The query to send to the server.
 * @param variables The variables to send with the query.
 * @returns The response from the server.
 */
const graphqlRequest: any = async (query: any, variables: any = {}) => {
    try {
        const uniqueQuery = `${query} #${Date.now()}`; // Add a unique identifier to the query to prevent caching.
        const response = await client.request(uniqueQuery, variables);
        return response;
    } catch (error) {
        return error;
    }
};

export default graphqlRequest;