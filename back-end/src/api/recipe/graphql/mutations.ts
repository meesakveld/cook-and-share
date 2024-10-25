export default {
  // This is your custom upsert mutation
  async upsertRecipe(parent, args, context) {
    const { title, description, ingredients, directions, difficulty, totalTime, categories, user, datePosted } = args.data;
    const id = args.data?.id;

    // Check if the recipe exists
    let existingRecipe;
    if (id) {
      existingRecipe = await strapi.entityService.findOne('api::recipe.recipe', id, {
        populate: ['ingredients'], // Populate the ingredients to get current IDs
      });
    }

    // ——————— Process ingredients ———————
    // Process ingredients
    const ingredientPromises = ingredients.map(async (ingredient) => {
      // If the ingredient has an ID, update it
      if (ingredient.id) {
        return await strapi.entityService.update('api::ingredient.ingredient', ingredient.id, {
          data: { name: ingredient.name, amount: ingredient.amount },
        });
      } else {
        // If it doesn't have an ID, create a new ingredient
        return await strapi.entityService.create('api::ingredient.ingredient', {
          data: { name: ingredient.name, amount: ingredient.amount },
        });
      }
    });

    // Wait for all ingredients to be processed
    const processedIngredients = await Promise.all(ingredientPromises);

    // Extract the IDs of the processed ingredients
    const ingredientIds: any = processedIngredients.map(i => i.documentId);


    // ——————— Process directions ———————
    // Process directions
    const directionPromises = directions.map(async (direction) => {
      // If the direction has an ID, update it
      if (direction.id) {
        return await strapi.entityService.update('api::direction.direction', direction.id, {
          data: { step: direction.step, description: direction.description },
        });
      } else {
        // If it doesn't have an ID, create a new direction
        return await strapi.entityService.create('api::direction.direction', {
          data: { step: direction.step, description: direction.description },
        });
      }
    });

    // Wait for all directions to be processed
    const processedDirections = await Promise.all(directionPromises);

    // Extract the IDs of the processed directions
    const directionIds: any = processedDirections.map(i => i.documentId);


    // ——————— Process recipe ———————
    const recipeData = {
      title, 
      description, 
      difficulty, 
      totalTime, 
      categories, 
      user, 
      datePosted,
      images: [] // If you want to include images
    };

    if (existingRecipe) {
      // Update existing recipe with the new array of ingredient IDs
      return await strapi.entityService.update('api::recipe.recipe', id, {
        data: { 
          ...recipeData,
          ingredients: ingredientIds, // Use the correctly formatted input here
          directions: directionIds, // Use the correctly formatted input here
        },
      });
    } else {
      // Create new recipe with the new array of ingredient IDs
      return await strapi.entityService.create('api::recipe.recipe', {
        data: { 
          ...recipeData,
          ingredients: ingredientIds, // Use the correctly formatted input here
          directions: directionIds // Use the correctly formatted input here
        },
      });
    }
  },
};
