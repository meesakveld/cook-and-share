'use server';
// ——— GraphQL ———
import graphqlRequest, { getRecipes } from "@/graphql";

// ——— Next.js ———
import Link from "next/link";

// ——— Types ———
import Recipe from "@/types/Recipe";

// ——— Components ———
import Button from "@/components/common/Button";
import RecipeCard from "@/components/ui/RecipeCard";
import Hero from "@/components/layout/Hero";
import Title from "@/components/common/Title";

export default async function Home() {
	const response: { recipes: Recipe[] } = await graphqlRequest(getRecipes, { sort: "createdAt", pagination: { limit: 8 } })

	return (
		<div className="flex flex-col gap-12">
			<div>
				<Hero title="Share recipes, And Inspire Others" maxFontSize="15vw" />

				<Button color='beige' function='link' style={{ display: 'block', width: 'fit-content', margin: 'auto' }} href='#share-recipes'>Start to share</Button>
			</div>

			<div>
				<div className="mw p-4">
					<Title id="share-recipes">Share recipes</Title>
				</div>

				<div className="flex gap-4 justify-between overflow-x-scroll hide-scrollbar pr-2 pl-4 mw">
					{response.recipes && response.recipes.map((recipe) => (
						<RecipeCard key={recipe.documentId + '-link'} recipe={recipe} />
					))}
				</div>

				<div className="flex gap-4 justify-center my-8">
					<Button color='beige' function='link' href='/recipes'>
						View all recipes
					</Button>

					<Button color='red' function='link' href='/recipes/add' style={{ borderColor: 'rgb(var(--color-red))' }}>
						Share a recipe
					</Button>
				</div>
			</div>

			<div className="mx p-4 flex flex-wrap gap-20 lg:gap-40 justify-center">
				<div className="flex flex-col gap-0">
					<Title fontSize="35vw" maxFontSize="150px">10.000+</Title>
					<p className="max-md:text-center">Recipes shared accros the platform</p>
				</div>

				<div className="flex flex-col gap-0">
					<Title fontSize="35vw" maxFontSize="150px">4.000+</Title>
					<p className="max-md:text-center">Users every day</p>
				</div>

				<div className="flex flex-col gap-0">
					<Title fontSize="35vw" maxFontSize="150px">100+</Title>
					<p className="max-md:text-center">New recipes every day</p>
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