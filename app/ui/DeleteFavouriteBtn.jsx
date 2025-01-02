'use client'

import { useRecipe } from "./recipeContext"

export default function DeleteFavouriteBtn({ id }) {

   const { favourites } = useRecipe()

   function handleDelete (id) {
      favourites.filter((item) => item.id !== id )
   }

   return (
      <button
         className='bg-indigo-500 text-slate-50 p-1'
         onClick={ () => handleDelete(id) }
      >DeleteFavouriteBtn</button>
   )
}
