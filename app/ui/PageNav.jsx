'use client'

import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import { usePathname } from "next/navigation";

export default function PageNav() {

   const pathname = usePathname()

   return (
      <div className="flex items-center justify-between bg-slate-100 p-2 rounded-full w-[95%] mx-auto">
         <Link href={ '/' }>
            <Logo />
         </Link>

         <div className="hidden sm:block">
            <Search />
         </div>

         <nav>
            <ul className="flex items-center gap-4">
               <li>
                  <Link 
                     href={ '/' }
                     className={ pathname === '/' ? 'underline' : '' }
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link 
                     href={ '/favourites' }
                     className={ pathname === '/favourites' ? 'underline' : '' }
                  >
                     Favourites
                  </Link>
               </li>
            </ul>
         </nav>

      </div>
   )
}
