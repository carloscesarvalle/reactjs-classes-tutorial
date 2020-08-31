import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firtName: "",
      lastName: "",
      textarea: "",
      isFriendly: false,
    };
  }
  //handleChange function to manage input
  handleChange(event) {
    //Using js object destructuring to prevent future bugs
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <hr />
        <p>Form with 2 inputs: name and last name. It is self-closing</p>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={this.state.value}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={this.state.value}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
        </form>
        {this.state.firstName} {this.state.lastName}
        <hr />
        <p>This is a textarea</p>
        <textarea
          value={this.state.value}
          name="textarea"
          onChange={(event) => this.handleChange(event)}
        />{" "}
        <br />
        {this.state.textarea}
        <hr />
        <p>This is a checkbox</p>
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />{" "}
          Is Friendly?
        </label>
      </div>
    );
  }
}

export default Forms;
