import { memo } from "react";

/* 
  ? se requiere el uso de memo para el 'useCallback'
*/
export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volví a generar");

  return (
    <button className="btn btn-primary mt-2" onClick={() => increment(2)}>
      Incrementar
    </button>
  );
});
