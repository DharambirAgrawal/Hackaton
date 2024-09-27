// import Image from "next/image";
// import Hero from "../../public/hero.jpg";
// const Gallery = ({ information }: { information: any }) => {
//   const data = [
//     {
//       img: Hero,
//     },
//     {
//       img: Hero,
//     },
//     {
//       img: Hero,
//     },
//     {
//       img: Hero,
//     },
//     {
//       img: Hero,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
//       {data.map(() => (
//         <div className="grid gap-4">
//           <div>
//             <Image
//               width={500}
//               height={500}
//               className="h-auto max-w-full rounded-lg"
//               src={Hero}
//               alt=""
//             />
//           </div>
//           <div>
//             <Image
//               width={500}
//               height={500}
//               className="h-auto max-w-full rounded-lg"
//               src={Hero}
//               alt=""
//             />
//           </div>
//           <div>
//             <Image
//               width={500}
//               height={500}
//               className="h-auto max-w-full rounded-lg"
//               src={Hero}
//               alt=""
//             />
//           </div>
//         </div>
//       ))}
//       <div className="grid gap-4">
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="grid gap-4">
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="grid gap-4">
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="grid gap-4">
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             width={500}
//             height={500}
//             className="h-auto max-w-full rounded-lg"
//             src={Hero}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

export const Gallery = ({ information }: { information: any }) => {
  // const data = {
  //   ingredients: [
  //     "pizza",
  //     "salami",
  //     "sausage",
  //     "hot dog",
  //     "sandwich",
  //     "cheese",
  //     "pepperoni",
  //     "mozzarella",
  //     "ham",
  //     "chorizo",
  //     "salad",
  //     "basil",
  //     "pasta",
  //     "hamburger",
  //     "fusilli",
  //     "prosciutto",
  //     "omelette",
  //     "antipasto",
  //     "baguette",
  //     "macaroni",
  //   ],
  //   recipes: [
  //     {
  //       label: "Pizza Dough",
  //       url: "http://www.lottieanddoof.com/2010/01/pizza-pulp-fiction-jim-lahey/",
  //       ingredients: [
  //         "500 g bread flour(3 3/4 cups)",
  //         "2 1/2 tsp Dry Yeast instant or active (10 grams)",
  //         "3/4 tsp Table Salt(5 grams)",
  //         "3/4 tsp Sugar, plus a pinch (about 3 grams)",
  //         "1 1/2 cup water at room temperature",
  //         "extra-virgin olive oil for pans",
  //         "2 x yellow onions(medium), finely chopped (pizza cipolla)",
  //         "1/3 cup Heavy Cream(pizza cipolla)",
  //         "1 tsp Kosher Salt(pizza cipolla)",
  //         "2 tsp fresh thyme, coarsely chopped(pizza cipolla)",
  //         "7 oz diced tomatoes, drained(pizza pomodoro)",
  //         "3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)",
  //         "2 tsp Extra Virgin Olive Oil(pizza pomodoro)",
  //         "1/2 tsp Kosher Salt(pizza pomodoro)",
  //         "1 pinch Red Pepper Flakes(pizza pomodoro)",
  //         "8 x fresh basil (large leaves), chopped(pizza pomodoro)",
  //       ],
  //     },
  //     {
  //       label: "Sunday Brunch: Kosher Salami and Eggs Recipe",
  //       url: "http://www.seriouseats.com/recipes/2009/04/sunday-brunch-kosher-salami-and-eggs.html",
  //       ingredients: [
  //         "Six 1/4-inch thick slices kosher salami",
  //         "8 large eggs",
  //         "Freshly ground black pepper",
  //       ],
  //     },
  //     {
  //       label: "Shortcut Sausage Meatballs",
  //       url: "https://food52.com/recipes/80813-shortcut-sausage-meatballs",
  //       ingredients: [
  //         "1 pound fresh, loose sausage",
  //         "3 tablespoons canola oil, plus more as needed",
  //       ],
  //     },
  //     {
  //       label: "Breakfast Hot Dog",
  //       url: "https://food52.com/recipes/40299-breakfast-hot-dog",
  //       ingredients: [
  //         "2 hot dogs",
  //         "2 eggs",
  //         "1 potato",
  //         "4 bacon strips",
  //         "parsley",
  //         "Pinch cayenne pepper",
  //         "2 hot dog buns",
  //         "Handful cheese",
  //         "2 tablespoons melted butter",
  //       ],
  //     },
  //     {
  //       label: "Cambridge Market Sandwich",
  //       url: "https://food52.com/recipes/12390-cambridge-market-sandwich",
  //       ingredients: [
  //         "1 fresh baguette, cut into sandwich parts",
  //         "1 tablespoon good quality unsalted butter, per sandwich (so 4 tbsp if making 4 sandwiches)",
  //         "1 apple, Cox’s or Gala preferably (2 apples for 4 sandwiches)",
  //         "1 slice of English blue cheese, preferably a Stilton (again, or 4 slices for 4 sandwiches)",
  //       ],
  //     },
  //   ],
  // };

  return (
    <div className="container mx-auto p-6">
      {/* Section for Ingredients */}
      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {information?.ingredients.map((ingredient: any, index: any) => (
            <li key={index} className="p-2 bg-white rounded-md shadow">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Section for Recipes */}
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {information?.recipes.map((recipe: any, index: any) => (
            <div key={index} className="bg-white p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold mb-2">{recipe.label}</h3>
              <a
                href={recipe.url}
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe
              </a>
              <ul className="mt-4">
                {recipe.ingredients.map((ingredient: any, i: any) => (
                  <li key={i} className="text-sm text-gray-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example data prop
