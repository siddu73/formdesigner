import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import addPeople from "./actions";
import EventManager from './eventlog'

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      time: 0
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onTextChange2 = this.onTextChange2.bind(this);
    this.getTime = this.getTime.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  onTextChange(e) {
    this.setState({
      fname: e.target.value
    });
  }
  onTextChange2(e) {
    this.setState({
      lname: e.target.value
    });
  }

  getTime() {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  componentDidMount() {
    this.getTime();
  }

  formSubmit(e) {
    var em = new EventManager();
    e.preventDefault();
    // console.log(this.props.dispatch(addPeople(this.state.people)));
    console.log(this.props.pushPeople(this.state.fname, this.state.lname));
    console.log(
      `${this.state.fname} has been submitted form at ${this.state.time} sec`
    );
    alert(
      `${this.state.fname} has been submitted form at ${this.state.time} sec`
    );

    em.logEvent('Add Person',{
        event:"add_person",data:
        {
          firstname:this.state.fname, 
          lastname:this.state.lname,
          time:this.state.time
        }
      }
     );
    clearInterval(this.state.time);
    this.setState({
      fname: "",
      lname: "",
      time: 0
    });
  }

  render() {
    return (
      <div>
        <p>
          <span>Timer: </span>
          {this.state.time} <span>sec</span>
        </p>
        <form onSubmit={this.formSubmit}>
          FirstName{" "}
          <input
            type="text"
            onChange={this.onTextChange}
            value={this.state.fname}
          />
          <br />
          <br />
          LastName{" "}
          <input
            type="text"
            onChange={this.onTextChange2}
            value={this.state.lname}
          />
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
        <br />
        {this.props.people.map((data, i) => {
          return (
            <div key={i}>
              {i + 1}. {data.firstname} and {data.lastname}
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    people: state
  };
}
function mapDispatchToProp(dispatch) {
  return {
    pushPeople: (fname, lname) => dispatch(addPeople(fname, lname))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Hello);
