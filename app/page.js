import { Suspense } from "react";
import Recipe from "./ui/Recipe";
import FeaturedRecipes from "./ui/FeaturedRecipes";
import Spinner from "./ui/Spinner";
import ImageSlider from "./ui/ImageSlider";
import Link from "next/link";
import QueryResult from "./ui/QueryResult";
import { getNewestRecipes } from "./lib/apiServices";

export default async function Page({ searchParams }) {

  const searchParam = await searchParams
  const query = searchParam?.query || '' 
  const newestRecipes = await getNewestRecipes()

  return (
    <div className="px-4">

      <div>
        <QueryResult />
      </div>

      <Suspense fallback={ <Spinner /> }>
        <Recipe query={ query } />
      </Suspense>

      <Suspense fallback={ <Spinner /> }>
        <FeaturedRecipes />
      </Suspense>

      <div className="my-12">
        <ImageSlider newestRecipes={ newestRecipes } />
      </div>

      <nav className="flex flex-col gap-4">
        <Link 
          className="w-[50px] hover:underline" 
          href={ '/faq' }
        >
          FAQ
        </Link>
        <Link 
          className="w-[80px] hover:underline" 
          href={ '/contact' }
        >
          Contact
        </Link>
      </nav>

    </div>
  )
}
