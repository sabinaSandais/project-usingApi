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

  // Clear previous results
  wineListContainer.innerHTML = "";

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
