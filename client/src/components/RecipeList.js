import React, { useState, useEffect } from 'react'
import AddSearchBar from './AddSearchBar'

export default function RecipeList() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    
  })

  function addRecipe(name) {
    /**
     * Adds new recipes to current recipes array.
     */
    const newRecipes = [...recipes, {
      name: name,
      instructions: [],
      ingredients: []
    }];
    setRecipes(newRecipes);
  }

  function recipeList() {
    return recipes.map((recipe, index) => {
      <div key={index}>
        {recipe.name}
      </div>
    })
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-3xl mt-2'>
        Recipes
      </div>
      <AddSearchBar
        addRecipe={addRecipe} />
      <div>{recipeList()}</div>
    </div>
  )
}
