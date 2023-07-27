// Function to get detailed recipe information
async function getRecipeInformation(recipeId) {
    try {
      const apiKey = '360a14cd6bcb4ace911786c687939dbc'; // Replace this with your Spoonacular API key
  
      // Fetch data from the Spoonacular API for the specific recipe
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
      const recipeInfo = await response.json();
  
      return recipeInfo;
    } catch (error) {
      console.error('Error fetching recipe information:', error);
      return null;
    }
  }
  
  // Function to display detailed recipe information, including steps
  function displayDetailedRecipe(recipeInfo) {
    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = '';
  
    const recipeElement = document.createElement('div');
    recipeElement.innerHTML = `
      <h2>${recipeInfo.title}</h2>
      <p>Missing Ingredients: ${recipeInfo.missedIngredientCount}</p>
      <p>Used Ingredients: ${recipeInfo.usedIngredientCount}</p>
      <p>Likes: ${recipeInfo.likes}</p>
      <img src="${recipeInfo.image}" alt="${recipeInfo.title}" width="200">
    `;
  
    // Check if analyzedInstructions array exists and has elements
    if (recipeInfo.analyzedInstructions && recipeInfo.analyzedInstructions.length > 0) {
      recipeElement.innerHTML += `
        <h3>Instructions:</h3>
        <ol>
          ${recipeInfo.analyzedInstructions[0].steps.map(step => `<li>${step.step}</li>`).join('')}
        </ol>
      `;
    } else {
      recipeElement.innerHTML += '<p>No instructions found for this recipe.</p>';
    }
  
    recipeContainer.appendChild(recipeElement);
  }
  
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
  
      // Display only the first three recommended recipes
      const recommendedRecipes = recipes.slice(0, 3);
      const recipeContainer = document.getElementById("recipeContainer");
      recipeContainer.innerHTML = '';
  
      if (recommendedRecipes.length === 0) {
        recipeContainer.innerHTML = '<p>No recipe found with the provided ingredients.</p>';
      } else {
        for (const recipe of recommendedRecipes) {
          const detailedRecipe = await getRecipeInformation(recipe.id);
          const recipeElement = document.createElement('div');
          recipeElement.innerHTML = `
            <div class="recipe-card">
              <h2>${detailedRecipe.title}</h2>
              <p>Missing Ingredients: ${detailedRecipe.missedIngredientCount}</p>
              <p>Used Ingredients: ${detailedRecipe.usedIngredientCount}</p>
              <p>Likes: ${detailedRecipe.likes}</p>
              <img src="${detailedRecipe.image}" alt="${detailedRecipe.title}" width="200">
            </div>
          `;
          recipeContainer.appendChild(recipeElement);
        }
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }
  
  
  
  // Key event listener to submit form on Enter key press
  document.getElementById("ingredients").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      generateRecipe();
    }
  });
  