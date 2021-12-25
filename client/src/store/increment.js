import { createEvent, createStore } from 'effector';

const increment = createEvent();
const decrement = createEvent();

const $counter = createStore(0)
  .on(increment, (counter) => counter + 1)
  .on(decrement, (counter) => counter - 1);

export const counterStore = {
  $counter,
  increment,
  decrement,
};
