
export const fetchRecipes = async (query) => {
  const recipeApiKey = `https://api.edamam.com/search?q=${query}&app_id=19bde2bf&app_key=e66d79d01e5f7b88d13643b3f5f2861c&to=15`;
  
  try {
    const data = await fetch(
      recipeApiKey
    );
    const response = await data.json();
    return response;
  } catch (error) {
    throw error;
  }
};
