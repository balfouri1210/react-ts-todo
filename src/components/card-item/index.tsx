import React from "react";
import './_style.scss';
import { Link } from 'react-router-dom';

interface CardProps {
  todo: {
    id: number;
    content: string;
    done: boolean;
  };
  deleteTodo: (todoId: number) => void;
  updateTodo: (todoId: number) => void;
}

// TS에서 React.Component는 제네릭 타입이기 때문에
// PropType, StateType을 넘겨줘야 한다.
class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      isToggleOn: false
    }
  }

  deleteTodo = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo.id)
  }

  updateTodo = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.updateTodo(this.props.todo.id)
  }

  render() {
    return (
      // 컴포넌트를 만들때 root element를 위해 div로 엮게되는데
      // 이러면 HTML semantic tag 룰을 깨트리게된다.
      // 이때는 React Fragment로 감싸주면 해결된다.
      <div className={`card ${this.props.todo.done ? 'card--done' : null}`}>
        <Link to={`/card/${this.props.todo.content}`}>
          <span>{this.props.todo.content}</span>
          <div>
            <button onClick={this.updateTodo} style={{ marginRight: '8px' }}>✅ Done</button>
            <button onClick={this.deleteTodo}>🗑 Delete</button>
          </div>
        </Link>
      </div>
    )
  }
}

export default Card;