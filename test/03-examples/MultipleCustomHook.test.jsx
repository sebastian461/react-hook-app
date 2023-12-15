import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe("Pruebas en MultipleCustomHook", () => {
  useFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: null,
  });

  test("debe mostrar el contenido por defecto", () => {
    render(<MultipleCustomHook />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Breaking Bad Quotes"));
    const nextBtn = screen.getByRole("button", { name: "Siguiente" });

    expect(nextBtn.disabled).toBeTruthy(); //espera que el botón este desabilitado
  });

  test("debe de mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Sebastián", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextBtn = screen.getByRole("button", { name: "Siguiente" });

    expect(screen.getByText("Hola mundo")).toBeTruthy();
    expect(screen.getByText("Sebastián")).toBeTruthy();
    expect(nextBtn.disabled).toBeFalsy();
  });

  test("debe llamar a la función newQuote", () => {
    const newQuote = jest.fn();

    useFetch.mockReturnValue({
      data: [{ author: "Sebastián", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
      newQuote,
    });

    render(<MultipleCustomHook />);
    const nextBtn = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextBtn);
    expect(newQuote).toHaveBeenCalled();
  });
});
