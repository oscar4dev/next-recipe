import { getFeaturedRecipes } from "../lib/apiServices"
import FeaturedRecipesItem from "./FeaturedRecipesItem";

export default async function FeaturedRecipes() {

   const featuredRecipes = await getFeaturedRecipes()   

   return (
         <div className="px-4">
            <h1 className="text-center mb-8">Featured Recipes</h1>
            <ul className="flex items-center justify-center flex-col gap-8 w-full sm:w-[5/6] sm:flex-row sm:flex-wrap">
               {
                  featuredRecipes && featuredRecipes.map((item) => { 
                     return <FeaturedRecipesItem
                        key={ item.id }
                        item={ item }
                     />
                  })
               }
            </ul>
         </div>
   )
}
