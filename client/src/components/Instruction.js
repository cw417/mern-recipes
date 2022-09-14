import React, { useState, useRef, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi';

export default function Instruction({ instruction, updateInstructions }) {
  
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

  function handleUpdate() {
    const currentInstruction = instructionRef.current.value;
    if (currentInstruction !== instruction) {
      updateInstructions(instruction, instructionRef.current.value);
    }
    handleSelect();
  }

  return (
    <div>
      <div style={{display:displayText}} onClick={handleSelect}>
        <span>{instruction}</span>
      </div>
      <div style={{display:displayInput}}>
        <input className='inpt' ref={instructionRef} />
        <span>
          <button className='btn' onClick={handleUpdate}><FiCheck /></button>
        </span>
      </div>
    </div>
  )
}
