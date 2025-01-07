import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export default function Page() {
   return (
      <div className="min-h-screen px-4 space-y-4 max-w-[1024px] mx-auto">
         <p className="mb-8">
            Hello 👋, I&apos;m eager to discuss how I can contribute 
            to your project&apos;s success. You can visit 
            <a 
               href="https://oscar-next-portfolio.vercel.app/" 
               target="_blank"
               className="ml-1 text-blue-500 hover:underline"
            >
               my profile
            </a> to see more.
         </p>
         <p className="flex items-center">
            <span className="text-lg mr-1">
               <MdMailOutline /> 
            </span>
            : ausker55@yahoo.com
         </p>
         <p className="flex items-center">
            <span className="text-lg mr-1">
               <FaGithub />
            </span>
            <a
               href="https://github.com/oscar4dev"
               target="_blank"
               className="ml-1 text-blue-500 hover:underline"
            >: github.com/oscar4dev</a>
         </p>
         <p className="flex items-center">
            <span className="text-lg mr-1">
               <FaLinkedin />
            </span>
            <a
               href="https://www.linkedin.com/in/oscar-uche-902a64301/"
               target="_blank"
               className=" ml-1 text-blue-500 hover:underline"
            >: linkedin.com/in/oscar-uche-902a64301/</a>
         </p>
         <p className="flex items-center">
            <span className="text-lg mr-1">
               <FaWhatsapp />
            </span>
            : +2348101898896
         </p>
      </div>
   )
}
