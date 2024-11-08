'use client';

// ——— React ———
import { useState } from 'react';

// ——— Components ———
import InputText from '@/components/forms/input-components/InputText';
import InputTextArea from '@/components/forms/input-components/InputTextArea';
import InputSelectMultiple from '@/components/forms/input-components/InputSelectMultiple';
import InputSelectOneFromMultiple from '@/components/forms/input-components/InputSelectOneFromMultiple';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';

// ——— Types ———
import RecipeType, { DirectionType as Direction, IngredientType as Ingredient } from '@/types/Recipe';
import Category from '@/types/Category';
import { addRecipeProps } from '@/app/(pages)/recipes/add/actions';
import convertFileToBase64 from '@/utils/convertFileToBase64';

type RecipeFormProps = {
    title: string,
    description: string,
    categories: { name: string, documentId: string }[],
    difficulty: { name: string, value: number },
    totalTime: { name: '5' | '15' | '30' | '45' | '60' | '60+', value: "5" | "15" | "30" | "45" | "60" | "60+" },
    images: string[],
    ingredients: Ingredient[],
    directions: Direction[],
}

type AddRecipeFormProps = {
    categories: Category[]
    addRecipeFunction: ({ title, description, ingredients, difficulty, totalTime, categories, directions, images }: addRecipeProps) => Promise<{ data?: RecipeType, error?: string } | undefined>
}

