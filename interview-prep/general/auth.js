const authenticate = async (username, password) => {
  try {
    const response = await fetch("https://api.example.com/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("401: Invalid username and/or password");
      } else {
        throw new Error(`Http error: ${response.status}`)
      }
    }
    const data = await response.json();
    console.log("Successful login")
  } catch (err) {
    console.error("Error message: ", err.message)
  }
}
