import React from 'react';
import IngredientList from './IngredientList';
import InstructionList from './InstructionList';

export default function Recipe({ recipe }) {

  return (
    <div>
      {recipe.name}
      <div className='ml-4'>
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
