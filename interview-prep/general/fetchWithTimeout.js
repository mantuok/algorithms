const fetchWithTimeout = async (city) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000)

  try {
    const response = await fetch(`https://api.example.com/weather?q=${city}`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId); 

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("404: City not found");
      } else if (response.status === 500) {
        throw new Error("500: Internal server error");
      } else {
        throw new Error(`Unexpected error: ${response.status}`);
      }
    }
    const weather = await response.json();
    console.log(weather);
  } catch(err) {
    if (err.name === "AbortError") {
      console.error("Error: request timeout")
    } else {
    console.error("Error message: ", err.message)
    }
  }
}