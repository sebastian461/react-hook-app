import { TodoItem } from "./index";
import PropTypes from "prop-types";

export const TodoList = ({ state, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  state: PropTypes.array.isRequired,
};
