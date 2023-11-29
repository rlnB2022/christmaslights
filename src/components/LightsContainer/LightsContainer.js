import "./LightsContainer.css";
import Light from "../Light/Light";
import { useContext } from "react";
import LightContext from "../../LightContext";

const LightsContainer = () => {
	const context = useContext(LightContext);
	const lightObj = context[0];

	return (
		<div className="lights-container">
			{lightObj.map((light) => {
				return (<Light key={light.id} color={light.color} active={light.active} />)
			})}
		</div>
	);
};

export default LightsContainer;