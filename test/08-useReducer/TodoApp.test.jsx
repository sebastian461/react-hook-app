import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Pruebas en TodoApp", () => {
  useTodo.mockReturnValue({
    countTodos: 2,
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    pendingTodos: 1,
    state: [
      {
        id: 1,
        description: "TODO 1",
        done: false,
      },
      {
        id: 2,
        description: "TODO 2",
        done: true,
      },
    ],
  });

  test("debe mostrar el componente correctamente", () => {
    render(<TodoApp />);
    //screen.debug();
    expect(screen.getByText("TODO 1")).toBeTruthy();
    expect(screen.getByText("TODO 2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
