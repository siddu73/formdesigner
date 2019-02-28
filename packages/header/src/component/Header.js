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

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand"> BOB Application Designer </a>
          </div>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Fragment name">
                Fragment name

              </label>
              <input type="text" onChange={this.handleChange} className="form-control" />

            </div>
            <button type="submit" className="btn btn-primary btn-md">Create</button>
          </form>
        </div>
      </nav>

    )
  }
}
export default Header;