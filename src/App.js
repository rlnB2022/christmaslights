import "./App.css";
import LightsContainer from "./components/LightsContainer/LightsContainer";
import { useEffect, useState } from "react";
import LightContext from "./LightContext";
import LightControls from './components/LightControls/LightControls';

function App() {
	const [lightObj, setLightObj] = useState([
		{
			id: 1,
			color: "#aa0000",
			active: false,
		},
		{
			id: 2,
			color: "#00aa00",
			active: false,
		},
		{
			id: 3,
			color: "#0000aa",
			active: false,
		},
		{
			id: 4,
			color: "#aa0000",
			active: false,
		},
		{
			id: 5,
			color: "#00aa00",
			active: false,
		},
		{
			id: 6,
			color: "#0000aa",
			active: false,
		},
		{
			id: 7,
			color: "#aa0000",
			active: false,
		},
	]);
	const [lightsActive, setLightsActive] = useState(false);

	useEffect(() => {
		let intervalId;
		if(lightsActive) {
			intervalId = setInterval(() => {
				console.log('timer ON');
			}, 500);
		}
		return () => clearInterval(intervalId);
	}, [lightsActive]);
	return (
		<LightContext.Provider value={[lightObj, setLightObj, lightsActive, setLightsActive]}>
			<div className="App">
				<LightsContainer />
				<LightControls />
				<button onClick={() => setLightsActive(!lightsActive)}>{lightsActive ? "OFF" : "ON"}</button>
			</div>
		</LightContext.Provider>
	);
}

export default App;
