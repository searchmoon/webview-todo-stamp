import { create } from "zustand";

export interface TodoState {
  todo: string;
  date: Date;
  carryOver: boolean;
  id: number;
}

interface TodoStore {
  todoList: TodoState[];
  setTodoList: (todoList: TodoState[]) => void;
}

export const useTodoStore = create<TodoStore>((set) => {
  return {
    todoList: [],
    setTodoList: (todoList: TodoState[]) => set({ todoList: todoList }),
  };
});
