import React, { useState, useRef, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi';

export default function Ingredient({ ingredient, updateIngredients }) {

  const [editing, setEditing] = useState(false)
  const [displayText, setDisplayText] = useState('block');
  const [displayInput, setDisplayInput] = useState('none');
  
  const amountRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    if (editing) {
      amountRef.current.value = ingredient.amount;
      nameRef.current.value = ingredient.name;
    }
  }, [editing, ingredient])

  function handleSelect() {
    /**
     * Toggles display of the recipe info and edit button.
     */
    if (!editing) {
      setDisplayText('none')
      setDisplayInput('block')
    } else {
      setDisplayText('block')
      setDisplayInput('none')
    }
    toggleEditing();
  }

  function toggleEditing() {
    const newEditing = !editing;
    setEditing(newEditing);
  }

  function handleUpdate() {
    const currentAmount = amountRef.current.value;
    const currentName = nameRef.current.value;
    if (currentAmount !== ingredient.amount || currentName !== ingredient.name) {
      const newIngredient = {amount: currentAmount, name: currentName};
      updateIngredients(ingredient, newIngredient);
    }
    handleSelect();
  }

  return (
    <div>
      <div style={{display:displayText}} onClick={handleSelect}>
        <span className='mr-4'>{ingredient.amount}</span>
        <span>{ingredient.name}</span>
      </div>
      <div style={{display:displayInput}}>
        <input className='inpt w-1/12' ref={amountRef} />
        <input className='inpt' ref={nameRef} />
        <span>
          <button className='btn' onClick={handleUpdate}><FiCheck /></button>
        </span>
      </div>
    </div>
  )
}
