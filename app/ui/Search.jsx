'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import AvailableSearchQuery from "./AvailableSearchQuery";
import { useRecipe } from "./recipeContext";
// import { CiSearch } from "react-icons/ci";

export default function Search() {

   const searchParams = useSearchParams()
   const { replace } = useRouter()
   const pathname = usePathname()
   const router = useRouter()
   const { setIsOpen } = useRecipe()

   const handleSearch = useDebouncedCallback((term) =>  {
      const params = new URLSearchParams(searchParams)

      if (term) {
         params.set('query', term)
      } else {
         params.delete('query')
      }

      replace( `${ pathname }?${ params.toString() }` )
   }, 300)

   function handleClick () {
      router.push('/')
      setIsOpen(false)
   }

   return (
      <div className="flex items-center justify-center gap-2 mt-2">
         <input
            type="text"
            placeholder="Search for a recipe eg carrot"
            onClick={ handleClick }
            className="shadow-md rounded-full border-2 w-5/6 p-2 pl-4 outline-slate-900 placeholder:text-sm sm:w-[250px] sm:focus:w-[300px] transition-all duration-300 ease-in-out dark:bg-slate-800"
            onChange={ (e) => handleSearch(e.target.value) }
            defaultValue={ searchParams.get('query')?.toString() }
         />
         <span className="block">
            <AvailableSearchQuery /> 
         </span>
      </div>
   )
}
