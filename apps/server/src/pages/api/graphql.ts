import type { APIRoute } from "astro";
import { createYoga } from "graphql-yoga";
import { schema } from "../../graphql";

const { handleRequest } = createYoga({
	schema,
	graphqlEndpoint: "/api/graphql",
	fetchAPI: {
		Request: Request,
		Response: Response,
	},
});

export const POST: APIRoute = async (context) => {
	const { request } = context;
	return await handleRequest(request, context);
};
