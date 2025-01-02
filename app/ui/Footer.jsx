import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { RiNextjsFill } from "react-icons/ri";

export default function Footer() {

   const date = new Date().getFullYear()

   return (
      <div className="flex flex-col items-center gap-4">
         <p>Copyright &copy; { date }</p>
         <div className="flex items-center gap-1 text-blue-500 hover:underline">
            <a
               href="https://oscar-next-portfolio.vercel.app/"
               target="_blank"
            >
               Oscar4dev
            </a>
            <GoLinkExternal />
         </div>

         <p>All rights reserved.</p>

         <Link
            href={ 'https://nextjs.org/' }
            className="text-lg flex items-center gap-1"
         >
            <span>Powered by</span>
            <RiNextjsFill />
         </Link>
      </div>
   )
}
