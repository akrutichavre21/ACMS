import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      viewForm: true
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login form-container">
        {/*<form onSubmit={this.handleSubmit}>
          <ReactBootstrap.Button> Login </ReactBootstrap.Button>
          <ReactBootstrap.Button> Register </ReactBootstrap.Button>
          <ReactBootstrap.FormGroup controlId="email" bsSize="large">
            <ReactBootstrap.FormLabel>Email </ReactBootstrap.FormLabel>
            <ReactBootstrap.FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </ReactBootstrap.FormGroup>
          <ReactBootstrap.FormGroup controlId="password" bsSize="large">
            <ReactBootstrap.FormLabel>Password </ReactBootstrap.FormLabel>
            <ReactBootstrap.FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </ReactBootstrap.FormGroup>
          <ReactBootstrap.Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </ReactBootstrap.Button>
          <a>Not a member? Register here.</a>
    </form>*/}

        <h2>
          <div className="heading">
            <center>Collaborative Writing and Reviewing Application</center>
          </div>
        </h2>
        <div className="login-page">
          <div className="form">
            <form className="register-form" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
            <form className="login-form">
              <input
                type="text"
                placeholder="username"
                onChange={this.handleChange}
              />
              <input
                type="password"
                placeholder="password"
                onChange={this.handleChange}
              />
              <ReactBootstrap.Button
                className="btn btn-dark"
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                login
              </ReactBootstrap.Button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
