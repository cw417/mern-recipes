import React from 'react'

export default function Ingredient({ ingredient }) {
  return (
    <div>
      <div>
        <span>{ingredient.amount}</span>
        <span>{ingredient.name}</span>
      </div>
    </div>
  )
}
