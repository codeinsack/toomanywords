import { createEvent, createStore } from 'effector';

const addTodo = createEvent();
const clearTodoList = createEvent();

const $todos = createStore([])
  .on(addTodo, (list, todo) => [...list, todo])
  .reset(clearTodoList);

export const todoStore = {
  $todos,
  addTodo,
  clearTodoList,
};
