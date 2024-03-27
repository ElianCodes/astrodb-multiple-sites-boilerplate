import type { APIRoute } from "astro";
import { introspectionFromSchema } from "graphql";
import { schema } from "../../graphql";
import { createYoga } from "graphql-yoga";

const { handleRequest } = createYoga({
	schema,
	graphqlEndpoint: "/api/schema",
	fetchAPI: {
		Request: Request,
		Response: Response,
	},
});

export const POST: APIRoute = async (context) => {
	console.log("schema fetched");
	const { request } = context;
	return await handleRequest(request, context);
};

export const GET: APIRoute = async () => {
	return new Response(JSON.stringify(introspectionFromSchema(schema)));
};
