import { defineDb, column, defineTable } from "astro:db";

const Post = defineTable({
	columns: {
		title: column.text(),
	},
});

export default defineDb({
	tables: {
		Post,
	},
});
