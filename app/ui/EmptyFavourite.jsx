import Link from "next/link";

export default function EmptyFavourite() {
   return (
      <div className="px-4 pt-8">
         <p>
            You have not added any recipe to your favourites.
            Go can to the
            <Link 
               href={ '/' }
               className="mx-1 text-blue-500 hover:underline"
            >menu</Link>
            to select a recipe to add, or
            go to the search bar to explore more recipes...
         </p>
      </div>
   )
}
