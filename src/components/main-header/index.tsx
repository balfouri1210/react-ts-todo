import React from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from 'context/todo-context';

function MainHeader() {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '640px',
    margin: '16px auto 0',
    padding: '0 16px',
    textAlign: 'right' as const
  }

  const linkStyle = {
    padding: '4px 16px',
    background: '#61dafb',
    color: 'white',
    fontWeight: 600,
    borderRadius: '6px',
    textDecoration: 'none',
  }

  return (
    <TodoContext.Consumer>
      {value => {
        return (
          <header style={headerStyle}>
            <span>Total: {value.todos.length}</span>
            <Link to={'/new'} style={linkStyle}>Add Todo</Link>
          </header>
        )
      }}
    </TodoContext.Consumer>
  )
}

export default MainHeader;