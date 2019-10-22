import React from "react";
import FormTable from "./FormTable";

export default function Form({ selectName, doRequest, children }) {
  const formStyle = {
    margin: "0 auto",
    fontSize: "1.2rem",
    textAlign: "center"
  };

  const formName = "form";
  const handlerSubmit = event => {
    event.preventDefault();
    const form = document.forms[formName];
    const dogs = form.elements[selectName].value;
    doRequest(`https://dog.ceo/api/breed/${dogs}/images/random/20`);
  };
  const handlerReset = event => {
    event.preventDefault();
    doRequest("https://dog.ceo/api/breeds/image/random/20");
  };
  const selectComponent = children;

  return (
    <form
      name={formName}
      onSubmit={event => {
        handlerSubmit(event);
      }}
      onReset={event => {
        handlerReset(event);
      }}
      style={formStyle}
    >
      <FormTable select={selectComponent}></FormTable>
    </form>
  );
}
