import React, { useState } from 'react'




    export const AddRecipeModal = ({ addRecipe }) => {
      const [recipeName, setRecipeName] = useState('');
      const [ingredients, setIngredients] = useState('');
      const [instructions, setInstructions] = useState('');
      const [cuisine, setCuisine] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const newRecipe = {
          name: recipeName,
          ingredients,
          instructions,
          cuisine,
        };
    
        addRecipe(newRecipe);
        closeModal();
      };
    
      const closeModal = () => {
        setRecipeName('');
        setIngredients('');
        setInstructions('');
        setCuisine('');
      };
    
      return (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Recipe Name:
                <input
                  type="text"
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                  required
                />
              </label>
              <label>
                Ingredients:
                <textarea
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  required
                />
              </label>
              <label>
                Instructions:
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  required
                />
              </label>
              <label>
                Cuisine:
                <input
                  type="text"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Add Recipe</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      );
    };
    
  
    
