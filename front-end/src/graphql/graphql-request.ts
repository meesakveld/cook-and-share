'use server';
import client from "./config/graphql_client";
import settings from "./config/settings";

import { getServerSession } from "next-auth";
import { authOptions } from "./../lib/authOptions";

/**
 * Send a request to the GraphQL server.
 * @param query The query to send to the server.
 * @param variables The variables to send with the query.
 * @param customToken A custom token to use for the request (optional).
 * @returns The response from the server.
 */
const graphqlRequest: any = async (query: any, variables: any = {}, customToken?: string) => {
    const session = await getServerSession(authOptions);
    const token = session?.strapiToken;

    const uniqueQuery = `${query} #${Date.now()}`; // Add a unique identifier to the query to prevent caching.
    const response = await client.request(uniqueQuery, variables, {
        Authorization: `Bearer ${customToken || token || settings.API_TOKEN}`,
    });
    return response;
};

export default graphqlRequest;