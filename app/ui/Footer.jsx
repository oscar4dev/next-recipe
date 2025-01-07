import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { RiNextjsFill } from "react-icons/ri";

export default function Footer() {

   const date = new Date().getFullYear()

   return (
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:w-full sm:px-8">
         <p>Copyright &copy; { date }</p>
         <div className="flex items-center gap-1">
            <span>Built by</span>
            <a
               href="https://oscar-next-portfolio.vercel.app/"
               target="_blank"
               className="text-blue-500 hover:underline"
            >
               Oscar4dev
            </a>
            <GoLinkExternal />
         </div>

         <p>All rights reserved.</p>

         <Link
            href={ 'https://nextjs.org/' }
            target="_blank"
            className="flex items-center gap-1"
         >
            <span>Powered by</span>
            <span className="text-lg">
               <RiNextjsFill />
            </span>
         </Link>
      </div>
   )
}
