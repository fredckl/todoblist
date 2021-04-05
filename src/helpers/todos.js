import { compose, filter, not, prop, propEq, reverse } from "rambda";

export const openTodos = compose(
reverse,
filter(compose(not, propEq('archived', true))),
prop('todos')
);

export const closedTodos = compose(
  reverse,
  filter(propEq('archived', true)),
prop('todos')
);

export const allTodos = compose(
  reverse,
  prop('todos')
)