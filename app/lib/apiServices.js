const BASE_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes'

export async function getRecipes (term) {
   try {
      const res = await fetch(`${ BASE_URL }?search=${term}`)
      const data = await res.json()
      return data.data.recipes
      
   } catch (error) {
      console.error(error)
   }
}

export async function getRecipe (id) {
   try {
      const res = await fetch(`${BASE_URL}/${id}`)
      const data = await res.json()
      return data.data.recipe
   } catch (error) {
      console.error(error)
   }
}

export async function getFeaturedRecipes () {
   try {
      const res = await fetch(`${ BASE_URL }?search=pizza`)

      if (!res.ok) {
         throw new Error('An error occured loading data 😢', error.message)
      }

      const data = await res.json()
      return data.data.recipes.slice(0, 5)
      
   } catch (error) {
      console.error('An error occured loading data', error)
   }
}