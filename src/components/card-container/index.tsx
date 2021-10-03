import React from 'react';
import './_style.scss';

interface cardContainerProps {
  children: React.ReactElement[] | React.ReactElement
}

function cardContainer(props: cardContainerProps) {
  return (
    <div className="card-container">
      {props.children}
    </div>
  )
}

export default cardContainer;