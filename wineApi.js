export async function fetchWinePairing(dish) {
  const apiKey = `https://api.spoonacular.com/food/wine/pairing?apiKey=fb6b144009c94695ae974154fee279fe&food=${dish}`;
  try {
    const response = await fetch(apiKey);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
