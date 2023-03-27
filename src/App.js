import React from 'react';
import './App.css';
import Navbar from './navbar';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="center">
        <Login />
      </div>
    </div>
  );
}

export default App;
