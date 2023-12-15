const initialState = [
  {
    id: 1,
    todo: "Tarea 1",
    done: false,
  },
];

/*
 * Esta es la manera de definir un 'reducer' (aun no es un hook, una función que recibe un state y un action)
 */
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") return [...state, action.payload];
  return state; //* siempre debe retornar un nuevo state (no muta el estado original)
};

let todos = todoReducer();
const newTodo = {
  id: 2,
  todo: "Tarea 2",
  donde: false,
};

/*
 * Esta es la acción que se le envia al reducer
 */
const addTodoAction = {
  type: "[TODO] add todo", //* el tipo de acción
  payload: newTodo, //* la carga de la acción (opcional según el tipo de acción)
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
