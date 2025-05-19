import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const backendURL = import.meta.env.MODE === "production" ? window.location.origin + "/api" : import.meta.env.VITE_BACKEND_URL + "/api";
  const [data, setData] = useState("empty");

  const fetchAPI = async () => {
    await axios.get(backendURL).then((res) => {setData(res.data.message);})
  };

  useEffect( () => {
    fetchAPI()
  }, []);

  console.log(import.meta.env.MODE)
  console.log(backendURL);
  console.log(data);

  return (
    <>
      <div>
        <h1>{data}</h1>
      </div>
    </>
  )
}

export default App
