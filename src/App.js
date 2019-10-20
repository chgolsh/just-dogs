import React from "react";
import Form from "./Form";
import Images from "./Images";
import useDataApi from "./useDataApi";
import "./App.css";

function App() {
  const [imagesState, setUrl] = useDataApi(
    "https://dog.ceo/api/breeds/image/random/20",
    {
      message: {}
    }
  );
  const [formState] = useDataApi("https://dog.ceo/api/breeds/list/all", {
    message: {}
  });

  if (imagesState.isLoaded && formState.isLoaded) {
    return (
      <div className="App">
        <Form doRequest={setUrl} breeds={formState.data.message}></Form>
        <Images images={imagesState.data.message}></Images>
      </div>
    );
  } else if (imagesState.isError || formState.isError) {
    return (
      <div>
        <h2>Проблемы при получении данных от сервера</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Загрузка...</h3>
      </div>
    );
  }
}

export default App;
