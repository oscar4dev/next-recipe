import { getRecipe } from "@/app/lib/apiServices"
import AddToFavouritesBtn from "@/app/ui/AddToFavouritesBtn"
import IngredientsItem from "@/app/ui/IngredientsItem"
import Image from "next/image"
// import { FaInfoCircle } from "react-icons/fa";

export default async function page({ params }) {

   const { id } = await params

   const data = await getRecipe(id)
   const { 
      cooking_time, 
      image_url, 
      ingredients, 
      publisher, 
      servings, 
      source_url, 
      title 
   } = data   

   return (
      <div className="mx-4">
         <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
            <div className="relative h-[400px] w-full ">
               <Image
                  src={ image_url }
                  alt={ `screenshot of ${title}` }
                  fill
                  sizes="50vh"
                  quality={ 70 }
                  priority={ true }
                  className="object-cover"
               />
            </div>
            <div className="w-full">
               <p className="font-bold">{ title }</p>
               <p className="mt-4 flex items-center gap-2">
                  <span>Published by: { publisher }</span>
                  <a
                     href={ source_url }
                  >
                     {/* <FaInfoCircle /> */}
                     info
                  </a>
               </p>
            
               <div className="mt-4">
                  <p className="mb-2">Ingredients:</p>
                  {
                     ingredients.map((item, i) => {
                        return <IngredientsItem
                           key={i}
                           item={ item }
                        />
                     })
                  }
               </div>
               <p className="mt-4">Cooking time: { cooking_time } minutes</p>
               <p className="mt-4">Servings: { servings }</p>
               <AddToFavouritesBtn data={ data } />
            </div>
         </div>
      </div>
   )
}
