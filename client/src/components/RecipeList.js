import React, { useState, useEffect } from 'react'

export default function RecipeList() {

  const [recipes, setRecipes] = useState([])

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
      <div>{recipeList()}</div>
    </div>
  )
}
