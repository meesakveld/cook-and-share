import type { Core } from '@strapi/strapi';
import recipeSchema from "./api/recipe/graphql/schema";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    const extension = () => ({
      typeDefs: recipeSchema.typeDefs,
      resolvers: {
        Mutation: {
          ...recipeSchema.resolvers.Mutation,
        },
      },
    })
    strapi.plugin('graphql').service('extension').use(extension)
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) { },
};
