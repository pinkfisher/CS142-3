import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import "./TopBar.css";
import fetchModel from "../../lib/fetchModelData.js";

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: "default"
    };
  }
  componentDidMount() {
    return fetchModel("http://localhost:3000/test/info")
      .then(x => JSON.parse(x.data))
      .then(x => this.setState({ version: x.__v }));
  }
  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit" edge="start">
            Le Thanh Binh app
          </Typography>
          <Typography variant="h5" color="inherit">
            Current activity: {window.location.href} <br></br>
            Version: {this.state.version}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(TopBar);
