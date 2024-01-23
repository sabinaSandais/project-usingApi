export async function fetchWinePairing(dish) {
  const apiKey = ``;
  try {
    const response = await fetch(apiKey);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
