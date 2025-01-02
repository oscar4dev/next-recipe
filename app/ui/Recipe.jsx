import React from 'react'
import { getRecipes } from '../lib/apiServices'
import RecipeItem from './RecipeItem'

export default async function Recipe({ query }) {
   const recipes = await getRecipes(query)
   
   return (
      <ul className='flex flex-col gap-8 items-center justify-center'>
         {
            recipes && recipes.map((item) => {
               return <RecipeItem 
                  key={ item.id }
                  item={ item }
               />
            })
         }
      </ul>
   )
}
