// This is a custom hook for asynchronous API fetching
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}

export default useFetch;