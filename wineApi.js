
export async function fetchWinePairing(dish) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/food/wine/pairing?apiKey=fb6b144009c94695ae974154fee279fe&food=${dish}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
