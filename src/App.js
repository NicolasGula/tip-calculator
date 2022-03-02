import { useEffect, useState, useRef, createContext } from 'react';
import './styles/App.css';

import Logo from './components/Logo';
import Form from './components/Form';
import Results from './components/Results';

export const NumsResultsContext = createContext();
export const FunctionsContext = createContext();

export default function App() {
  // 1 - Guardo la cuenta, la cantidad de personas y el porcentaje de propina
  // 2 - El resultado de la propina por persona
  // 3 - El resultado total por persona
  // 4 - Para mostrar/ocultar la alerta del campo de cantidad de personas.
  // 5 - Conteo de renderizaciones
  const [nums, setNums] = useState({ bill: 0, numsOfPeople: 0, tipPercentage: 0 });
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [message, setMessage] = useState(false)
  const [active, setActive] = useState(0)
  const count = useRef(0)
  //Actualiza la cuenta,numero de personas y/o porcentaje de propina,
  // a medida que el usuario ingresa los datos.
  function handleChange(e) {
    const { name, value } = e.target;
    setNums(prevNums => {
      return { ...prevNums, [name]: Number(value) }
    })
  }

  function changeColor(val) {
    setActive(val)
  }
  //A medida que el usuario ingresa los datos Y!!!! si el numero de pesonas
  // es diferente de cero, se va haciendo los calculos y mostrando en pantalla.
  //
  useEffect(() => {
    const { bill, numsOfPeople, tipPercentage } = nums;
    if (numsOfPeople > 0) {
      setTipAmount(Number((bill * (tipPercentage * 0.01) / numsOfPeople).toFixed(2)));
      setTotal(Number((tipAmount + (bill / numsOfPeople)).toFixed(2)));
      setMessage(false)
    }
    if (count.current > 0 && nums.numsOfPeople === 0) {
      setMessage(true)
    }
    count.current++;
  }, [nums, tipAmount])

  function refreshPage() {
    setNums({ bill: 0, numsOfPeople: 0, tipPercentage: 0 })
    setTipAmount(0);
    setTotal(0);
    setMessage(message);
    setActive(0);
    document.getElementById('form-amounts').reset();
    count.current = 0;
  }

//Con NumsContext permito que todos los componentes hijos tengan acceso a los datos 
//del componente principal (???????? Averiguar si es una buena practica)
//Con FunctionsContext a las funciones
  return (
    <FunctionsContext.Provider value={{ refreshPage , handleChange , changeColor }}>
    <NumsResultsContext.Provider value={{ nums , tipAmount , total  }}>
      <div className="App">
        <Logo />
        <div className='container-calc'>
          <Form  
            message={message}
            active={active}
          />
          <Results />
        </div>
      </div>
    </NumsResultsContext.Provider>
    </FunctionsContext.Provider>
  );
}

