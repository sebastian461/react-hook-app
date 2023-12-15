import { useState } from "react";

export const CounterApp = () => {
  /* 'useState' tambien puede incializar con valores no primitivos */
  //const [counter, setCounter] = useState(10);
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const onClickHanled = () => {
    //* Esta sintaxis es valida
    /* 
    setCounter({
      counter1: counter1 + 1,
      counter2,
      counter3,
    }); */

    //* Pero es más simple usar el operador spred y sobreescribir uno o varios valores
    setCounter({
      ...counter,
      counter1: counter1 + 1,
    });
  };

  const { counter1, counter2, counter3 } = counter;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button className="btn btn-primary" onClick={onClickHanled}>
        +1
      </button>
    </>
  );
};
