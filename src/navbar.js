// navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Link 1</a>
      <a href="/">Link 2</a>
      <a href="/">Link 3</a>
    </nav>
  );
};

export default Navbar;
 
// This portion of the code that uses react component code that creates a component
// called Navbar! :) This component is a function component that rerutrn a navigation element with the
// class name navbar. Inside the nav element there is three
// a elements that have links with the text Link 1 2 & 3 
// the links don't go anywhere since we weren't required to!
// then last the export default navbar is used to be imported and used
// in another parts of the code!