// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=e905d358649a40f39c4771a4f4187ce6";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
