
export default function AccordionItem({ item, num, setCurOpen, curOpen }) {

   const isOpen = num === curOpen

   function handleClick () {
      setCurOpen(num === curOpen ? null : num)
   }

   return (
      <div 
         className={`space-y-4 w-full border px-2 py-4 sm:p-8 rounded-lg ${isOpen ? 'border-t-4 border-slate-500 dark:border-slate-50' : ''}`}
         onClick={ handleClick }
      >
         <div className="flex items-center">
            <span className="mr-2 sm:mr-4">{ num < 9 ? `0${num}` : num }</span>
            <span>{ item.question }</span>
            <button className="ml-auto">
               { isOpen ? '-' : '+' }
            </button>
         </div>
         { isOpen ? <p className="ml-4">{ item.answer }</p> : '' }
      </div>
   )
}
