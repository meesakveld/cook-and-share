import mutations from "./mutations";

export default {
  typeDefs: `
      extend type Mutation {
        addRecipe(data: AddRecipeInput!): Recipe
      }
  
      input AddRecipeInput {
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

      extend type Mutation {
        addCommentToRecipe(data: AddCommentToRecipeInput!): Recipe
      }

      input AddCommentToRecipeInput {
        recipeId: ID!
        comment: String!
        userId: ID!
      }

    `,
  resolvers: {
    Mutation: {
      addRecipe: mutations.addRecipe,
      addCommentToRecipe: mutations.addCommentToRecipe,
    },
  },
};
