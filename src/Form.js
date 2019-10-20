import React from "react";
import Select from "./Select";

export default function Form({ breeds, doRequest }) {
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
    >
      <table>
        <caption> Выберите породу собак для отображения:</caption>
        <tbody>
          <tr>
            <td>
              <Select name={selectName} breeds={breeds}></Select>
            </td>
            <td>
              <button type="submit">Запросить фото</button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="reset">Случайные фото</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
