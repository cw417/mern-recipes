import React from 'react';
import IngredientList from './IngredientList';
import InstructionList from './InstructionList';

export default function Recipe({ recipe }) {
  return (
    <div>
      <div>
        <IngredientList
          recipe={recipe}
         />
      </div>
      <div>
        <InstructionList
          recipe={recipe}
        />
      </div>
    </div>
  )
}
