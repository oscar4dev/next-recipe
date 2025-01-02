'use client'

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const RecipeContext = createContext(null)

function RecipeContextProvider ({ children }) {

   // const [favourites, setFavourites] = useState([])
   const [favourites, setFavourites] = useState(() => {
      try {
        const storedFavourites = localStorage.getItem('favourites');
        return storedFavourites ? JSON.parse(storedFavourites) : []; 
      } catch (error) {
        console.error('Error loading favourites from localStorage:', error);
        return []; 
      }
   });
    
   useEffect(() => {
      localStorage.setItem('favourites', JSON.stringify(favourites));
   }, [favourites]);

   function handleFavourites (newItem) {
      let copyOfFavourites = [...favourites]
      const index = copyOfFavourites.findIndex((item) => {
         return item.id === newItem.id
      })

      if (index === -1) {
         copyOfFavourites.push(newItem)
         toast('Successfully added!')
      } else {
         copyOfFavourites.splice(index)
         toast('Removed!')
      }

      setFavourites(copyOfFavourites)    
      // localStorage.setItem('recipe', JSON.stringify([...favourites]))  
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