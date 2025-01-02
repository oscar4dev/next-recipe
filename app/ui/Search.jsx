'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
// import { CiSearch } from "react-icons/ci";

export default function Search() {

   const searchParams = useSearchParams()
   const { replace } = useRouter()
   const pathname = usePathname()
   const router = useRouter()

   const handleSearch = useDebouncedCallback((term) =>  {
      const params = new URLSearchParams(searchParams)

      if (term) {
         params.set('query', term)
      } else {
         params.delete('query')
      }

      replace( `${ pathname }?${ params.toString() }` )
   }, 300)

   return (
      <div className="flex items-center justify-center mt-2">
         <span className="absolute left-20">
            {/* <CiSearch /> */}
         </span>
         <input
            type="text"
            placeholder="Search for a recipe"
            onClick={ () => { router.push('/') } }
            className="shadow-md rounded-full border-2 w-5/6 p-2 pl-4 outline-slate-900 placeholder:text-sm sm:focus:w-[300px] transition-all duration-300 ease-in-out"
            onChange={ (e) => handleSearch(e.target.value) }
            defaultValue={ searchParams.get('query')?.toString() }
         />
      </div>
   )
}
