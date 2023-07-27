// Function to generate recipe from ingredients
async function generateRecipe() {
    const ingredientsInput = document.getElementById("ingredients");
    const ingredients = ingredientsInput.value.split(",").map(item => item.trim());
  
    if (ingredients.length === 0) {
      alert("Please enter at least one ingredient.");
      return;
    }
  
    try {
      const apiKey = '360a14cd6bcb4ace911786c687939dbc'; // Replace this with your Spoonacular API key
      const ingredientsQuery = ingredients.join(",");
  
      // Fetch data from the Spoonacular API
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsQuery}&apiKey=${apiKey}`);
      const recipes = await response.json();
  
      // Display the recipe(s) on the page
      const recipeContainer = document.getElementById("recipeContainer");
      recipeContainer.innerHTML = '';
  
      if (recipes.length === 0) {
        recipeContainer.innerHTML = '<p>No recipe found with the provided ingredients.</p>';
      } else {
        recipes.forEach(recipe => {
          const recipeElement = document.createElement('div');
          recipeElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <p>Missing Ingredients: ${recipe.missedIngredientCount}</p>
            <p>Used Ingredients: ${recipe.usedIngredientCount}</p>
            <p>Likes: ${recipe.likes}</p>
            <img src="${recipe.image}" alt="${recipe.title}" width="200">
          `;
          recipeContainer.appendChild(recipeElement);
        });
  
        // Save the first recipe to local storage
        saveRecipeToLocalStorage(recipes[0]);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      console.log('Error fetching recipes:');
    }
  }
  
  // Function to save recipe data to local storage
  function saveRecipeToLocalStorage(recipe) {
    localStorage.setItem('savedRecipe', JSON.stringify(recipe));
  }
  
  // Function to retrieve recipe data from local storage
  function getSavedRecipeFromLocalStorage() {
    const savedRecipe = localStorage.getItem('savedRecipe');
    return savedRecipe ? JSON.parse(savedRecipe) : null;
  }
  
  // Function to display recipe on the page
  function displayRecipe(recipe) {
    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = '';
  
    const recipeElement = document.createElement('div');
    recipeElement.innerHTML = `
      <h2>${recipe.title}</h2>
      <p>Missing Ingredients: ${recipe.missedIngredientCount}</p>
      <p>Used Ingredients: ${recipe.usedIngredientCount}</p>
      <p>Likes: ${recipe.likes}</p>
      <img src="${recipe.image}" alt="${recipe.title}" width="200">
    `;
    recipeContainer.appendChild(recipeElement);
  }
  
  // Check if there's a saved recipe in local storage on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedRecipe = getSavedRecipeFromLocalStorage();
    if (savedRecipe) {
      displayRecipe(savedRecipe);
    }
  });
  