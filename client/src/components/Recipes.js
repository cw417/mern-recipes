import React from 'react'

export default function Recipes({ recipes }) {
  return (
    recipes.map(recipe => {
      return (
        <div>{recipe.name}</div>
      )
    })
  )
}
