import React from "react";

export default function Images({ data, isLoaded }) {
  const divStyle = {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20px"
  };

  const imgStyle = {
    flex: "0 0 auto",
    boxSizing: "border-box",
    margin: "20px",
    maxWidth: "100%",
    border: "10px solid grey",
    borderRadius: "10px"
  };

  if (isLoaded) {
    return (
      <div style={divStyle}>
        {data.message.map((path, index) => {
          return <img style={imgStyle} key={index} src={path} alt=""></img>;
        })}
      </div>
    );
  } else {
    return <h3 style={{ textAlign: "center" }}>Загрузка...</h3>;
  }
}
