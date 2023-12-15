import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en TodoItem", () => {
  const todo = {
    id: 1,
    description: "Demo TODO",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks()); //* antes de cada prueba, reinicia las funciones

  test("debe de mostrar el TODO pendiente", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElemetn = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");
    expect(liElemetn.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toContain("align-self-center");
  });

  test("debe de mostrar el TODO completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElemetn = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");
    expect(liElemetn.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toBe(
      "align-self-center text-decoration-line-through"
    );
  });

  test("se debe llamar al toggle todo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("se debe llamar al delete todo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const btnElement = screen.getByRole("button", { name: "Borrar" });
    fireEvent.click(btnElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
