import fs from 'fs';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));

// Function to convert image to Base64
function imageToBase64(filePath) {
    const image = fs.readFileSync(filePath);
    return `data:image/png;base64,${image.toString('base64')}`;
}

const recipes = [
    {
        title: "Chicken Alfredo",
        description: "Creamy chicken alfredo with fettuccine noodles.",
        ingredients: [
            { "name": "Chicken Breast", "amount": "2, diced" },
            { "name": "Fettuccine Noodles", "amount": "8 oz" },
            { "name": "Heavy Cream", "amount": "1 cup" },
            { "name": "Parmesan Cheese", "amount": "1 cup" },
            { "name": "Garlic", "amount": "2 cloves, minced" }
        ],
        difficulty: 3,
        totalTime: "30",
        categories: [
            "gxm79u7bavl3jekdyhe1mkkn"  // Main Course
        ],
        directions: [
            { step: 1, description: "Cook fettuccine noodles according to package instructions." },
            { step: 2, description: "In a large skillet, cook chicken until no longer pink." },
            { step: 3, description: "Add garlic and cook for an additional minute." },
            { step: 4, description: "Stir in heavy cream and parmesan cheese." },
            { step: 5, description: "Simmer until sauce thickens." },
            { step: 6, description: "Serve chicken and sauce over fettuccine noodles." }
        ],
        images: [
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_1.png`)), // First image
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_2.png`))  // Second image
        ],
        user: "hx5q5gk59cj7ol15lp685o47", // Mees
        datePosted: "2024-10-25T08:15:00Z"
    },
    {
        title: "Chocolate Chip Cookies",
        description: "Classic chocolate chip cookies.",
        ingredients: [
            { "name": "Butter", "amount": "1 cup" },
            { "name": "Sugar", "amount": "1 cup" },
            { "name": "Brown Sugar", "amount": "1 cup" },
            { "name": "Eggs", "amount": "2" },
            { "name": "Vanilla Extract", "amount": "1 tsp" },
            { "name": "Flour", "amount": "3 cups" },
            { "name": "Baking Soda", "amount": "1 tsp" },
            { "name": "Salt", "amount": "1/2 tsp" },
            { "name": "Chocolate Chips", "amount": "2 cups" }
        ],
        difficulty: 2,
        totalTime: "25",
        categories: [
            "gxm79u7bavl3jekdyhe1mkkn"  // Main Course
        ],
        directions: [
            { step: 1, description: "Preheat oven to 375°F." },
            { step: 2, description: "Cream together butter, sugar, and brown sugar." },
            { step: 3, description: "Add eggs and vanilla extract." },
            { step: 4, description: "In a separate bowl, combine flour, baking soda, and salt." },
            { step: 5, description: "Gradually add dry ingredients to wet ingredients." },
            { step: 6, description: "Stir in chocolate chips." },
            { step: 7, description: "Drop spoonfuls of dough onto a baking sheet." },
            { step: 8, description: "Bake for 8-10 minutes." }
        ],
        images: [
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_3.png`)), // First image
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_4.png`))  // Second image
        ],
        user: "hx5q5gk59cj7ol15lp685o47", // Mees
        datePosted: "2024-10-25T08:15:00Z"
    },
    {
        title: "Caesar Salad",
        description: "Classic Caesar salad with homemade dressing.",
        ingredients: [
            { "name": "Romaine Lettuce", "amount": "1 head" },
            { "name": "Croutons", "amount": "1 cup" },
            { "name": "Parmesan Cheese", "amount": "1/2 cup" },
            { "name": "Lemon Juice", "amount": "1/4 cup" },
            { "name": "Dijon Mustard", "amount": "1 tsp" },
            { "name": "Worcestershire Sauce", "amount": "1 tsp" },
            { "name": "Anchovy Paste", "amount": "1 tsp" },
            { "name": "Garlic", "amount": "1 clove, minced" },
            { "name": "Olive Oil", "amount": "1/2 cup" }
        ],
        difficulty: 1,
        totalTime: "15",
        categories: [
            "gxm79u7bavl3jekdyhe1mkkn"  // Main Course
        ],
        directions: [
            { step: 1, description: "In a large bowl, whisk together lemon juice, Dijon mustard, Worcestershire sauce, anchovy paste, and garlic." },
            { step: 2, description: "Slowly drizzle in olive oil while whisking." },
            { step: 3, description: "Add romaine lettuce, croutons, and parmesan cheese." },
            { step: 4, description: "Toss until well coated." }
        ],
        images: [
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_5.png`)), // First image
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_6.png`))  // Second image
        ],
        user: "hx5q5gk59cj7ol15lp685o47", // Mees
        datePosted: "2024-10-25T08:15:00Z"
    },
    {
        title: "Spaghetti Carbonara",
        description: "Classic spaghetti carbonara with pancetta and eggs.",
        ingredients: [
            { "name": "Spaghetti", "amount": "8 oz" },
            { "name": "Pancetta", "amount": "4 oz, diced" },
            { "name": "Eggs", "amount": "2" },
            { "name": "Parmesan Cheese", "amount": "1 cup" },
            { "name": "Black Pepper", "amount": "1/2 tsp" }
        ],
        difficulty: 2,
        totalTime: "20",
        categories: [
            "gxm79u7bavl3jekdyhe1mkkn"  // Main Course
        ],
        directions: [
            { step: 1, description: "Cook spaghetti according to package instructions." },
            { step: 2, description: "In a large skillet, cook pancetta until crispy." },
            { step: 3, description: "In a bowl, whisk together eggs, parmesan cheese, and black pepper." },
            { step: 4, description: "Drain spaghetti and add to skillet with pancetta." },
            { step: 5, description: "Pour egg mixture over spaghetti and toss until coated." }
        ],
        images: [
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_7.png`)), // First image
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_8.png`))  // Second image
        ],
        user: "hx5q5gk59cj7ol15lp685o47", // Mees
        datePosted: "2024-10-25T08:15:00Z"
    },
    {
        title: "Tiramisu",
        description: "Classic tiramisu with coffee-soaked ladyfingers and mascarpone cream.",
        ingredients: [
            { "name": "Egg Yolks", "amount": "4" },
            { "name": "Sugar", "amount": "1/2 cup" },
            { "name": "Mascarpone Cheese", "amount": "1 cup" },
            { "name": "Heavy Cream", "amount": "1 cup" },
            { "name": "Ladyfingers", "amount": "24" },
            { "name": "Coffee", "amount": "1 cup, brewed" },
            { "name": "Cocoa Powder", "amount": "2 tbsp" }
        ],
        difficulty: 3,
        totalTime: "45",
        categories: [
            "gxm79u7bavl3jekdyhe1mkkn"  // Main Course
        ],
        directions: [
            { step: 1, description: "In a heatproof bowl, whisk together egg yolks and sugar." },
            { step: 2, description: "Place bowl over a pot of simmering water and whisk until thickened." },
            { step: 3, description: "Remove from heat and whisk in mascarpone cheese." },
            { step: 4, description: "In a separate bowl, whip heavy cream until stiff peaks form." },
            { step: 5, description: "Fold whipped cream into mascarpone mixture." },
            { step: 6, description: "Dip ladyfingers in coffee and layer in a dish." },
            { step: 7, description: "Spread mascarpone mixture over ladyfingers." },
            { step: 8, description: "Repeat layers and refrigerate for at least 4 hours." },
            { step: 9, description: "Dust with cocoa powder before serving." }
        ],
        images: [
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_9.png`)), // First image
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_10.png`))  // Second image
        ],
        user: "hx5q5gk59cj7ol15lp685o47", // Mees
        datePosted: "2024-10-25T08:15:00Z"
    },
    {
        title: "Beef Tacos",
        description: "Classic beef tacos with seasoned ground beef and toppings.",
        ingredients: [
            { "name": "Ground Beef", "amount": "1 lb" },
            { "name": "Taco Seasoning", "amount": "1 packet" },
            { "name": "Taco Shells", "amount": "12" },
            { "name": "Lettuce", "amount": "1 cup, shredded" },
            { "name": "Tomato", "amount": "1, diced" },
            { "name": "Cheddar Cheese", "amount": "1 cup, shredded" },
            { "name": "Sour Cream", "amount": "1/2 cup" }
        ],
        difficulty: 1,
        totalTime: "20",
        categories: [
            "gxm79u7bavl3jekdyhe1mkkn"  // Main Course
        ],
        directions: [
            { step: 1, description: "In a skillet, cook ground beef until no longer pink." },
            { step: 2, description: "Add taco seasoning and water according to packet instructions." },
            { step: 3, description: "Simmer until thickened." },
            { step: 4, description: "Heat taco shells according to package instructions." },
            { step: 5, description: "Fill taco shells with beef mixture, lettuce, tomato, cheese, and sour cream." }
        ],
        images: [
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_11.png`)), // First image
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_12.png`))  // Second image
        ],
        user: "hx5q5gk59cj7ol15lp685o47", // Mees
        datePosted: "2024-10-25T08:15:00Z"
    },
    {
        title: "Chicken Stir Fry",
        description: "Chicken stir fry with vegetables and teriyaki sauce.",
        ingredients: [
            { "name": "Chicken Breast", "amount": "2, sliced" },
            { "name": "Broccoli", "amount": "1 cup, chopped" },
            { "name": "Bell Pepper", "amount": "1, sliced" },
            { "name": "Carrot", "amount": "1, sliced" },
            { "name": "Teriyaki Sauce", "amount": "1/2 cup" },
            { "name": "Rice", "amount": "1 cup, cooked" },
            { "name": "Sesame Seeds", "amount": "1 tbsp" }
        ],
        difficulty: 2,
        totalTime: "25",
        categories: [
            "gxm79u7bavl3jekdyhe1mkkn"  // Main Course
        ],
        directions: [
            { step: 1, description: "In a wok, stir fry chicken until no longer pink." },
            { step: 2, description: "Add broccoli, bell pepper, and carrot." },
            { step: 3, description: "Stir in teriyaki sauce and cook until vegetables are tender." },
            { step: 4, description: "Serve over cooked rice and sprinkle with sesame seeds." }
        ],
        images: [
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_13.png`)), // First image
            imageToBase64(path.join(__dirname, `./seeder/data/assets/food-image_14.png`))  // Second image
        ],
        user: "hx5q5gk59cj7ol15lp685o47", // Mees
        datePosted: "2024-10-25T08:15:00Z"
    }
];



export default recipes;