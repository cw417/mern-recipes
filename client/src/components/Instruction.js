import React, { useState, useRef, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi';

export default function Instruction({ instruction }) {
  
  const [editing, setEditing] = useState(false)
  const [displayText, setDisplayText] = useState('block');
  const [displayInput, setDisplayInput] = useState('none');
  
  const instructionRef = useRef();

  useEffect(() => {
    if (editing) {
      instructionRef.current.value = instruction;
    }
  }, [editing, instruction])

  function handleSelect() {
    /**
     * Toggles display of the recipe info and edit button.
     */
    console.log(`Selecting: ${instruction}`)
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
        <span>{instruction}</span>
      </div>
      <div style={{display:displayInput}}>
        <input className='inpt' ref={instructionRef} />
        <span>
          <button className='btn' onClick={toggleEditing}><FiCheck /></button>
        </span>
      </div>
    </div>
  )
}
