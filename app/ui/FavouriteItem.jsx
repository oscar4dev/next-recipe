import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function FavouriteItem({ item }) {
   
   return (
      <li className="relative flex items-center justify-center h-[400px] w-5/6 overflow-hidden sm:w-[300px]">
         <Image 
            src={ item.image_url }
            alt={ `screenshot of ${ item.title }` }
            fill
            sizes='1'
            className="object-cover hover:scale-[1.05] duration-[0.3s] ease-in-out"
         />

         <div className="absolute bottom-4 text-slate-50 text-center w-full">
            <p>{ item.title }</p>
            <p>{ item.publisher }</p>
            <Link 
               href={ `/favourites/${ item.id }` }
               className='bg-slate-900 text-slate-50 text-sm p-4 rounded-full block w-5/6 mx-auto mt-4 text-center hover:bg-slate-700 duration-300 ease-in-out dark:bg-slate-800 dark:border-2'
               >
               Show details
            </Link>
         </div>
      </li>
   )
}
