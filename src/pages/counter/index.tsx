import React, { useReducer } from 'react';

interface Action {
  type: 'INCREMENT' | 'DECREMENT';
}

function counterReducer(state: number, action: Action): number {
  // 여기에서 state에 변화를 줄때도 useState를 활용할 때와 마찬가지로 데이터 불변성을 지켜야 한다.
  // (항상 새로운 값으로 할당)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;
  }
}

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