import React from 'react';
import CardContainer from './components/card-container';
import Card from './components/card/index';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} alt="logo" className="App-logo"/>

      <CardContainer>
        <Card title="100 battleground kill"></Card>
        <Card title="exercise - 100 pushups"></Card>
        <Card title="exercise - 100 situp!"></Card>
      </CardContainer>
    </div>
  );
}

export default App;
