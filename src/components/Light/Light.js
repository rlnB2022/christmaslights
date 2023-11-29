import "./Light.css";

const Light = ({color, active}) => {
	return <div className="light" style={{ backgroundColor: color}}>
		<div className="bright"></div>
	</div>;
};

export default Light;
