import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };

    /* window.addEventListener("mousemove", (event) => {
      console.log(event.x, event.y);
    }); */

    window.addEventListener("mousemove", onMouseMove);

    /*
     * Cuando el componente deja de existir se lanza el 'return'
     * Sirve principalmente para limpiar la memoria de los objetos creados en el hook
     */
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
