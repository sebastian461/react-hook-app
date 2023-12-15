import { useState } from "react";

/*
 * Esta lógica aplica para cada nuevo formulario que se quiera crear
 */
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState, //* esta es una forma de desestructurar el 'formState' que es un objeto
    onInputChange,
    onResetForm,
  };
};
