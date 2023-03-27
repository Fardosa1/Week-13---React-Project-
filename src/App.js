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

// This portion react code import two compenents and files that I created
// Navbar and Login that are in two seperate files. 
// The class app function works to rendeer the two components
// The export default app exports the app components
// and so it can be imported and used in other parts of the code!! :)