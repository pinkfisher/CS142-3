import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import "./userDetail.css";
import { Link } from "react-router-dom";

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var userInfo = window.cs142models.userModel(this.props.match.params.userId);
    var linkToPhoto = (
      <ListItem button component={Link} to={"/photos/" + userInfo._id}>
        <ListItemText>Link to this user photo</ListItemText>
      </ListItem>
    );
    userInfo = Object.keys(userInfo).map(x => (
      <div key={x}>
        {x}:{userInfo[x]}
      </div>
    ));
    return (
      <div>
        {userInfo}
        {linkToPhoto}
      </div>
    );
  }
}

export default UserDetail;
