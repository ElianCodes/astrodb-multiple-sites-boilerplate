export const typeDefs = /* GraphQL */ `
  type Post {
    title: String!
  }

  type Query {
    post: [Post!]!
  }
`;
