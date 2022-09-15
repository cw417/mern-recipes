import React, { useState } from 'react'
import { FiRotateCcw } from 'react-icons/fi';

export default function Sidebar({ recipes, searchRecipes, toggleFilter }) {

  const [fullRecipes, setFullRecipes] = useState(recipes);

  function sidebarList() {
    return (
      fullRecipes.map((recipe, index) => {
        return (
          <div onClick={()=> searchRecipes(recipe.name)}>{recipe.name}</div>
        )
      })
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-xl mb-4'>
        <button className='btn' onClick={toggleFilter}><FiRotateCcw/></button>
      </div>
      <div className='flex flex-col items-center'>{sidebarList()}</div>
    </div>
  )
}
