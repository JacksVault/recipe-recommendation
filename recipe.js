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
  function displayDetailedRecipe(recipe) {
    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = '';
  
    const recipeElement = document.createElement('div');
    recipeElement.innerHTML = `
      <div class="recipe-card">
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}" width="200">
      </div>
    `;
  
    // Check if analyzedInstructions array exists and has elements
    if (recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0) {
      recipeElement.innerHTML += `
        <h3>Instructions:</h3>
        <ol>
          ${recipe.analyzedInstructions[0].steps.map(step => `<li>${step.step}</li>`).join('')}
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
  
      // Display only the first recommended recipe, if available
      if (recipes.length > 0) {
        const recipe = recipes[0];
        displayDetailedRecipe(await getRecipeInformation(recipe.id));
      } else {
        const recipeContainer = document.getElementById("recipeContainer");
        recipeContainer.innerHTML = '<p>No recipe found with the provided ingredients.</p>';
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
  