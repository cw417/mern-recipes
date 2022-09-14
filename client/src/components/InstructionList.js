import React from 'react'
import { FiMinus } from 'react-icons/fi';

export default function InstructionList({ instructions }) {

  let count = 0;

  return (
    instructions.map((instruction, index) => {
      count++;
      return (
        <div key={index} className='flex flex-row'>
          <span className='ml-4 mr-3'>{count}.</span><span>{instruction}</span>
        </div>
      )
    })
  )
}
