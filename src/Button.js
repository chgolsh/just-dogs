import React from "react";

export default function Button({ style, type, text }) {
  const buttonStyle = {
    fontSize: "inherit",
    ...style
  };
  return (
    <button style={buttonStyle} type={type}>
      {text}
    </button>
  );
}
