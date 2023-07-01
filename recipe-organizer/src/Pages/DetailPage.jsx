import React from 'react'

export default function DetailPage({ recipe }) {
  return (
    <div>
        <h2>{recipe.name}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
      <p>Cuisine: {recipe.Cuisine}</p>
      <img src={recipe.image} alt={recipe.name} />
      
    </div>
  )
}
