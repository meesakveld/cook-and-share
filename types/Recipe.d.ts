import Category from "./Category"

type RecipeType = {
    id: number,
    title: string,
    description: string,
    category: Category[],
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