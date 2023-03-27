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
