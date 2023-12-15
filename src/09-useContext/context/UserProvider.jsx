/*
 * El provider es el que tiene la información que sera pasa al context
 * la property 'children' se puede definir como cada uno de los componentes hijos que se
 * podran renderizar dentro del context
 */

import { useState } from "react";
import { UserContext } from "./UserContext";

/* const user = {
  id: 123,
  name: "Sebastián",
}; */

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
