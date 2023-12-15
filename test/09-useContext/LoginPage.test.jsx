import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en LoginPage", () => {
  test("debe de mostrar el componente sin el usario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de llamar el setUser al hacer click en el botón", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const btnSet = screen.getByRole("button", { name: "Set usuario" });
    fireEvent.click(btnSet);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Sebastián",
    });
  });
});
