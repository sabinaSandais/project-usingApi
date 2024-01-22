export function renderPairedWines(pairedWines, wineListContainer) {
  wineListContainer.innerHTML += `
    <div>
      <p class= "paired-wines" > Paired Wines: ${pairedWines.join(", ")}</p>
    </div>`;
}

export function renderPairingText(pairingText, wineListContainer) {
  wineListContainer.innerHTML += `
    <p>${pairingText}</p>`;
}

export function renderProductMatches(productMatches, wineListContainer) {
  if (productMatches && productMatches.length > 0) {
    wineListContainer.innerHTML += `
      <div>
        <h2>Product Matches:</h2>
        ${productMatches
          .map(
            (product) => `
          <div class="wine-item">
            <img class="wine-image" src="${product.imageUrl}" alt="${product.title}">
            <div class="wine-details">
              <h3>${product.title}</h3>
              <a href="${product.link}" target="_blank">View on Amazon</a>
            </div>
          </div>`
          )
          .join("")}
      </div>`;
  } else {
    alert("No product matches found for the specified dish.");
  }
}
