import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import "./App.css";

function App() {
  const [breeds, setBreeds] = useState({
    message: {}
  });
  const [isBreedsLoading, setIsBreedsLoading] = useState(false);
  const [isBreedsError, setIsBreedsError] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      setIsBreedsLoading(true);
      try {
        const result = await axios("https://dog.ceo/api/breeds/list/all");
        setBreeds(result.data);
        setIsBreedsLoading(false);
      } catch {
        setIsBreedsLoading(false);
        setIsBreedsError(true);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="App">
      {isBreedsError && (
        <div>
          <h3>Ошибка запроса данных о породах собак.</h3>
        </div>
      )}
      {isBreedsLoading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <Form breeds={breeds.message}></Form>
      )}
    </div>
  );
}

export default App;
