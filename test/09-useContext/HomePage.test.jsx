import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en HomePage", () => {
  const user = {
    id: 1,
    name: "Sebastián",
  };

  test("debe mostrar el componente sin el usuario", () => {
    /*
     * El componente utiliza un objeto que viene desde el UserProvider
     * por eso es necesario usar el UserContext con el Provider
     */
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const smallTag = screen.getByLabelText("name");
    expect(smallTag.innerHTML).toBe(user.name);
  });
});
