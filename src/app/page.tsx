'use client'
import { useEffect, useState } from "react";

import Button from "@/components/common/Button";
import InputText from "@/components/forms/input-components/InputText";
import RecipeCard from "@/components/ui/RecipeCard";

import RecipeType from "@/types/Recipe";
import Category from "@/types/Category";
import InputTextArea from "@/components/forms/input-components/InputTextArea";
import InputSelectMultiple from "@/components/forms/input-components/InputSelectMultiple";

export default function Home() {
	const [inputText, setInputText] = useState<string>('');
	const [inputSelect, setInputSelect] = useState<Category[]>([
		{ id: 1, value: 'pasta', name: 'Pasta' },
		{ id: 2, value: 'italian', name: 'Italian' },
		{ id: 3, value: 'vegetarian', name: 'Vegetarian' },
	]);
	const allCategories: Category[] = [
		{ id: 1, value: 'pasta', name: 'Pasta' },
		{ id: 2, value: 'italian', name: 'Italian' },
		{ id: 3, value: 'vegetarian', name: 'Vegetarian' },
		{ id: 4, value: 'meat', name: 'Meat' },
		{ id: 5, value: 'fish', name: 'Fish' },
		{ id: 6, value: 'vegan', name: 'Vegan' },
		{ id: 7, value: 'gluten-free', name: 'Gluten-free' },
		{ id: 8, value: 'dairy-free', name: 'Dairy-free' },
	]

	const recipe: RecipeType = {
		id: 1,
		title: 'Baked salmon With Cranberry Tapenade',
		description: 'A delicious pasta dish',
		category: [{ id: 1, value: 'pasta', name: 'Pasta' }, { id: 2, value: 'italian', name: 'Italian' }],
		difficulty: 2,
		totalTime: 130,
		images: [
			'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://plus.unsplash.com/premium_photo-1661601722152-87143d4be5b9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		],
		ingredients: [
			{ ingredient: 'Pasta', amount: '200g' },
			{ ingredient: 'Egg', amount: '2' },
			{ ingredient: 'Bacon', amount: '100g' },
			{ ingredient: 'Parmesan', amount: '50g' },
		],
		directions: [
			'Cook the pasta',
			'Fry the bacon',
			'Mix the egg with the parmesan',
			'Mix everything together',
		],
	};

	const toggleFavoriteStatus = () => {
        console.log('toggleFavoriteStatus');
    }

	return (
		<div className="mw p-4">
			<h1>Homepage</h1>

			<Button color='red' function='button'>View all recipes</Button>

			<div className="flex gap-4 justify-between">
				<RecipeCard recipe={recipe} toggleFavoriteStatus={toggleFavoriteStatus} />
				<RecipeCard recipe={recipe} toggleFavoriteStatus={toggleFavoriteStatus} />
				<RecipeCard recipe={recipe} toggleFavoriteStatus={toggleFavoriteStatus} />
				<RecipeCard recipe={recipe} toggleFavoriteStatus={toggleFavoriteStatus} />
			</div>

			<form className="flex flex-col gap-4">
				<InputText 
					id="input-text" 
					label="Recipe title" 
					color="red" 
					maxLength={50}
					value={inputText} 
					setValue={setInputText} 
					placeholder="Recipe title" 
					required={true} 
					errorMessage="This field is required"
				/>
				
				<InputTextArea
					id="input-text" 
					label="Description" 
					color="red" 
					maxLength={50}
					value={inputText} 
					setValue={setInputText} 
					placeholder="Description" 
					required={true} 
					rows={3}
					errorMessage="This field is required"
				/>

				<InputSelectMultiple
					id="input-text" 
					label="Categories" 
					options={allCategories}
					color="red" 
					value={inputSelect} 
					setValue={setInputSelect} 
					placeholder="Categories" 
					required={true} 
					errorMessage="This field is required"
				/>
			</form>

		</div>
	);
}