import React from 'react'
import { getRecipes } from '../lib/apiServices'
import RecipeItem from './RecipeItem'
import { notFound } from 'next/navigation'

export default async function Recipe({ query }) {
   const recipes = await getRecipes(query)

   if (!recipes) {
      notFound()
   }
   
   return (
      <div className="px-4">
         { query && <h1 className="text-center mb-8">Your search result...</h1>}
         <ul className='flex flex-col gap-8 items-center justify-center w-full mx-auto'>
            {
               recipes?.map((item) => {
                  return <RecipeItem
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>
      </div>
   )
}
