import React, { useState } from 'react';
import IngredientList from './IngredientList';
import InstructionList from './InstructionList';

export default function Recipe({ recipe }) {

  const [ display, setDisplay ] = useState('none')
  
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


  return (
    <div onClick={handleSelect}>
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
      </div>
    </div>
  )
}
