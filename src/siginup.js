import React, { Component } from 'react';
import './App.css';
class signup extends Component {
  render() {
    return (
      <div>
      <div class="Signin-box">
		    <h1>First Cut</h1>
		      <form>
		<p>Username</p>
		<input type="text" id="user" name="Username" placeholder="Enter Username">
		<p>Email Address</p>
		<input type="text" name="email" placeholder="Enter your email Address">
		<p>Password</p>
		<input type="text" id="userpassword" name="password" placeholder="Enter Password">
		<p>Confirm Password</p>
		<input type="text" name="Confirmpassword" placeholder="Enter Confirm password">
		<input type="submit" name="submit" value="Sign In" >
		<a href="#signup.js">Already have an account!</a>
		</form>

      </div>

    );
  }
}
export default App;
