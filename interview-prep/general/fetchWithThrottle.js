const limit = 300;
let lastCall = 0;

const fetchWithThrottle = async (url) => {
  const now = Date.now();
  debugger
  if ((now - lastCall) >= limit) {
    lastCall = now;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const result = await response.json();
      console.log("result: ", result)
    } catch(err) {
      console.error("Error:", err.message);
    }
  } else {
    console.log("Request ingored due to throttling")
  }
}

fetchWithThrottle("https://jsonplaceholder.typicode.com/todos/1"); // Will fetch
fetchWithThrottle("https://jsonplaceholder.typicode.com/todos/2"); // Will be throttled

setTimeout(() => {
  fetchWithThrottle("https://jsonplaceholder.typicode.com/todos/3"); // Will fetch after 300ms
}, 400);