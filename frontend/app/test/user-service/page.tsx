"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("Loading..."); // State to hold the fetched message
  const [error, setError] = useState(""); // State for error handling

  useEffect(() => {
    // Fetch the message from user-service via the gateway
    fetch("/api/user-service/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message); // Set the fetched message
      })
      .catch((error) => {
        console.error("Error fetching user-service data:", error);
        setError("Failed to load data from user-service.");
      });
  }, []);

  // Render the message or an error message
  return (
    <div>
      <h1>Testing user-service page</h1>
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{message}</p>}
    </div>
  );
}
