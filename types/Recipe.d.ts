type RecipeType = {
    id: number,
    title: string,
    description: string,
    category: string[],
    difficulty: int,
    totalTime: number,
    images: string[],
    ingredients: IngredientType[],
    directions: string[],
}

export type IngredientType = {
    ingredient: string,
    amount: string,
}

export default RecipeType