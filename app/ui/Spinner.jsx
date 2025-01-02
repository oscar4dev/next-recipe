import Image from "next/image";

export default function Spinner() { 
   return (
      <div className="h-[100px] w-full flex items-center justify-center">
         <div className="relative h-10 aspect-square">
            <Image
               src={ '/spinner.gif' }
               alt="spinner"
               fill
               sizes='75vh'
               unoptimized
               className="object-cover"
            />
         </div>
      </div>
   )
}
