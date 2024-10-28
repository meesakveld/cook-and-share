import mutations from "./mutations";

export default {
  typeDefs: `
      extend type Mutation {
        upsertRecipe(data: UpsertRecipeInput!): Recipe
      }
  
      input UpsertRecipeInput {
        id: ID
        title: String!
        description: String
        ingredients: [IngredientInput!]!
        directions: [DirectionInput!]!
        difficulty: Int
        totalTime: String
        categories: [ID!]!
        images: [String!]
        user: ID!
        datePosted: String
      }
  
      input IngredientInput {
        name: String!
        amount: String!
      }

      input DirectionInput {
        step: Int!
        description: String!
      }
    `,
  resolvers: {
    Mutation: {
      upsertRecipe: mutations.upsertRecipe,
    },
  },
};
