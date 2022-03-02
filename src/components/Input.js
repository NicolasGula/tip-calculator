import { useContext } from 'react';
import { FunctionsContext } from '../App'


export default function Input(props) {

    const { handleChange } = useContext(FunctionsContext) 

    return (
        <div className={props.class}>
            <label>{props.title}</label>
            {props.title === "Number of People" && props.msg ? (<span class="warning">Cant't be zero</span>) : ""}
            <br />
            <input
                key={props.id}
                className={props.class}
                type={props.type}
                name={props.class}
                placeholder={props.place}

                onChange={handleChange}
            />
        </div>
    )
}