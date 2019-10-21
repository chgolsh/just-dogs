import React from "react";

const divStyle = {
  display: "flex",
  flexFlow: "row wrap",
  alignTtems: "center",
  justifyContent: "space-around"
};

const imgStyle = {
  flex: "0 1",
  boxSizing: "border-box",
  padding: "20px",
  maxWidth: "100%"
};

export default function Images({ images }) {
  return (
    <div style={divStyle}>
      {images.map((path, index) => {
        return <img style={imgStyle} key={index} src={path} alt=""></img>;
      })}
    </div>
  );
}
