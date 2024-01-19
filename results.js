// renderWineResults.js

export function renderPairedWines(pairedWines, wineListContainer) {
    const pairedWinesElement = document.createElement('div');
    pairedWinesElement.innerHTML = `<p>Paired Wines: ${pairedWines.join(', ')}</p>`;
    wineListContainer.appendChild(pairedWinesElement);
  }
  
  export function renderPairingText(pairingText, wineListContainer) {
    const pairingTextElement = document.createElement('p');
    pairingTextElement.textContent = pairingText;
    wineListContainer.appendChild(pairingTextElement);
  }
  
  export function renderProductMatches(productMatches, wineListContainer) {
    if (productMatches && productMatches.length > 0) {
      const productMatchesElement = document.createElement('div');
      productMatchesElement.innerHTML = '<h2>Product Matches:</h2>';
  
      productMatches.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('wine-item');
  
        const productImage = document.createElement('img');
        productImage.classList.add('wine-image');
        productImage.src = product.imageUrl;
        productImage.alt = product.title;
  
        const productDetails = document.createElement('div');
        productDetails.classList.add('wine-details');
  
        const productName = document.createElement('h3');
        productName.textContent = product.title;
  
        //const productRating = document.createElement('p');
        //productRating.textContent = `Rating: ${product.averageRating}`;
  
       // const productPrice = document.createElement('p');
       // productPrice.textContent = `Price: ${product.price}`;
  
        const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.textContent = 'View on Amazon';
  
        productDetails.appendChild(productName);
       // productDetails.appendChild(productRating);
       // productDetails.appendChild(productPrice);
        productDetails.appendChild(productLink);
  
        productItem.appendChild(productImage);
        productItem.appendChild(productDetails);
  
        productMatchesElement.appendChild(productItem);
      });
  
      wineListContainer.appendChild(productMatchesElement);
    } else {
      alert('No product matches found for the specified dish.');
    }
  }
  