'use server';
import graphqlRequest, { getRecipes } from "@/graphql";

import Recipe from "@/types/Recipe";
import Category from "@/types/Category";

import Button from "@/components/common/Button";
import RecipeCard from "@/components/ui/RecipeCard";
import Hero from "@/components/layout/Hero";
import Title from "@/components/common/Title";

export default  async function Home() {
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

	const response: { recipes: Recipe[] } = await graphqlRequest(getRecipes, { sort: "createdAt", pagination: { limit: 10 } })

	return (
		<div>
			<Hero title="Share recipes, And Inspire Others" />

			<Button color='beige' function='link' style={{ display: 'block', width: 'fit-content', margin: 'auto' }} href='#share-recipes'>
				Start to share
			</Button>

			<div className="mw p-4">

				<Title id="share-recipes">Share recipes</Title>

				<div className="flex gap-4 justify-between overflow-scroll hide-scrollbar pr-2">
					{ response.recipes && response.recipes.map((recipe) => (
						<RecipeCard key={recipe.documentId} recipe={recipe} />
					))}
				</div>

			</div>

		</div>
	);
}











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