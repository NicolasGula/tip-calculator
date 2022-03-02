import Input from "./Input"
import Tips from "./Tips";
import '../styles/App.css';
import { tips } from '../dataTips.js'

export default function Form({ message, active }){

    const btnsTips = tips.map(tip => (
        <Tips
          key={tip.id}
          class={"btn-tip"}
          type={"button"}
          name={"tipPercentage"}
          value={tip.value}
          classColorChange={active}
        />
      ))

    return (
        <form className='amounts' id="form-amounts">
          <Input
            id={1}
            class={'bill'}
            name={'bill'}
            title={'Bill'}
            type={'number'}
            place={0}
          />

          <div className='tip'>
            <h5>Select Tip %</h5>
            <div className='button-tip-container'>
              {btnsTips}
            </div>
          </div>

          <Input
            id={2}
            class={'numsOfPeople'}
            name={'numsOfPeople'}
            title={'Number of People'}
            type={'number'}
            place={0}
            msg={message}
          />

        </form>
    )
}