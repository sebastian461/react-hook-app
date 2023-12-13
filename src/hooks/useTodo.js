import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

const initialState = [];

export const useTodo = () => {
  /*
   * Esta la sintaxis del hook 'useReducer', el 'todoReducer' es la función que reducer
   * y el 'initialState' es el estado inicial que tendra, similar al 'useState',
   * el 'dispatch' es el que se encarga de manera las acciones de la función reducer
   * la tercera función se define generalmente como init y funciona como el initialState
   */
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const countTodos = state.length;
  const pendingTodos = state.filter((t) => !t.done).length;

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add TODO",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Delete TODO",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle TODO",
      payload: id,
    };

    dispatch(action);
  };

  return {
    countTodos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodos,
    state,
  };
};
