'use client'

import EmptyFavourite from "../ui/EmptyFavourite";
import FavouriteItem from "../ui/FavouriteItem";
import { useRecipe } from "../ui/recipeContext"

export default function Page() {

   const { favourites } = useRecipe()

   if (!favourites.length) return <EmptyFavourite />

   return (
      <ul className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap">
         {
            favourites?.map((item) => {
               return <FavouriteItem 
                  key={ item.id }
                  item={ item }
               />
            })
         }
      </ul>
   )
}
