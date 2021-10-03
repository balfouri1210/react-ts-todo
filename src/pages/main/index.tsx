import React, { useContext } from 'react';
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

      <CardContainer maxWidth={640}>
        {todoContext.todos.slice(0).reverse().map(todo => {
          return <CardItem id={todo.id} title={todo.content} deleteTodo={todoContext.actions.deleteTodo} key={todo.id}></CardItem>
        })}
      </CardContainer>
    </div>
  );
}

export default Main;
