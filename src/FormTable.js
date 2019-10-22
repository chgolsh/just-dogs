import React from "react";
import Button from "./Button";

export default function FormTable({ select }) {
  return (
    <table style={{ margin: "0 auto" }}>
      <caption> Выберите породу собак для отображения:</caption>
      <tbody>
        <tr>
          <td>{select}</td>
          <td>
            <Button type="submit" text="Получить"></Button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <Button type="reset" text="Случайные фото"></Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
