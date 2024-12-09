import {useState, useEffect} from "react";

function FetchApp() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch Data')
        }
        const result = await response.json();
        setData(result); 
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  })
}