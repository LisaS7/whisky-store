const baseURL = "http://localhost:9000/api/whiskies/";

export async function getProducts() {
  const data = await fetch(baseURL);
  return await data.json();
}
