

import { fetchWinePairing } from "./wineApi.js";
import {
  renderPairedWines,
  renderPairingText,
  renderProductMatches,
} from "./results.js";
import { homeContent } from "./home.js";

document.body.innerHTML = homeContent;

async function searchPairing() {
  const dishInput = document.getElementById("dishInput");
  const wineListContainer = document.getElementById("wineList");
  // const welcomeContainer = document.getElementById("welcomeCont");
  // Clear previous results
  // wineListContainer.innerHTML = "";
  welcomeContainer.innerHTML = "";
  const dish = dishInput.value.trim();
  if (!dish) {
    alert("Please enter a dish!");
    return;
  }

  try {
    const data = await fetchWinePairing(dish);

    if (data && data.pairedWines && data.pairedWines.length > 0) {
      renderPairedWines(data.pairedWines, wineListContainer);
      renderPairingText(data.pairingText, wineListContainer);
      renderProductMatches(data.productMatches, wineListContainer);
    } else {
      alert("No wine pairings found for the specified dish.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching data. Please try again.");
  }
}

// Adding event listener

const button = document.getElementById("searchButton");
button.addEventListener("click", searchPairing);

// Recipe search

import { fetchRecipes } from "./recipeApi.js";
import { renderRecipes } from "./recipes.js";

// const searchButton = document.getElementById("searchBtn");
// searchButton.addEventListener("click", async function () {
const recipeSearchForm = document.getElementById("recipeSearchForm");
recipeSearchForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the default form submission

  const searchInput = document.getElementById("searchBox").value.trim();
  if (!searchInput) {
    document.getElementById(
      "wineList"
    ).innerHTML = `<h2>Please enter a search term</h2>`;
    return;
  }

  try {
    const recipesResponse = await fetchRecipes(searchInput);
    renderRecipes(recipesResponse.hits, document.getElementById("wineList"));
  } catch (error) {
    // Handle error (e.g., network error)
    document.getElementById(
      "wineList"
    ).innerHTML = `<h2>Error in Fetching Recipes!</h2>`;
    console.error("Error fetching recipes:", error);
  }
});
