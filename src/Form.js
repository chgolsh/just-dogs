import React from "react";
import Select from "./Select";

export default function Form({ breeds }) {
  const formName = "form";
  const selectName = "select";
  const handlerSubmit = event => {
    event.preventDefault();
    const form = document.forms[formName];
    const selected = form.elements[selectName].value;
    console.log(selected);
  };
  const handlerReset = event => {
    event.preventDefault();
    console.log("random");
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
