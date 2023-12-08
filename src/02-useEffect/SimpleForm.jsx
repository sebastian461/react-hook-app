import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Mr.?",
    email: "sebastian@hotmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // * console.log(event.target);
    // * console.log(event.target.value);
    // * console.log(event.target.name);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //la propiedad computada 'name' es la que va a cambiar de valor con el 'value'
    });
  };

  /* 
  ? Es mejor tener varios 'useEffect' encargados de tareas y responsabilidades unicas
  */

  /*
   * sino el hook 'useEffect' no tiene una dependencia, se va a disparar
   * cada vez que el componente se re-dibuja
  useEffect(() => {
    console.log("useEffect called");
  });

  * usar un arreglo vacio como dependencia, hace que el se dispare solo
  * la primera vez que se renderiza el componente
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  */

  /*
   * va a estar pendiente cada vez que 'formState' cambie
   */
  useEffect(() => {
    //console.log("formState change");
  }, [formState]);

  /*
   * va a lanzarse cada vez que el email cambie
   */
  useEffect(() => {
    //console.log("email change");
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control my-2"
        placeholder="sebastian@hotmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Mr.?" && <Message />}
    </>
  );
};
