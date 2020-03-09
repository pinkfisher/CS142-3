import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./userList.css";
import { Link } from "react-router-dom";

function UserListItem(props) {
  return (
    <ListItem button component={Link} to={"/users/" + props.user._id}>
      <ListItemText>
        {props.user.first_name + " " + props.user.last_name}
      </ListItemText>
    </ListItem>
  );
}
/**
 * Define UserList, a React componment of CS142 project #5
 */

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var userList = window.cs142models
      .userListModel()
      .map(x => <UserListItem user={x} key={x._id} />);
    return <List>{userList}</List>;
  }
}

export default UserList;
