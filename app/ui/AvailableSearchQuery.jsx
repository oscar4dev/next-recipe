'use client'

import { useRouter } from "next/navigation"
import { useRecipe } from "./recipeContext"

export default function AvailableSearchQuery() {   

   const { isOpen, setIsOpen } = useRecipe()   
   const router = useRouter()

   function handleToggle () {
      setIsOpen((cur) => {
         return !cur
      })
      router.push('/')
   }   

   return (
      <>
         <button
            onClick={ handleToggle }
            title="Available search queries"
            className="z-10 bg-slate-50 shadow-md rounded-lg border-2 h-10 aspect-square dark:bg-slate-800"
         >
            {
               isOpen
                  ? '-' : '+'
            }
         </button>
      </>
   )
}
