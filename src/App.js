import React from "react";
import Form from "./Form";
import Images from "./Images";
import useDataApi from "./useDataApi";

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

  let result;
  if (imagesState.isLoaded && formState.isLoaded) {
    result = (
      <React.Fragment>
        <Form doRequest={setUrl} breeds={formState.data.message}></Form>
        <Images images={imagesState.data.message}></Images>)
      </React.Fragment>
    );
  } else if (imagesState.isError || formState.isError) {
    result = <h2>Проблемы при получении данных от сервера</h2>;
  } else {
    result = <h3>Загрузка...</h3>;
  }

  return <div>{result}</div>;
}

export default App;
