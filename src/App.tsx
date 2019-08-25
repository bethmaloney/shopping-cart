import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Menu from './components/header/Menu';
require("bootstrap")

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <HomePage />
    </div>
  );
}

export default App;
