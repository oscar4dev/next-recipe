'use client'

import { useRecipe } from "./recipeContext"
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

export default function AddToFavouritesBtn({ data }) {

   const { handleFavourites, favourites } = useRecipe()

   return (
      <button
         onClick={() => handleFavourites(data)}
         className=" mt-4 bg-slate-900 py-4 rounded-full block w-full text-slate-50 text-sm hover:bg-slate-700 duration-300 ease-in-out dark:bg-slate-800 dark:border-2"
      >
         {
            favourites && favourites.findIndex(
               (item) => item.id === data.id
            ) !== -1
               ? <span className="flex items-center justify-center gap-2 hover:gap-3 duration-300 ease-in-out">
                  Remove to Favourites
                  <span className="text-lg">
                     <MdOutlineCancel />
                  </span>
               </span>
               : <span className="flex items-center justify-center gap-2 hover:gap-3 duration-300 ease-in-out">
                  Add to Favourites
                  <FaArrowRight />
               </span>
         }
      </button>
   )
}