export default function AddRecipeForm({ categories, addRecipeFunction }: AddRecipeFormProps) {
    const initialFormState: RecipeFormProps = {
        title: '',
        description: '',
        categories: [],
        difficulty: { name: 'Medium', value: 3 },
        totalTime: { name: '30', value: '30' },
        images: [],
        ingredients: [
            { name: '', amount: '' },
            { name: '', amount: '' }
        ],
        directions: [
            { step: 1, description: '' },
            { step: 2, description: '' }
        ],
    }

    const [recipe, setRecipe] = useState(initialFormState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setRecipe({ ...recipe, [name]: value })
    }

    const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, { name: '', amount: '' }] })
    }

    const handleRemoveIngredient = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault()
        const newIngredients = [...recipe.ingredients]
        newIngredients.splice(index, 1)
        setRecipe({ ...recipe, ingredients: newIngredients })
    }

    const handleAddDirection = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRecipe({ ...recipe, directions: [...recipe.directions, { step: recipe.directions.length + 1, description: '' }] })
    }

    const handleRemoveDirection = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault()
        const newDirections = [...recipe.directions]
        newDirections.splice(index, 1)
        setRecipe({ ...recipe, directions: newDirections })
    }

    const handleAddRecipe = async () => {
        const response = await addRecipeFunction({
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            difficulty: recipe.difficulty.value,
            totalTime: recipe.totalTime.value,
            categories: recipe.categories.map(category => category.documentId),
            directions: recipe.directions,
            images: recipe.images,
        })
        if (response?.error) {
            console.error(response.error)
        }
        const newRecipeDocumentId = response?.data?.documentId
        if (newRecipeDocumentId) {
            window.location.href = `/recipes/${newRecipeDocumentId}`
        }
    }

    return (
        <form className='border-2 border-red p-4 md:p-6 rounded-[15px]'>

            <div className='flex flex-col gap-24'>

                <div className='flex flex-col gap-4'>

                    <h1 className='font-manuka uppercase text-3vw text-red'>Share a recipe</h1>

                    <div className='flex flex-col md:flex-row gap-6 w-full'>

                        <div className='flex flex-col gap-4 w-full md:w-7/12'>
                            <InputText
                                name="title"
                                label="Title"
                                value={recipe.title}
                                onChange={handleChange}
                                color='red'
                                placeholder='Title'
                            />

                            <InputTextArea
                                id="description"
                                label="Description"
                                value={recipe.description}
                                onChange={handleChange}
                                color='red'
                                placeholder='Description'
                                rows={3}
                            />

                            <InputSelectMultiple
                                id="categories"
                                label="Categories"
                                values={recipe.categories}
                                setValue={(values: { name: string, documentId: string }[]) => setRecipe({ ...recipe, categories: values })}
                                color='red'
                                nameAndValue={{ name: 'name', value: 'documentId' }}
                                options={categories}
                                placeholder='Choose one or more categories'
                            />

                            <InputSelectOneFromMultiple
                                id="difficulty"
                                label="Difficulty"
                                value={recipe.difficulty}
                                setValue={(value: { name: string, value: number }) => setRecipe({ ...recipe, difficulty: value })}
                                color='red'
                                options={[
                                    { name: 'Easy', value: 1 },
                                    { name: 'Simple', value: 2 },
                                    { name: 'Normal', value: 3 },
                                    { name: 'Medium', value: 4 },
                                    { name: 'Hard', value: 5 },
                                ]}
                                nameAndValue={{ name: 'name', value: 'value' }}
                            />

                            <InputSelectOneFromMultiple
                                id="totalTime"
                                label="Total Time"
                                value={recipe.totalTime}
                                setValue={(value: { name: '5' | '15' | '30' | '45' | '60' | '60+', value: "5" | "15" | "30" | "45" | "60" | "60+" }) => setRecipe({ ...recipe, totalTime: value })}
                                color='red'
                                options={[
                                    { name: '5', value: '5' },
                                    { name: '15', value: '15' },
                                    { name: '30', value: '30' },
                                    { name: '45', value: '45' },
                                    { name: '60', value: '60' },
                                    { name: '60+', value: '60+' },
                                ]}
                                nameAndValue={{ name: 'name', value: 'value' }}
                            />

                        </div>

                        <div className='w-full md:w-5/12 flex flex-col gap-2'>
                            <p className='block text-sm font-openSansCondensed text-red'>Images</p>

                            <input accept='image/*' type='file' onChange={async (e) => {
                                const files = e.target.files;
                                if (files) {
                                    const base64Images: string[] = [];
                                    const fileArray = Array.from(files);

                                    for (const file of fileArray) {
                                        const base64: string = await convertFileToBase64(file);
                                        base64Images.push(base64);
                                    }

                                    setRecipe({ ...recipe, images: base64Images });
                                }
                            }} multiple />

                            <div className="grid grid-cols-3 gap-4 mt-4">
                                {recipe.images.map((image, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden border border-red">
                                        <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col gap-4 md:gap-6 items-baseline'>
                    <Title hTag='h2'>Ingredients</Title>

                    <div className='w-full flex flex-col gap-2'>
                        {recipe.ingredients.map((ingredient, index) => (
                            <div key={index} className='flex gap-2 md:gap-4 w-full items-center'>
                                <div className='w-full'>
                                    <InputText
                                        name={`ingredient-${index}`}
                                        label=""
                                        value={ingredient.name}
                                        onChange={(e) => {
                                            const newIngredients = [...recipe.ingredients];
                                            newIngredients[index].name = e.target.value;
                                            setRecipe({ ...recipe, ingredients: newIngredients });
                                        }}
                                        color='beige'
                                        placeholder='Ingredient'
                                    />
                                </div>

                                <div className='w-4/12'>
                                    <InputText
                                        name={`amount-${index}`}
                                        label=""
                                        value={ingredient.amount}
                                        onChange={(e) => {
                                            const newIngredients = [...recipe.ingredients];
                                            newIngredients[index].amount = e.target.value;
                                            setRecipe({ ...recipe, ingredients: newIngredients });
                                        }}
                                        color='beige'
                                        placeholder='Amount'
                                    />
                                </div>

                                <div className='w-8 flex-shrink-0'>
                                    {index !== 0 && (
                                        <button onClick={(ev) => { handleRemoveIngredient(ev, index) }} className='hover:opacity-50'>
                                            <svg width="16" height="15" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.32764L6.65527 0.672363M6.65527 6.32764L1 0.672363" stroke="rgb(var(--color-red))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </button>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>

                    <Button function='button' onClick={handleAddIngredient} color='red'>Add ingredient</Button>
                </div>

                <div className='flex flex-col gap-4 md:gap-6 items-baseline'>
                    <Title hTag='h2'>Directions</Title>

                    <div className='w-full flex flex-col gap-2'>
                        {recipe.directions.map((direction, index) => (
                            <div key={index} className='flex gap-4 w-full items-center'>
                                <div className='w-full'>
                                    <InputText
                                        name={`direction-${index}`}
                                        label=""
                                        value={direction.description}
                                        onChange={(e) => {
                                            const newDirections = [...recipe.directions];
                                            newDirections[index].description = e.target.value;
                                            setRecipe({ ...recipe, directions: newDirections });
                                        }}
                                        color='beige'
                                        placeholder='Description'
                                    />
                                </div>

                                <div className='w-8 flex-shrink-0'>
                                    {index !== 0 && (
                                        <button onClick={(ev) => { handleRemoveDirection(ev, index) }} className='hover:opacity-50'>
                                            <svg width="16" height="15" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.32764L6.65527 0.672363M6.65527 6.32764L1 0.672363" stroke="rgb(var(--color-red))" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </button>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>

                    <Button function='button' onClick={handleAddDirection} color='red'>Add direction</Button>

                </div>

                <Button function='button' color='red' onClick={(ev) => { ev.preventDefault(); handleAddRecipe() }}>Add recipe</Button>

            </div>
        </form>
    )
}
