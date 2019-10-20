import React from "react";

export default function Images({ images }) {
  return (
    <div>
      {images.map((path, index) => {
        return <img key={index} src={path} alt=""></img>;
      })}
    </div>
  );
}
