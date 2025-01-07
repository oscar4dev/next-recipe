'use client'

import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

   function handleClick () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

   return (
      <button
         className="bg-slate-50 shadow-md rounded-lg border-2 h-10 aspect-square flex items-center justify-center"
         onClick={ handleClick }
         title="Scroll to top"
      >
         <FaArrowUp />
      </button>
   )
}
