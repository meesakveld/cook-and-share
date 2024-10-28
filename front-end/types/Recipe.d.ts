import Category from "./Category"

type RecipeType = {
    documentId: string,
    title: string,
    description: string,
    category: Category[],
    difficulty: int,
    totalTime: '5' | '15' | '30' | '45' | '60' | '60+',
    images: string[],
    ingredients: IngredientType[],
    directions: DifficultyType[],
    user: User,
}

export default RecipeType

export type IngredientType = {
    name: string,
    amount: string,
}

export type DifficultyType = {
    description: string,
    step: number,
}

type User = {
    firstname: string,
    lastname: string,
    documentId: string,
}
