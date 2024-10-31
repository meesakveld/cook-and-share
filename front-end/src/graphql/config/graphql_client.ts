import { GraphQLClient } from 'graphql-request';

import settings from './settings';

// export const fetchCache = 'force-no-store';
const client = new GraphQLClient(
  `${settings.API_URL}/graphql` || 'http://127.0.0.1:1337/graphql',
  {
    headers: {
      Authorization: `Bearer ${settings.API_TOKEN}`,
      fetchCache: 'force-no-store',
    },
  }
);

export default client;