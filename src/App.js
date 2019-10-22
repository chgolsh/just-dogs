import React from "react";
import Form from "./Form";
import Select from "./Select";
import Images from "./Images";
import useDataApi from "./useDataApi";

function App() {
  const [imagesState, setUrl] = useDataApi(
    "https://dog.ceo/api/breeds/image/random/20",
    {
      message: []
    }
  );
  const [breedsState] = useDataApi("https://dog.ceo/api/breeds/list/all", {
    message: {}
  });

  let result;
  if (breedsState.isLoaded) {
    result = (
      <React.Fragment>
        <Form doRequest={setUrl} selectName={"select"}>
          <Select name={"select"} data={breedsState.data}></Select>
        </Form>
        <Images
          data={imagesState.data}
          isLoaded={imagesState.isLoaded}
        ></Images>
        )
      </React.Fragment>
    );
  } else if (imagesState.isError || breedsState.isError) {
    result = <h2>Проблемы при получении данных от сервера</h2>;
  } else {
    result = <h3 style={{ textAlign: "center" }}>Загрузка...</h3>;
  }

  return <div>{result}</div>;
}

export default App;
