import React from "react";

export default function Option({ sub, breed }) {
	const value = sub ? `${breed}/${sub}` : breed;
	return <option value={value}>{sub || breed}</option>;
}
