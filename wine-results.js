export function renderPairedWines(pairedWines, wineListContainer) {
  document.getElementById("recipeCont").innerHTML = "";
  wineListContainer.innerHTML += `
    <div>
      <p class= "paired-wines" > Paired Wines: ${pairedWines.join(", ")}</p>
    </div>`;
}

export function renderPairingText(pairingText, wineListContainer) {
  wineListContainer.innerHTML += `
    <p class="pairing-text">${pairingText}</p>`;
}

export function renderProductMatches(productMatches, wineListContainer) {
  if (productMatches && productMatches.length > 0) {
    wineListContainer.innerHTML += `
      <div class="wine-item">
        <h3>Product Matches</h3>
        ${productMatches
          .map(
            (product) => `
          <div class="wine-items">
            <img class="wine-image" src="${product.imageUrl}" alt="${product.title}">
            
              <h4>${product.title}</h4>
              <a class="product-link" href="${product.link}" target="_blank">BUY HERE</a>
           
          </div>`
          )
          .join("")}
      </div>`;
  } else {
    alert("No product matches found for the specified dish.");
  }
}
