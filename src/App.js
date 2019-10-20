import React, { useState } from "react";
import Form from "./Form";
import useDataApi from "./useDataApi";
import "./App.css";

function App() {
  const [url, setUrl] = useState("https://dog.ceo/api/breeds/image/random/20");
  const [formStates] = useDataApi("https://dog.ceo/api/breeds/list/all", {
    message: {}
  });
  return (
    <div className="App">
      {formStates.isError && <h3>Ошибка запроса данных.</h3>}
      {formStates.isLoaded ? (
        <Form doRequest={setUrl} breeds={formStates.data.message}></Form>
      ) : (
        <h3>Загрузка...</h3>
      )}
    </div>
  );
}

export default App;
