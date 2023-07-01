import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import "../App.css";
import { Link } from "react-router-dom";
import { AddRecipeModal } from "./AddRecipeModal";

export default function MainPage() {
  const {
    state: { recipes },dispatch
  } = useContext(DataContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addRecipe = (newRecipe) => {
    dispatch({ type: 'ADD_RECIPE', payload: newRecipe });
  };

  return (
    <div>
      <div className="">
        <input placeholder="Search Items" type="text" />
        <label>
          <input type="radio" />
          Name
        </label>
        <label>
          <input type="radio" />
          Ingredients
        </label>
        <label>
          <input type="radio" />
          Cuisine
        </label>
      </div>

      <h1>Recipies</h1>

      <div className="card-container">
        {recipes.map((recipe) => (
            
            
           
          <div className="card" key={recipe.id}>
            <img src={recipe.image} className="card-img" alt={recipe.name} />

            <div className="card-details">
              <h2 className="card-title">{recipe.name}</h2>
              <p className="card-details">Ingredients: {recipe.ingredients}</p>
              <p className="card-details">
                Instructions: {recipe.instructions}
              </p>
              <p className="card-details"> Cuisine: {recipe.Cuisine}</p>
            </div>
          </div>
         
        ))}
      </div>

      
        {/* <AddRecipeModal  /> */}
    
    </div>
  );
}
