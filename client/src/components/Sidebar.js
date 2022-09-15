import React, { useState, useEffect } from 'react'
import { FiRotateCcw } from 'react-icons/fi';

export default function Sidebar({ recipes, searchRecipes, toggleFilter }) {

  const [fullRecipes, setFullRecipes] = useState(recipes);

  useEffect(() => {
      async function getRecipes() {
        const response = await fetch(`http://localhost:5000/recipes/`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const recipes = await response.json();
        setFullRecipes(recipes);
      }
    
      getRecipes();
    
      return;
  });

  function sidebarList() {
    return (
      fullRecipes.map((recipe, index) => {
        return (
          <div 
            className='my-1'
            onClick={()=> searchRecipes(recipe.name)}
          >
            {recipe.name}
          </div>
        )
      })
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-xl mb-2'>
        <button className='btn' onClick={toggleFilter}><FiRotateCcw/></button>
      </div>
      <div className='flex flex-col items-center'>{sidebarList()}</div>
    </div>
  )
}
