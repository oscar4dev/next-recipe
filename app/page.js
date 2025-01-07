import { Suspense } from "react";
import Recipe from "./ui/Recipe";
import FeaturedRecipes from "./ui/FeaturedRecipes";
import Spinner from "./ui/Spinner";
import ImageSlider from "./ui/ImageSlider";
import Link from "next/link";
import QueryResult from "./ui/QueryResult";

export default async function Page({ searchParams }) {

  const searchParam = await searchParams
  const query = searchParam?.query || '' 

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

      <div className="my-8">
        <ImageSlider />
      </div>

      <nav className="flex flex-col gap-4">
        <Link href={ '/faq' }>FAQ</Link>
        <Link href={ '/contact' }>Contact</Link>
      </nav>

    </div>
  )
}
