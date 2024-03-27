import { db, Post } from "astro:db";
import { typeDefs } from "./schema";
import { createSchema } from "graphql-yoga";

export const schema = createSchema({
	typeDefs: typeDefs,
	resolvers: {
		Query: {
			post: async () => await db.select().from(Post),
		},
	},
});
