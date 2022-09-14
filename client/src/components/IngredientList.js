import React from 'react'

export default function InstructionList({ ingredients }) {
  return (
    ingredients.map((ingredient, index) => {
    return (
      <div key={index}>
        <div className='flex flex-row ml-4'>
          <span className='mr-4'>{ingredient.amount}</span>
          <span>{ingredient.name}</span>
        </div>
      </div>
    )
    }))
}
