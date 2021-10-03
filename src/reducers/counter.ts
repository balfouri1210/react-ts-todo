// reducer를 사용하는 근본적인 이유 : state 업데이트 로직을 컴포넌트에서 분리할 수 있기 때문
// useState, useReducer중 어떤걸 사용할지는 상황에 따라 판단할 것.
// 간단한 업데이트에는 useState를 사용하는편.

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

export default counterReducer;