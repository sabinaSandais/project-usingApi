
export const fetchRecipes = async (query) => {
  const recipeApiKey = ``;
  
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
