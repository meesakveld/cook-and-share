import { GraphQLClient } from 'graphql-request';

import settings from './settings';

const client = new GraphQLClient(
  `${settings.NEXT_PUBLIC_API_URL}/graphql` || 'http://127.0.0.1:1337/graphql',
  {
    headers: {
      Authorization: `Bearer ${settings.API_TOKEN}`,
      "Cache-Control": 'no-store',
    },
  }
);

export default client;