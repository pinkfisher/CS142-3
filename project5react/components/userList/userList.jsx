import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./userList.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData.js";

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
    this.state = { userList: [] };
  }

  componentDidMount() {
    fetchModel("http://localhost:3000/user/list")
      .then(x => JSON.parse(x.data))
      .then(x => this.setState({ userList: x }));
  }

  render() {
    var userList = this.state.userList.map(x => (
      <UserListItem user={x} key={x._id} />
    ));
    return <List>{userList}</List>;
  }
}

export default UserList;
