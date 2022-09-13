import React from 'react'
import { FiMinus } from 'react-icons/fi';

export default function InstructionList({ ingredients }) {
  return (
    ingredients.map((ingredient, index) => {
    return (
      <div key={index}>
        <div className='flex flex-row'>
          <span>
            <button 
              className='btn'
            ><FiMinus /></button>
          </span>
          <div className='w-1/6 mx-4 text-left'>{ingredient.amount}</div>
          <div className='inline-block align-middle'>{ingredient.name}</div>
        </div>
      </div>
    )
    }))
}
