import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from 'components/main-header';
import CardContainer from 'components/card-container';
import CardItem from 'components/card-item/index';
import logo from './logo.svg';
import './_style.scss';
import { TodoContext } from 'context/todo-context';

function Main() {
  const todoContext = useContext(TodoContext);

  return (
    <div className="index-container">
      <div className="index-header">
        <img src={logo} alt="logo" className="index-logo"/>
        <h2>React Todo with Typescript</h2>
      </div>

      <MainHeader></MainHeader>

      <CardContainer>
        {todoContext.todos.slice(0).reverse().map(todo => {
          return <CardItem id={todo.id} title={todo.content} deleteTodo={todoContext.actions.deleteTodo} key={todo.id}></CardItem>
        })}
      </CardContainer>

      <div style={{ textAlign: 'right' }}>
        <Link to="/counter">Go to Counter (useReducer test)</Link>
      </div>
    </div>
  );
}

export default Main;
