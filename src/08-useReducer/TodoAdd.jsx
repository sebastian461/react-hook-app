import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { todo, onInputChange, onResetForm } = useForm({
    todo: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.length < 1) throw new Error("No hay una descripción");
    const newTodo = {
      id: new Date().getTime() * 3,
      description: todo,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        className="form-control"
        name="todo"
        value={todo}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
