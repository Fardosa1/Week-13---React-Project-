// login.js
import React from 'react';

const Login = () => {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

// This portion of the code creates a a component called Login
// It is functional component that retrurns a division
// with the class name login-form.
// Inside the division there is the h3 element as required and displays Log In
// then there is the two inpput feilds! username/password!
// Then the export default statement is there so it can be imported and used
// in other parts of the code :0