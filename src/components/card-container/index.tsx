import React from 'react';
import './_style.scss';

interface cardContainerProps {
  maxWidth: number,
  children: React.ReactElement[] | React.ReactElement
}

function cardContainer(props: cardContainerProps) {
  return (
    <div className="card-container" style={{ maxWidth: props.maxWidth }}>
      {props.children}
    </div>
  )
}

export default cardContainer;