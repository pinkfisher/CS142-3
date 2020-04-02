import React from "react";
import "./Controller.css";
import Example from "../example/Example";
import States from "../states/States";

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExample: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isExample: !this.state.isExample });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isExample ? "Example" : "States"}
        </button>
        <div>{this.state.isExample ? <Example /> : <States />}</div>
      </div>
    );
  }
}
export default Controller;
