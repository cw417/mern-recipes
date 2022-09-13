import React from 'react';
import IngredientList from './IngredientList';
import InstructionList from './InstructionList';

export default function Recipe({ recipe }) {
  return (
    <div>
      <div>
        <IngredientList
          ingredients={recipe.ingredients}
        />
      </div>
      <div>
        <InstructionList
          instructions={recipe.instructions}
        />
      </div>
    </div>
  )
}
