import React from "react";
import Select from "./Select";

export default function Form({ data, doRequest }) {
  const formStyle = {
    margin: "0 auto",
    fontSize: "1.2rem",
    textAlign: "center"
  };

  const buttonStyle = {
    fontSize: "inherit"
  };
  const formName = "form";
  const selectName = "select";
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
      <table style={{ margin: "0 auto" }}>
        <caption> Выберите породу собак для отображения:</caption>
        <tbody>
          <tr>
            <td>
              <Select name={selectName} data={data}></Select>
            </td>
            <td>
              <button style={buttonStyle} type="submit">
                Получить
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button style={buttonStyle} type="reset">
                Случайные фото
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
