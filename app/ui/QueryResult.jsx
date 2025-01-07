'use client'

import { useRecipe } from "./recipeContext"

const searchQuery = [
   'carrot',
   'broccoli',
   'asparagus',
   'cauliflower',
   'corn',
   'cucumber',
   'green pepper',
   'lettuce',
   'mushrooms',
   'onion',
   'potato',
   'pumpkin',
   'red pepper',
   'tomato',
   'beetroot',
   'brussel sprouts',
   'peas',
   'zucchini',
   'radish',
   'sweet potato',
   'artichoke',
   'leek',
   'cabbage',
   'celery',
   'chili',
   'garlic',
   'basil',
   'coriander',
   'parsley',
   'dill',
   'rosemary',
   'oregano',
   'cinnamon',
   'saffron',
   'green bean',
   'bean',
   'chickpea',
   'lentil',
   'apple',
   'apricot',
   'avocado',
   'banana',
   'blackberry',
   'blackcurrant',
   'blueberry',
   'boysenberry',
   'cherry',
   'coconut',
   'fig',
   'grape',
   'grapefruit',
   'kiwifruit',
   'lemon',
   'lime',
   'lychee',
   'mandarin',
   'mango',
   'melon',
   'nectarine',
   'orange',
   'papaya',
   'passion fruit',
   'peach',
   'pear',
   'pineapple',
   'plum',
   'pomegranate',
   'quince',
   'raspberry',
   'strawberry',
   'watermelon',
   'salad',
   'pizza',
   'pasta',
   'popcorn',
   'lobster',
   'steak',
   'bbq',
   'pudding',
   'hamburger',
   'pie',
   'cake',
   'sausage',
   'tacos',
   'kebab',
   'poutine',
   'seafood',
   'chips',
   'fries',
   'masala',
   'paella',
   'som tam',
   'chicken',
   'toast',
   'marzipan',
   'tofu',
   'ketchup',
   'hummus',
   'chili',
   'maple syrup',
   'parma ham',
   'fajitas',
   'champ',
   'lasagna',
   'poke',
   'chocolate',
   'croissant',
   'arepas',
   'bunny chow',
   'pierogi',
   'donuts',
   'rendang',
   'sushi',
  'ice cream',
   'duck',
   'curry',
   'beef',
   'goat',
   'lamb',
   'turkey',
   'pork',
   'fish',
   'crab',
   'bacon',
   'ham',
   'pepperoni',
   'salami',
   'ribs',
]

export default function QueryResult() {

   const { isOpen } = useRecipe()

   return (
      isOpen && <>
         <h1 className="font-bold mb-4">Here is a list of available search queries</h1>
         <ul className="flex flex-wrap gap-2">
            {
               searchQuery.map((item, i) => {
                  return <li 
                     key={ i }
                     className="bg-slate-100 px-1 dark:bg-slate-800"
                  >
                     { item }
                  </li>
               })
            }
         </ul>
      </>
   )
}
