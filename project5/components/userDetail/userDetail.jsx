import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import "./userDetail.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData.js";

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: "default" };
  }

  componentDidMount() {
    this.fetchUserDetail();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.fetchUserDetail();
    }
  }

  fetchUserDetail() {
    fetchModel("http://localhost:3000/user/" + this.props.match.params.userId)
      .then(x => JSON.parse(x.data))
      .then(x =>
        this.setState({
          userInfo: x
        })
      );
  }

  render() {
    var userInfo = this.state.userInfo;
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
