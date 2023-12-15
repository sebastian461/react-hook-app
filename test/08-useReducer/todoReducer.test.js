import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo TODO",
      done: false,
    },
  ];

  test("debe regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState); //se puede usar 'toBe' porque los objetos se pasan por referencia (mismo espacio de memoria)
  });

  test("debe agregar un TODO", () => {
    const action = {
      type: "[TODO] Add TODO",
      payload: {
        id: 2,
        description: "Nuevo TODO",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload); //espera que el objeto este contenido
  });

  test("debe eliminar un TODO", () => {
    const action = {
      type: "[TODO] Delete TODO",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
    expect(newState).not.toContain(initialState);
  });

  test("debe cambiar el estado del TODO", () => {
    const action = {
      type: "[TODO] Toggle TODO",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
