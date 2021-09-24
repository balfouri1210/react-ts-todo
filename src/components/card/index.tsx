import React from 'react';
import './_style.scss';

interface CardProps {
  title: string
}

function card(props: CardProps) {
  return (
    <div className="card">
      {props.title}
    </div>
  )
}

export default card;