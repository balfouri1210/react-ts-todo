import React, { useState } from 'react';

interface TodoContextProps {
  children: React.ReactElement[] | React.ReactElement
}

interface TodoContextValue {
  todos: {
    id: number;
    content: string;
    done: boolean;
  }[],

  actions: {
    addTodo: (content: string) => void,
    deleteTodo: (todoId: number) => void,
    updateTodo: (todoId: number) => void
  }
}

export const TodoContext = React.createContext<TodoContextValue>({
  todos: [],
  actions: {
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {}
  }
});

function TodoStore(props: TodoContextProps) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'dev - Make react todo app',
      done: false
    }, {
      id: 2,
      content: 'exercise - 100 pushups',
      done: false
    }, {
      id: 3,
      content: 'life - order smoked duck from coupang',
      done: false
    }
  ]);

  function addTodo (content: string) {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        content,
        done: false
      }
    ])
  }

  function deleteTodo (todoId: number) {
    // todos를 array에 복사해서 따로 할당하는 이유는,
    // setState에서 새로운 값을 할당하는게 아니라 기존값을 변경하는 경우 context에서 변화를 감지하지 못해
    // context를 구독하고 있는 하위 컴포넌트가 rerender 되지 않기 때문이다.
    // https://stackoverflow.com/a/57838888 참고
    let array = [...todos];
    array.forEach((todo, index) => {
      if (todo.id === todoId) array.splice(index, 1);
    });
  
    setTodos(array);
  }

  function updateTodo(todoId: number) {
    let array = [...todos];
    array.forEach((todo) => {
      if (todo.id === todoId) todo.done = true;
    });
  
    setTodos(array);
  }

  return (
    <TodoContext.Provider value={{ todos, actions: { addTodo, deleteTodo, updateTodo } }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoStore;