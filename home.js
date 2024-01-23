export const homeContent = `
<header> <h1>My Food App </h1></header>
<div class="cont1" >
<div class="wine-search">
<form id="wineMatch">
 <input 
     type="text" 
     id="dishInput" 
     placeholder="Enter any dish..."
  />
     <button type="submit" id="searchButton">Search wine</button>
</form>
</div>
 <div class="recipe-search">
   <form id="recipeSearchForm">
     <input
      type="text"
      id = "searchBox"
      placeholder="Search for recipes..."
      />
      <button type="submit" id="searchBtn">Search recipe</button>
   </form>

  
  </div>
</div>

   <div class="container1" id="recipeCont"> </div>
   <div class="Container" id="wineList"> </div>


     <div class="wel-cont" id="welcomeCont"> 
      <p class="Welcome-Para">
        Welcome to the Recipe Finder and Wine Pairing App.! This application helps you discover delicious recipes and find the perfect wine pairings to enhance your culinary experience.
      </p>


        <div class="img1">
          <img class="img" src="images/wine.png" alt="wine img" />
        </div>

  </div>
`;
