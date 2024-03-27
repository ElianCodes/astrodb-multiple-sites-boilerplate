import { db, Post } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db
		.insert(Post)
		.values([
			{ title: "Hello, world!" },
			{ title: "Goodbye, world!" },
			{ title: "Hello, again!" },
		]);
}
