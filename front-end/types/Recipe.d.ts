import Category from "./Category"
import User from "./User"

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
    user: User,
}

export type IngredientType = {
    ingredient: string,
    amount: string,
}

export default RecipeType