import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router';
import Ingredient from '../components/Ingredient';
import Instruction from '../components/Instruction';
import { FiMinus } from 'react-icons/fi';

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
    const index = recipe.ingredients.indexOf(oldIngredient);
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

  async function onSubmit(e) {
    e.preventDefault();
    const editedRecipe = recipe;
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedRecipe),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }

  async function deleteReview() {
    await fetch(`http://localhost:5000/${params.id}`, {
      method: "DELETE"
    });
    navigate('/');
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
          <div className='flex flex-col items-center'>
            <div className='flex items-center'>
              <span className='text-3xl' >{recipe.name}</span>
              <span>
                <button className='btn' onClick={deleteReview}><FiMinus /></button>
              </span>
            </div>
          </div>
          <div>
            {setIngredients(recipe)}
          </div>
          <div>
            {setInstructions(recipe)}
          </div>
          <div>
            <button className='btn' onClick={onSubmit}>Update</button>
          </div>
        </div>
      </div>
    )
  }
}
