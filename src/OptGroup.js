import React from "react";
import Option from "./Option";

export default function OptGroup({ breed, subs }) {
	return (
		<optgroup label={breed}>
			{subs.map((subBreed, index) => {
				return (
					<Option breed={breed} sub={subBreed} key={index}></Option>
				);
			})}
		</optgroup>
	);
}
