import React from "react";
import { Container, Row, Form, Button, Col } from 'react-bootstrap';

const url = 'http://localhost:4000/route';
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = { "textField": this.state.value };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));

  }
  render() {
    return (

      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">Form Designer </a>
          </div>
          <form class="form-inline" onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="Fragment name">
                Enter the fragment name

              </label>
              <input type="text" onChange={this.handleChange} class="form-control" />

            </div>
            <button type="submit" class="btn btn-primary btn-md">Create</button>
          </form>
        </div>
      </nav>

    )
  }
}
export default Header;