import { useEffect, useState } from 'react'
import { addRecipeAPI, getRecipes } from './utils/api'

function RecipeApp() {
  const [recipes, setRecipes] = useState([])
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' })

  const addRecipe = async () => {
    //add recipe code
  }

  useEffect(()=>{
    const  fetchRecipes=async()=>{
      // get recipes code
    }
    fetchRecipes();
  },[newRecipe])
  return (
    <div>
      <h1>Recipe App</h1>
      
      <div>
        <h2>Add Recipe</h2>
        <input
          type="text"
          placeholder="Recipe title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
        <textarea
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>

      <div>
        <h2>Recipes</h2>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Pasta</h3>
          <p><strong>Ingredients:</strong> Pasta, Tomato sauce, Cheese</p>
          <p><strong>Instructions:</strong> Boil pasta. Add sauce. Sprinkle cheese.</p>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Sandwich</h3>
          <p><strong>Ingredients:</strong> Bread, Butter, Cheese, Ham</p>
          <p><strong>Instructions:</strong> Toast bread. Add butter. Layer cheese and ham.</p>
        </div>

      </div>
    </div>
  )
}

export default RecipeApp