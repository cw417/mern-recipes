import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FiEdit } from 'react-icons/fi';

export default function Recipe({ recipe }) {

  const [ display, setDisplay ] = useState('none');
  const navigate = useNavigate();
  
  function handleSelect() {
    /**
     * Toggles display of the RecipeInfo component on/off.
     */
    if (display === 'none') {
      setDisplay('block')
      console.log('selected ' + recipe.name)
    } else {
      setDisplay('none')
      console.log('unselected ' + recipe.name)
    }
  }

  function handleEdit() {
    navigate(`/edit/${recipe._id}`);
  }

  function ingredientList() {
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
          {recipe.name}
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
