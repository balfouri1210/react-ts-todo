import React from 'react';

interface TodoContextValue {
  todos: {
    id: number;
    content: string;
  }[],

  actions: (todoId: number) => void
}

export const TodoContext = React.createContext<TodoContextValue>({
  todos: [],
  actions: () => {}
});