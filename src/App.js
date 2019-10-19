import React, { useState, useEffect } from "react";
import Select from "./Select";
import axios from "axios";
import "./App.css";

function App() {
  const [breeds, setBreeds] = useState({
    message: {}
  });

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const result = await axios("https://dog.ceo/api/breeds/list/all");
        setBreeds(result.data);
      } catch {
        alert("Oшибка запроса");
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="App">
      <Select breeds={breeds.message}></Select>
    </div>
  );
}

export default App;
