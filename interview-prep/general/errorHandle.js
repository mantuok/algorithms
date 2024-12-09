const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Not found (404)")
      } else if (response.status === 500) {
        throw new Error("Internal server error (500)")
      } else {
        throw new Error (`"Unexpected Error" ${response.status}`)
      }
    }
    const data = await response.json();
    console.log("data:", data);
  } catch (error) {
    console.error("Error:", error.message)
  }
}