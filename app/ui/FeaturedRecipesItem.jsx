import Image from "next/image";
import Link from "next/link";

export default function FeaturedRecipesItem({ item }) {

   return (
      <Link 
         href={ `/favourites/${ item.id }` }
         className="relative flex items-center justify-center h-[400px] w-full overflow-hidden sm:h-[350px] sm:w-[210px]"
      >
         <Image 
            src={ item.image_url }
            alt={ item.title }
            fill
            sizes="50vh"
            quality={ 75 }
            priority={ true }
            // placeholder="blur"
            className="object-cover hover:scale-[1.05] duration-[0.3s] ease-in-out"
         />

         <div className="absolute bottom-4 text-slate-50 text-center">
            <p className="font-bold">{ item.title }</p>
            <p>{ item.publisher }</p>
         </div>
      </Link>
   )
}
