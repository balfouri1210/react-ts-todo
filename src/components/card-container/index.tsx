import React from 'react';

interface cardContainerProps {
  children: React.ReactElement[] | React.ReactElement
}

function cardContainer(props: cardContainerProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default cardContainer;