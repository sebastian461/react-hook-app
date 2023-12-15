import { TodoList, TodoAdd } from "./index";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const {
    countTodos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodos,
    state,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {countTodos}, <small>pendientes: {pendingTodos}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            state={state}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
