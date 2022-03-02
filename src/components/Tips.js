import {  useContext } from "react";
import { FunctionsContext } from "../App";

export default function Tips(props) {

    const { handleChange, changeColor} = useContext(FunctionsContext)
    return (
        props.value === "Custom" ?
            <input
                key={props.id}
                className={props.value.toLowerCase()}
                type="input"
                name={props.name}
                placeholder={props.value}
                onChange={props.change}
            />
            :
            <button
                key={props.id}
                className={props.classColorChange === props.value ? "active " + props.class : props.class}
                type={props.type}
                name={props.name}
                value={props.value}
                onClick={(e) => {
                    changeColor(props.value);
                    handleChange(e);
                }}
                // props.changeColor(props.value)}
                // // eslint-disable-next-line react/jsx-no-duplicate-props
                // onClick={props.change}
                
            >{props.value}%</button>
    )
}