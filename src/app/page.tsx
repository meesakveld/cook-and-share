'use client'
import Button from "@/components/common/Button";
import RecipeCard from "@/components/ui/RecipeCard";

import RecipeType from "@/types/Recipe";

export default function Home() {

	const recipe: RecipeType = {
		id: 1,
		title: 'Baked salmon With Cranberry Tapenade',
		description: 'A delicious pasta dish',
		category: ['pasta', 'italian'],
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

		</div>
	);
}