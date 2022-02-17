import React, { Component } from 'react';
import '../components/form.css'


class Form extends React.Component {

 
  render() { 
    return <><div className="container">

      <div className="form-group-heading">
        <h1>Sign Up</h1>
        <p>It's free and only takes a minute</p>
      </div>

      <div className="form-group">
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" required></input>
      </div>

      <div className="form-group">
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" required></input>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="Email" id="email" required></input>
      </div>

      <div className="form-group">
        <label htmlFor="password-1">Password</label>
        <input type="password" id="password-1" pattern=".{5,8}" title="Password must be 5 to 8 characters long" required></input>
      </div>

      <div className="form-group">
        <label htmlFor="password-2">Confirm Password</label>
        <input type="password" id="password-2" required></input>
      </div>

      <div>
        <button className="btn" type="submit">Sign Up</button>
      </div>
      <div className="bottom-text">
        <p>
          By Clicking the Sign Up botton you agree to our
          <a href="#" className="btn">Terms of Service</a> and
          <a href="#" className="btn">Privacy Policy</a>
        </p>
      </div>

    </div><footer>
        <p>Already have an account?</p>
        <a href="#">Login Here</a>
      </footer></>
  }
}
 
export default Form;