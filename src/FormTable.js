import React from "react";

export default function FormTable({ select }) {
  const buttonStyle = {
    fontSize: "inherit"
  };
  return (
    <table style={{ margin: "0 auto" }}>
      <caption> Выберите породу собак для отображения:</caption>
      <tbody>
        <tr>
          <td>{select}</td>
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
  );
}
