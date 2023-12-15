export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add TODO":
      return [...initialState, action.payload];
    case "[TODO] Delete TODO":
      return initialState.filter((t) => t.id !== action.payload);
    case "[TODO] Toggle TODO":
      return initialState.map((t) => {
        if (t.id === action.payload) {
          return {
            ...t,
            done: !t.done,
          };
        }
        return t;
      });
    default:
      return initialState;
  }
};
