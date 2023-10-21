import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: ([] = [
    { id: "a", title: "first todo", completed: false },
    { id: "b", title: "second todo", completed: true },
  ]),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      if (action.payload) {
        state.list.push({
          id: new Date().toISOString(),
          title: action.payload,
          completed: false,
        });
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id != action.payload);
    },
    toggleTodoComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
