import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react';
import getCookie from 'js-cookie';
import './style.css';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const csrfCookie = getCookie('csrftoken');
    const loginResponse = await fetch('http://localhost:8000/books/register/', {
      method: 'POST',
      credentials: 'include', // this sends our session cookie with our request
      body: JSON.stringify(this.state),
      headers: {
        'X-CSRFToken': csrfCookie,
        'Content-Type': 'application/json',

      },
    });
    console.log(loginResponse)
    const parsedResponse = await loginResponse.json();

    if(parsedResponse.data === 'login successful'){
      // change our component
      console.log('succes login')
      // this automatically get passed to your component as a prop
      this.props.history.push('/movies');
    } else {
      console.log('nope')
    }
  }
  render(){
    return (

      <Form onSubmit={this.handleSubmit}>
        <Label> Username</Label>
        <Form.Input type='text' name="username" onChange={this.handleChange} />
        <Label> Password</Label>
        <Form.Input type='password' name="password" onChange={this.handleChange} />
        <Button type="Submit" color="green">Login</Button>
      </Form>
      )
  }
}

export default Login;
