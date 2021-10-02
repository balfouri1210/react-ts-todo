import React, { useState } from 'react';
import {
  useParams
} from 'react-router-dom';

function Card() {
  let { title } = useParams<any>();
  const [content, setContent] = useState<string>('');

  function changeContent(event: React.ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  };
  // remember! setState는 비동기다.

  function handleSubmit(event: React.FormEvent) {
    alert('A name was submitted: ' + content);
    event.preventDefault();
  }

  return (
    <div>
      <div>TITLE: {title}</div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={content} onChange={changeContent}/>
        <button type="submit">Submit!</button>
      </form>
    </div>
  )
}

export default Card;