import React from "react";
import OptGroup from "./OptGroup";
import Option from "./Option";

export default function Select({ breeds }) {
  const entries = Object.entries(breeds);
  const options = entries.map((entry, index) => {
    const [breed, subs] = entry;
    if (subs.length > 0) {
      return <OptGroup subs={subs} breed={breed} key={index}></OptGroup>;
    } else {
      return <Option breed={breed} sub={null} key={index}></Option>;
    }
  });

  return <select>{options}</select>;
}
