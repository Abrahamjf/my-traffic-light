import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
export const Home = () => {
	const [takenColor, setTakenColor] = useState("green")
	return (
		<div className ="container-fluid">
		<div className ="tube"></div>
			<div className ="traffic-light-box">
				<div onClick = {() => setTakenColor ("red")} className = {"light red " + ((takenColor === "red") ? "glow" : "")}></div>
				<div onClick = {() => setTakenColor ("yellow")} className = {"light yellow " + ((takenColor === "yellow") ? "glow" : "")}></div>
				<div onClick = {() => setTakenColor ("green")} className = {"light green " + ((takenColor === "green") ? "glow" : "")}></div>
			</div>
	</div>
	);
};


