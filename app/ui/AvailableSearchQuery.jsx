'use client'

import { useState } from "react"

export default function AvailableSearchQuery() {

   const [isOpen, setIsOpen] = useState(false)

   function handleToggle () {
      setIsOpen((cur) => {
         return !cur
      })
   }   

   return (
      <button
         onClick={ handleToggle }
         className="border border-slate-900 w-8"
      >
         {
            isOpen 
               ? '-' : '+'
         }
      </button>
   )
}
