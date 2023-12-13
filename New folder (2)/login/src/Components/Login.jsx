import React, { useState } from 'react';
import "./Login.css"; 
function Login() {
    return (
      <div className='login-container'>
      
        <div className="wrapper">
          <form action="#">
            <h3>THE FLAVOUR OF HOLIDAYS</h3>
            <div className="input-field">
              <input type="email" placeholder="Enter Your Mail" required />
              <label></label>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Enter Your Password" required />
              <label></label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" required />
                <p>Remember me</p>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Log In</button>
            <div className="register">
              <p>Don't have an account?<br />Register</p>
            </div>
          </form>
        </div>
      </div>
     
    );
  }

export default Login;
