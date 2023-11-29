import './LightControls.css';
import { useContext } from 'react';
import LightContext from "../../LightContext";

const LightControls = () => {
    const context = useContext(LightContext);
    const [lightObj, setLightObj] = context;

    return (
        <div className="light-controls">
            {lightObj.map((light, index) => {
                return (<input key={index} type="color" value={light.color} onChange={(e) => {
                    setLightObj([
                        ...lightObj.slice(0, index),
                        {
                            ...light,
                            color: e.target.value
                        },
                        ...lightObj.slice(index + 1,)
                    ])
                }} />)
            })}
        </div>
    )
};

export default LightControls;