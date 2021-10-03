import React, { useReducer } from 'react';
import counterReducer from 'reducers/counter'

function Counter() {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  function decrease() {
    counterDispatch({ type: 'DECREMENT' });
  }
  function increase() {
    counterDispatch({ type: 'INCREMENT' });
  }
  
  return (
    <div>
      LETS COUNTER

      <h1>{counter}</h1>

      <div>
        <button onClick={decrease} style={{ marginRight: '8px' }}>- DECREASE</button>
        <button onClick={increase}>INCREASE +</button>
      </div>
    </div>
  )
}

export default Counter;