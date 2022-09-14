import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router';
import Ingredient from '../components/Ingredient';
import Instruction from '../components/Instruction';

export default function Edit() {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/recipe/${params.id.toString()}`);
  
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const currentRecipe = await response.json();
      if (!currentRecipe) {
        window.alert(`Record with id ${id} not found`);
        navigate('/');
        return;
      }

      setRecipe(currentRecipe)
    }
  
    fetchData();
  
    return;
  }, [params.id, navigate]);

  function updateIngredients(oldIngredient, newIngredient) {
    /**
     * Update the instructions array of the recipe.
     * Removes the old instruction and inserts the new instruction
     * at the same index.
     */
    const index = recipe.instructions.indexOf(oldIngredient);
    const newRecipe = {...recipe};
    newRecipe.ingredients.splice(index, 1, newIngredient);
    setRecipe(newRecipe);
  }

  function updateInstructions(oldInstruction, newInstruction) {
    /**
     * Update the instructions array of the recipe.
     * Removes the old instruction and inserts the new instruction
     * at the same index.
     */
    const index = recipe.instructions.indexOf(oldInstruction);
    const newRecipe = {...recipe};
    newRecipe.instructions.splice(index, 1, newInstruction);
    setRecipe(newRecipe);
  }

  function setIngredients(recipe) {
    return (
      recipe.ingredients.map((ingredient, index) => {
        return (
          <div key={index}>
            <Ingredient
              ingredient={ingredient}
              updateIngredients={updateIngredients}
            />
          </div>
        )
      })
    )
  }

  function setInstructions(recipe) {
    return (
      recipe.instructions.map((instruction, index) => {
        return (
          <div key={index}>
            <Instruction
              instruction={instruction}
              updateInstructions={updateInstructions}
            />
          </div>
        )
      })
    )
  }

  if (recipe) {
    return (
      <div>
        <div className='m-4'>
          <div className='text-3xl flex flex-col items-center'>
            <span>{recipe.name}</span>
          </div>
          <div>
            {setIngredients(recipe)}
          </div>
          <div>
            {setInstructions(recipe)}
          </div>
        </div>
      </div>
    )
  }
}
