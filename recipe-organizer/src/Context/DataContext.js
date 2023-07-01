import { createContext, useReducer, useState } from "react";
import { recipes } from "../Data/Data"

export const DataContext = createContext();

const initialState = {
    recipes: recipes,
    searchValue: "",
  };


const reducer = (state, action) => {

    
    switch (action.type) {
      // Add more cases if needed
      case "FILTER_SEARCHCHANGE":
        return { ...state, searchValue: action.payload };
      default:
        return state;
    }
  };

export const DataContextProvider = ({children})=> {

    const [recipe, setRecipe] = useState(() => {
        const storedRecipes = localStorage.getItem('recipes');
        return storedRecipes ? JSON.parse(storedRecipes) : recipes;
      });

    const [state, dispatch] = useReducer(reducer, initialState);

    return(

        <DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>
    )
}