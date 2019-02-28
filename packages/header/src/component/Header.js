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
      <form onSubmit={this.handleSubmit}>
        <label>
          Fragment name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Create" />
      </form>
    )
  }
}
export default Header;