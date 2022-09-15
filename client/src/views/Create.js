import React, { useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router';

export default function Create({ addRecipe }) {

  const nameRef = useRef();
  const ingredientAmountRef = useRef();
  const ingredientNameRef = useRef();
  const instructionRef = useRef();

  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const navigate = useNavigate();


  async function handleCreate() {

    if (nameRef.current.value === '') return;
    if (instructionRef.current.value !== '') addInstruction();
    if (ingredientNameRef.current.value !== '') addIngredient();

    const newRecipe = {
      name: nameRef.current.value,
      ingredients: ingredients,
      instructions: instructions
    };

    console.log(`Adding: ${newRecipe.name}`);

    await fetch('http://localhost:5000/recipe/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    navigate('/');
  }
  
  function handleIngredientKeyPress(event, func) {
    /**
     * Calls 'addIngredient' when 'Enter' key is pressed.
     * The keycode for 'Enter' is 13.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.keyCode === 13 || event.which === 13) {
      addIngredient();
    }
  }

  function handleInstructionKeyPress(event, func) {
    /**
     * Calls 'addInstruction' when 'Enter' key is pressed.
     * The keycode for 'Enter' is 13.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.keyCode === 13 || event.which === 13) {
      addInstruction();
    }
  }

  function addIngredient() {
    const amount = (ingredientAmountRef.current.value === '') ? "1" : ingredientAmountRef.current.value;
    const name = ingredientNameRef.current.value;
    const newIngredients = [...ingredients, {amount: amount, name: name}];
    setIngredients(newIngredients);
    ingredientAmountRef.current.value = null;
    ingredientNameRef.current.value = null;
  }

  function addInstruction() {
    const newInstructions = [...instructions, instructionRef.current.value];
    setInstructions(newInstructions);
    instructionRef.current.value = null;
  }

  function ingredientsList() {
    return (
      ingredients.map((ingredient, index) => {
        return (
          <div key={index}>
            <span className='mr-4'>{ingredient.amount}</span>
            <span>{ingredient.name}</span>
          </div>
        )
      })
    )
  }

  function instructionsList() {
    let count = 0;
    return (
      instructions.map((instruction, index) => {
        count++;
        return (
          <div key={index}>
            <span className='mr-3'>{count}.</span><span>{instruction}</span>
          </div>
        )
      })
    )
  }
  return (
    <div className='flex flex-col'>
      <div>
        <div>
          <input className='inpt w-5/12' ref={nameRef} type='text' placeholder='Name' />
        </div>
        <div>
          <input className='inpt w-1/12' ref={ingredientAmountRef} type='text' placeholder='Amt' />
          <input className='inpt w-1/3' ref={ingredientNameRef} type='text' placeholder='Ingredient' onKeyPress={handleIngredientKeyPress} />
          <button className='btn' onClick={addIngredient}><FiPlus /></button>
        </div>
        <div>
          <input className='inpt w-5/12' ref={instructionRef} type='text' placeholder='Instruction' onKeyPress={handleInstructionKeyPress}/>
          <button className='btn' onClick={addInstruction}><FiPlus /></button>
        </div>
        <button className='btn' onClick={handleCreate}>Create</button>
      </div>
      <div className='flex flex-col items-center'>
        <div>
          <span className='text-xl'>Ingredients</span>
          <div>
            {ingredientsList()}
          </div>
        </div>
        <div className='mt-6'>
          <span className='text-xl'>Instructions</span>
          <div>
            {instructionsList()}
          </div>
        </div>
      </div>
    </div>
  )
}
