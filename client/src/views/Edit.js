import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router';
import EditName from '../components/EditName';
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

      console.log(currentRecipe)

      setRecipe(currentRecipe)
      
    }
  
    fetchData();
  
    return;
  }, [params.id, navigate]);

  function setIngredients(recipe) {
    return (
      recipe.ingredients.map((ingredient, index) => {
        return (
          <div key={index}>
            <Ingredient ingredient={ingredient} />
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
            <Instruction instruction={instruction} />
          </div>
        )
      })
    )
  }

  if (recipe) {
    return (
      <div>
        <div>
          <div>
            {recipe.name}
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
