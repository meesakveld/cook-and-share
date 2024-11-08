import Category from "./Category"

type RecipeType = {
    documentId: string,
    title: string,
    description: string,
    categories: Category[],
    difficulty: int,
    totalTime: '5' | '15' | '30' | '45' | '60' | '60+',
    images: ImageType[],
    ingredients: IngredientType[],
    directions: DirectionType[],
    comments: CommentType[],
    user: User
}

export default RecipeType

export type IngredientType = {
    name: string,
    amount: string,
}

export type DirectionType = {
    description: string,
    step: number,
}

export type CommentType = {
    comment: string,
    documentId: string,
    datePosted: string,
    user: User,
}

export type ImageType = {
    url: string,
    documentId: string,
}

type User = {
    firstname: string,
    lastname: string,
    documentId: string,
}
