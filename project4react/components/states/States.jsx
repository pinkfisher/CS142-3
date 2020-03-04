import React from "react";
import "./States.css";
import PropTypes from "prop-types";

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */

// list component to display filtered state
function List(props) {
  const filtered_data = props.data.filter(x =>
    x.toLowerCase().includes(props.filter_string)
  );
  return (
    <ul>
      {filtered_data.map(x => (
        <li key={x.toString()}>{x}</li>
      ))}
    </ul>
  );
}
// type check for List
List.propTypes = {
  data: PropTypes.array,
  filter_string: PropTypes.string
};

class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
    this.state = {
      filter_string: "",
      data: window.cs142models.statesModel()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      filter_string: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.filter_string}
          onChange={this.handleChange}
        ></input>
        <List
          data={this.state.data}
          filter_string={this.state.filter_string.toLowerCase()}
        />
      </div>
    );
  }
}

export default States;
