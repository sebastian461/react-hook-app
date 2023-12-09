import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  //* const { username, email, password } = formState;

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

      <input
        type="password"
        className="form-control my-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
