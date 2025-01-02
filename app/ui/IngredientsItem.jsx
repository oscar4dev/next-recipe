
export default function IngredientsItem( { item } ) {
   const { description, quantity, unit } = item;
   
   return (
      <div className="text-sm ml-2">
         <span className="mr-2">{ description }</span>
         <span className="mr-2">{ quantity }</span>
         <span>{ unit }</span>
      </div>
   )
}
