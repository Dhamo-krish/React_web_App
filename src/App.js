import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <header>
  		<div className="container">
  			<div id="topic">
  				<h1>First Cut</h1>
  			</div>
  			<nav>
  				<ul>
  					<li><a href="">Sign In</a></li>
  				</ul>
  			</nav>
  		</div>

  	</header>

  	<div className="login-box">
  		<h2>Login Page</h2>
  		<form>
  		<p>Username</p>
  		<input type="text" id="user" name="Username" placeholder="Enter Username"/>
  		<p>Password</p>
  		<input type="password" id="userpassword" name="password" placeholder="Enter Password"/>
  		<input type="submit" name="submit" value="Login" onclick="getValues()"/>
  		<a href="#">Forget Password?</a>
  		</form>
  	</div>
    <section class="descrip">
      <h2>Description</h2>
      <p>App in few seconds sdgdfg dfgdf hdfh dfghfdgh thdsfhdsfhsdhsd hf  dfhsdfhsdfh sdfhsdfhsdh dfhsdf hsdhg dfh sdhfsdh dfhh sdfhds </p>
    </section>
    </div>
    );
  }
}

export default App;
