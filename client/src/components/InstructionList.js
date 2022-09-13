import React from 'react'
import { FiMinus } from 'react-icons/fi';

export default function InstructionList({ instructions }) {

  let count = 0;

  return (
    instructions.map((instruction, index) => {
      count++;
      return (
        <div key={index} className='flex flex-row'>
          <button 
            className='btn'
          ><FiMinus /></button>
          <span className='mx-4'>{count}. {instruction.instruction}</span>
        </div>
      )
    })
  )
}
