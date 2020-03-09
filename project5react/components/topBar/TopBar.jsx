import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./TopBar.css";
import { withRouter } from "react-router-dom";

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit" edge="start">
            Le Thanh Binh app
          </Typography>
          <Typography variant="h5" color="inherit">
            Current activity: {window.location.href}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(TopBar);
