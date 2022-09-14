import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Recipe from './Recipe';

export default function RecipeList() {

  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(`http://localhost:5000/recipes/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const recipes = await response.json();
      setRecipes(recipes);
    }
  
    getRecipes();
  
    console.log(recipes)
    return;
  }, [recipes.length]);
  
  function recipeList() {
    /**
     * Map recipes to a list of recipe components.
     */
    return recipes.map((recipe, index) => {
      return (
        <Recipe 
          key={index}
          recipe={recipe}
        />
      )
    })
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-3xl mt-2'>
        Recipes
      </div>
      <SearchBar />
      <div>{recipeList()}</div>
    </div>
  )
}
