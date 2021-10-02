import React, { Suspense, lazy, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import New from './pages/new';
import { TodoContext } from 'context/todo-context';

// Code splitting을 위한 lazy loading
const Main = lazy(() => import('./pages/main'));
const Card = lazy(() => import('./pages/card/index'));

function App () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'dev - Make react todo app'
    }, {
      id: 2,
      content: 'exercise - 100 pushups'
    }, {
      id: 3,
      content: 'life - order smoked duck from coupang'
    }
  ]);

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

  return (
    <TodoContext.Provider value={{ todos, actions: deleteTodo }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact={true}>
              <Main />
            </Route>

            <Route path="/new">
              <New />
            </Route>

            <Route path="/card/:title">
              <Card />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </TodoContext.Provider>
  )
}

export default App;