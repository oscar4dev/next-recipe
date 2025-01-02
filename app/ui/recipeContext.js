'use client'

import { createContext, useContext, useState } from "react";
// import toast from "react-hot-toast";

const RecipeContext = createContext(null)

function RecipeContextProvider ({ children }) {

   const [favourites, setFavourites] = useState([])
    
   function handleFavourites (newItem) {
      let copyOfFavourites = [...favourites]
      const index = copyOfFavourites.findIndex((item) => {
         return item.id === newItem.id
      })

      if (index === -1) {
         copyOfFavourites.push(newItem)
         // toast('Successfully added!')
      } else {
         copyOfFavourites.splice(index)
         // toast('Removed!')
      }

      setFavourites(copyOfFavourites)    
   }

   return (
      <RecipeContext.Provider value={ { handleFavourites, favourites } }>
         { children }
      </RecipeContext.Provider>
   )
}

function useRecipe () {
   const context = useContext(RecipeContext)
   return context
}

export { RecipeContextProvider, useRecipe }