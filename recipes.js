export const renderRecipes = (hits, recipeContainer) => {
  if (hits.length === 0) {
    recipeContainer.innerHTML = `<h2>No Recipes Found!</h2>`;
    return;
  }
  const welcomeContainer = document.getElementById("welcomeCont");
  const wineListContainer = document.getElementById("wineList");

  wineListContainer.innerHTML = "";
  recipeContainer.innerHTML = "";
  welcomeContainer.innerHTML = "";

  hits.forEach((hit) => {
    const recipeData = {
      title: hit.recipe.label,
      calories: hit.recipe.calories,
      image: hit.recipe.image,
      url: hit.recipe.url,
      type: hit.recipe.dishType,
    };

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

      recipeContainer.innerHTML += htmlStr;
    };

    recipeDisplay(recipeData);
  });
};
