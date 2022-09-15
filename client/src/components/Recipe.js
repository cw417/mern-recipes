import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FiEdit } from 'react-icons/fi';

export default function Recipe({ recipe }) {

  const [ display, setDisplay ] = useState('none');
  const navigate = useNavigate();
  
  function handleSelect() {
    /**
     * Toggles display of the recipe info and edit button.
     */
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  function handleEdit() {
    /**
     * Navigate to edit page for the selected recipe.
     */
    navigate(`/edit/${recipe._id}`);
  }

  function ingredientList() {
    /**
     * Create list of recipe ingredients.
     */
    return (
      recipe.ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <div className='flex flex-row ml-4'>
            <span className='mr-4'>{ingredient.amount}</span>
            <span>{ingredient.name}</span>
          </div>
        </div>
      )
  }));
  }

  function instructionList() {
    /**
     * Create numbered list of recipe instructions.
     */
    let count = 0;
    return (
      recipe.instructions.map((instruction, index) => {
        count++;
        return (
          <div key={index} className='flex flex-row'>
            <span className='ml-4 mr-3'>{count}.</span><span>{instruction}</span>
          </div>
        )
      })
    )
  }

  return (
    <div onClick={handleSelect} className='my-2'>
        <span>{recipe.name}</span>
      <div className='ml-4' style={{display:display}}>
        <div>
          <div>Ingredients</div>
          <div>{ingredientList()}</div>
        </div>
        <div>
          <div>Instructions</div>
          <div>{instructionList()}</div>
        </div>
        <div>
          <button className='btn' onClick={handleEdit}><FiEdit /></button>
        </div>
      </div>
    </div>
  )
}
