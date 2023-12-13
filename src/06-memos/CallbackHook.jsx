import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  //* es similar al 'useMemo', pero memoriza funciones
  const increment = useCallback((value) => {
    setCounter((c) => c + value); //el value se envia desde el componente hijo
  }, []);

  /* const increment = () => {
    setCounter(counter + 1);
  }; */

  return (
    <>
      <h1>CallbackHook</h1>
      <hr />
      <h2>Callback counter: {counter}</h2>
      <ShowIncrement increment={increment} />
    </>
  );
};
