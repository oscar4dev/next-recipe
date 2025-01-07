'use client'

import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function ImageSlider({ newestRecipes }) {

   const [currentImage, setCurrentImage] = useState(0)

   function handlePrev () {
      setCurrentImage(currentImage === 0 ? newestRecipes.length - 1 : currentImage - 1);
   }

   function handleNext () {
      setCurrentImage( currentImage === newestRecipes.length - 1 ? 0 : currentImage + 1)
   }

   return (
      <div className="flex flex-col items-center justify-center">
         <h1 className="mb-4">Newest Recipes</h1>
         <div className="h-[200px] aspect-square relative flex justify-center">
            <button
               onClick={ handlePrev }
               className="absolute left-[-50px] bg-slate-100 rounded-lg z-10 top-20 h-9 aspect-square flex items-center justify-center dark:bg-slate-800 dark:border-2"
            >
               <FaArrowLeft />
            </button>

            {
               newestRecipes && newestRecipes.map((item, i) => {
                  return <Image
                     src={ item.image_url }
                     alt={ item.image_url }
                     key={ item.id }
                     fill
                     className={ `object-cover rounded-full ${ currentImage === i ? '' : 'hidden' }` }
                     priority
                     sizes="50vh"
                     quality={ 75 }
                  />
               })
            }

            <button 
               onClick={ handleNext }
               className="right-[-50px] absolute bg-slate-100 rounded-lg top-20 h-9 aspect-square flex items-center justify-center dark:bg-slate-800 dark:border-2"
            >
               <FaArrowRight />
            </button>

            <div className="absolute bottom-[-30px] flex gap-2">
               {
                  newestRecipes?.map((_, i) => {
                     return <button
                        onClick={ () => setCurrentImage(i) }
                        key={ i }
                        className={ ` ${ currentImage === i ? 'h-4 w-4 rounded-full bg-slate-900 dark:bg-slate-800' : 'h-4 w-4 rounded-full bg-slate-200' }` }
                     ></button>
                  })
               }
            </div>
         </div>
      </div>
   )
}
