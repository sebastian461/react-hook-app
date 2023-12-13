import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext); //* le estoy diciendo al hook, que apunte a un contexto y ese contexto retorna un objeto
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: "Sebastián",
          })
        }
      >
        Set usuario
      </button>
    </>
  );
};
