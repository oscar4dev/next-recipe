'use client'

import { useRecipe } from "./recipeContext"
export default function AddToFavouritesBtn({ data }) {

   const { handleFavourites, favourites } = useRecipe()

   return (
      <button 
         onClick={ () => handleFavourites(data) }
         className="mt-4 bg-slate-900 py-2 rounded-full block w-full text-slate-50 text-sm hover:bg-slate-700 duration-300 ease-in-out"
      >
         {
            favourites && favourites.findIndex(
               (item) => item.id === data.id
            ) !== -1 
               ? 'Remove from favourites' 
               : 'Add to Favourites'
         }
      </button>
   )
}
