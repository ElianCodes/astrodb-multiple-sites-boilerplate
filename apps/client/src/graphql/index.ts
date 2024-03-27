import { Client, cacheExchange, fetchExchange } from "@urql/core";

export const client = new Client({
	url: `${import.meta.env.API_URL}/api/graphql`,
	exchanges: [cacheExchange, fetchExchange],
});
