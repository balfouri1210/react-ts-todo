import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './pages/main';
import Counter from './pages/counter';
import TodoStore from 'context/todo-context';

// Code splitting을 위한 lazy loading
const Card = lazy(() => import('./pages/card/index'));

function App () {
  return (
    <TodoStore>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact={true}>
              <Main />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>

            <Route path="/card/:title">
              <Card />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </TodoStore>
  )
}

export default App;