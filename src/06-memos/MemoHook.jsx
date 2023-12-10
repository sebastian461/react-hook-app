import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Procesando...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  //* este hook memoriza un valor
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]); //si el valor del counter cambia

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <small>{counter}</small>
      </h2>

      <h4>{memorizeValue}</h4>

      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
