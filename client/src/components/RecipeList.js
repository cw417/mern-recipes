import React, { useState, useEffect } from 'react';
import AddSearchBar from './AddSearchBar';
import Recipe from './Recipe';

const initialState = 
    [{
      name: "Caprese salad", 
      ingredients: [ 
        {name: "Tomatoes", amount: "2, sliced"},
        {name: "Mozzarella, fresh", amount: "4 slices"},
        {name: "Basil, fresh", amount: "8 leaves"},
        {name: "Olive oil", amount: "drizzle"},
        {name: "Salt/pepper", amount: "to taste"},
      ], 
      instructions: [
        {instruction: "Slice tomatoes and mozzarella. Add to bowl."},
        {instruction: "Wash and chop the fresh basil, and add to bowl."},
        {instruction: "Add a drizzle of olive oil, then salt, and pepper to taste."},
      ], 
      selected: false, 
      editing: false
    },
    {
      name: "Strawberry Banana Smoothie", 
      ingredients: [ 
        {name: "Bananas", amount: "2, peeled"},
        {name: "Strawberries", amount: "1/2 C"},
        {name: "Milk", amount: "6oz"},
      ], 
      instructions: [
        {instruction: "Peel bananas and add all ingredients to blender."},
        {instruction: "Blend to desired consistency."},
        {instruction: "If you would like to add protein powder, do so while blending."},
      ], 
      selected: false, 
      editing: false
    }]

export default function RecipeList() {

  const [recipes, setRecipes] = useState(initialState)
  const [filter, setFilter] = useState(false)

  // Get recipes from the server
  useEffect(() => {
    console.log(recipes)
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
    
      return;
    }
  }, [recipes.length, filter]);
  
  async function addRecipe(name) {

    const newRecipe = {
      name: name,
      ingredients: [],
      instructions: []
    }

    console.log(`Adding: ${newRecipe.name}`);

    await fetch('http://localhost:5000/recipe/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  }
  
  function recipeList() {
    /**
     * Map recipes to a list of recipe components.
     */
    return recipes.map((recipe, index) => {
      <Recipe 
        key={index}
        recipe={recipe}
      />
    })
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-3xl mt-2'>
        Recipes
      </div>
      <AddSearchBar
        addRecipe={addRecipe}
      />
      <div>{recipeList()}</div>
    </div>
  )
}
