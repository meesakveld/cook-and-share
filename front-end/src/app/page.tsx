import { useState } from "react";

import Button from "@/components/common/Button";
import InputText from "@/components/forms/input-components/InputText";
import RecipeCard from "@/components/ui/RecipeCard";
import Hero from "@/components/layout/Hero";

import RecipeType from "@/types/Recipe";
import Category from "@/types/Category";
import InputTextArea from "@/components/forms/input-components/InputTextArea";
import InputSelectMultiple from "@/components/forms/input-components/InputSelectMultiple";
import Title from "@/components/common/Title";

export default function Home() {
	// const [inputText, setInputText] = useState<string>('');
	// const [inputSelect, setInputSelect] = useState<Category[]>([
	// 	{ documentId: 1, name: 'Pasta' },
	// 	{ documentId: 2, name: 'Italian' },
	// 	{ documentId: 3, name: 'Vegetarian' },
	// ]);
	const allCategories: Category[] = [
		{ documentId: 1, name: 'Pasta' },
		{ documentId: 2, name: 'Italian' },
		{ documentId: 3, name: 'Vegetarian' },
		{ documentId: 4, name: 'Meat' },
		{ documentId: 5, name: 'Fish' },
		{ documentId: 6, name: 'Vegan' },
		{ documentId: 7, name: 'Gluten-free' },
		{ documentId: 8, name: 'Dairy-free' },
	]

	const recipe: RecipeType = {
		documentId: '1',
		title: 'Baked salmon With Cranberry Tapenade',
		description: 'A delicious pasta dish',
		category: [{ documentId: 1, name: 'Pasta' }, { documentId: 2, name: 'Italian' }],
		difficulty: 2,
		totalTime: "30",
		images: [
			'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://plus.unsplash.com/premium_photo-1661601722152-87143d4be5b9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		],
		ingredients: [
			{ name: 'Pasta', amount: '200g' },
			{ name: 'Egg', amount: '2' },
			{ name: 'Bacon', amount: '100g' },
			{ name: 'Parmesan', amount: '50g' },
		],
		directions: [
			{ step: 1, description: 'Cook the pasta' },
			{ step: 2, description: 'Fry the bacon' },
			{ step: 3, description: 'Mix the egg with the parmesan' },
			{ step: 4, description: 'Mix everything together' },
		],
		user: {
			documentId: '1',
			firstname: 'John',
			lastname: 'Doe',
		},
	};

	return (
		<div>
			<Hero title="Share recipes, And Inspire Others" />

			<Button color='beige' function='link' style={{ display: 'block', width: 'fit-content', margin: 'auto' }} href='#share-recipes'>
				Start to share
			</Button>

			<div className="mw p-4">

				<Title id="share-recipes">Share recipes</Title>

				<div className="flex gap-4 justify-between">
					<RecipeCard recipe={recipe} />
					<RecipeCard recipe={recipe} />
					<RecipeCard recipe={recipe} />
					<RecipeCard recipe={recipe} />
				</div>

				{/* <form className="flex flex-col gap-4">
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
					options={allCategories.map(category => ({ name: category.name, value: category.name }))}
					color="red" 
					value={inputSelect.map(category => ({ name: category.name, value: category.name }))}
					setValue={setInputSelect} 
					placeholder="Categories" 
					required={true} 
					errorMessage="This field is required"
				/>
			</form> */}

			</div>

		</div>
	);
}