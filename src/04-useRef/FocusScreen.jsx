import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef(); //* se puede crear una referencia a una propiedad o elemento HTML

  const handledClik = () => {
    //console.log(inputRef);
    //* document.querySelector("input").select()
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <button onClick={handledClik} className="btn btn-primary mt-2">
        Set focus
      </button>
    </>
  );
};
