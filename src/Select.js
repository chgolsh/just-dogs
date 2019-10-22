import React from "react";
import OptGroup from "./OptGroup";
import Option from "./Option";

export default function Select({ data, name }) {
  const style = {
    fontSize: "inherit",
    textTransform: "capitalize"
  };
  const entries = Object.entries(data.message);
  const options = entries.map((entry, index) => {
    const [breed, subs] = entry;
    if (subs.length > 0) {
      return <OptGroup subs={subs} breed={breed} key={index}></OptGroup>;
    } else {
      return <Option breed={breed} sub={null} key={index}></Option>;
    }
  });

  return (
    <select style={style} name={name}>
      {options}
    </select>
  );
}
