
export const renderRecipes = (hits, wineListContainer) => {
    // Message for the user if no recipes are found
    if (hits.length === 0) {
      wineListContainer.innerHTML = `<h2>No Recipes Found!</h2>`;
      return;
    }
    const welcomeContainer = document.getElementById("welcomeCont");
    // Empty recipe container before displaying recipes
    wineListContainer.innerHTML = "";
    welcomeContainer.innerHTML = "";
  
    // Data from the JSON object
    hits.forEach((hit) => {
      const recipeData = {
        title: hit.recipe.label,
        calories: hit.recipe.calories,
        image: hit.recipe.image,
        url: hit.recipe.url,
        type: hit.recipe.dishType,
      };
  
      // Function to display results in HTML
      const recipeDisplay = (recipeData) => {
        const htmlStr = `
            <div class="recipe">
              <img src="${recipeData.image}" alt="image">
              <h3>${recipeData.title}</h3>
              <p>Calories: ${recipeData.calories.toFixed(2)}</p>
              <p>Type: ${recipeData.type}</p>
              <a href="${
                recipeData.url
              }" target="_blank" class="view-recipe">View Recipe</a>
            </div>
            
          `;
  
        //  wineListContainer.insertAdjacentHTML("beforeend", htmlStr);
        wineListContainer.innerHTML += htmlStr;
      };
  
      recipeDisplay(recipeData);
    });
  };