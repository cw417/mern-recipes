import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Recipe from '../components/Recipe';

export default function RecipeList() {

  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    if (!filter) {
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
    }
  }, [recipes.length, filter]);

  function toggleFilter() {
    /**
     * Toggles the filter state.
     */
    const newFilter = !filter;
    setFilter(newFilter);
  }

  function searchRecipes(keyword) {
    /**
     * Searches each recipe name and ingredients list
     * for strings containing the given keyword.
     */
    if (filter) { return } else { toggleFilter() };
    const newRecipes = recipes.filter(recipe => recipe.name.includes(keyword) || searchIngredients(keyword, recipe));
    setRecipes(newRecipes);
  }
    
  function searchIngredients(query, recipe) {
    /**
     * Searches given 'recipe' object's 'ingredients' array for given query.
     * Matches are case insensitive.
     * @param  {String}  query   String to search for.
     * @param  {Object}  recipe  Recipe to search.
     * @return {Boolean}         True if ingredient name contains the given query string. 
     */
    let found = false
    recipe.ingredients.forEach(ingredient => {
      console.log(`searching for ${query} in ${recipe.name}`)
      if (ingredient.name.toLowerCase().includes(query)) {
        found = true
      }
    })
    return found
  }

  function recipeList() {
    /**
     * Map recipes to a list of recipe components.
     */
    return recipes.map((recipe, index) => {
      return (
        <Recipe 
          key={index}
          recipe={recipe}
          className='hover:bg-blue-500'
        />
      )
    })
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-3xl mt-2'>
        Recipes
      </div>
      <SearchBar searchRecipes={searchRecipes} toggleFilter={toggleFilter} />
      <div>{recipeList()}</div>
    </div>
  )
}
