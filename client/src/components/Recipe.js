import React, { useState } from 'react';
import IngredientList from './IngredientList';
import InstructionList from './InstructionList';
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


  return (
    <div onClick={handleSelect} className='my-2'>
          {recipe.name}
      <div className='ml-4' style={{display:display}}>
        <div>
          <div>Ingredients</div>
          <IngredientList
            ingredients={recipe.ingredients}
          />
        </div>
        <div>
          <div>Instructions</div>
          <InstructionList
            instructions={recipe.instructions}
          />
        </div>
        <div>
          <button className='btn' onClick={handleEdit}><FiEdit /></button>
        </div>
      </div>
    </div>
  )
}
