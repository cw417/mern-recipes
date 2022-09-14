import React, { useState, useRef, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi';

export default function Ingredient({ ingredient }) {

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

  return (
    <div onClick={handleSelect}>
      <div style={{display:displayText}} onClick={toggleEditing}>
        <span>{ingredient.amount}</span>
        <span>{ingredient.name}</span>
      </div>
      <div style={{display:displayInput}}>
        <input className='inpt w-1/12' ref={amountRef} />
        <input className='inpt' ref={nameRef} />
        <span>
          <button className='btn' onClick={toggleEditing}><FiCheck /></button>
        </span>
      </div>
    </div>
  )
}
