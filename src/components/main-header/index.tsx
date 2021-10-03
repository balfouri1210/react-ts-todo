import React, { useState, useContext } from 'react';
import { TodoContext } from 'context/todo-context';
import './_style.scss';

function MainHeader() {
  const [newTodo, setNewTodo] = useState('');
  const [addTodoForm, setAddTodoForm] = useState(false);

  const todoContext = useContext(TodoContext);

  function showAddTodoForm() {
    setAddTodoForm(!addTodoForm);
  }

  function changeContent(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    todoContext.actions.addTodo(newTodo);
    setNewTodo('');
    setAddTodoForm(false);
  }

  return (
    <header className="header">
      <div>
        <span>Total: {todoContext.todos.length}</span>
        <button onClick={showAddTodoForm} className="header__add-todo">
          {addTodoForm ? 'Cancel' : 'Add Todo'}
        </button>
      </div>

      {addTodoForm ?
        <form onSubmit={handleSubmit} className="header__new-todo-form">
          <input type="text" value={newTodo} onChange={changeContent}/>
          <button type="submit">Submit!</button>
        </form> : null
      }
    </header>
  )
}

export default MainHeader;