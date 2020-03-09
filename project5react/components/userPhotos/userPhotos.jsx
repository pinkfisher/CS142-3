import React from "react";
import "./userPhotos.css";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cur: 0 };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleNext() {
    this.setState({ cur: this.state.cur + 1 });
  }
  handleBack() {
    this.setState({ cur: this.state.cur - 1 });
  }
  render() {
    var photoList = window.cs142models.photoOfUserModel(
      this.props.match.params.userId
    );
    if (this.state.cur < photoList.length - 1) {
      var nextButton = <button onClick={this.handleNext}>Next</button>;
    }
    if (this.state.cur > 0) {
      var backButton = <button onClick={this.handleBack}>Back</button>;
    }
    return (
      <div>
        <Photo photo={photoList[this.state.cur]} />
        <Divider />
        {backButton}
        {nextButton}
      </div>
    );
  }
}

function Photo(props) {
  var file_path = "/images/" + props.photo.file_name;
  if (props.photo.comments !== undefined) {
    var comments = props.photo.comments.map(x => (
      <Comment comment={x} key={x._id} />
    ));
  }
  var creator = window.cs142models.userModel(props.photo.user_id);
  return (
    <div>
      <img src={file_path} alt="" />
      <div>
        Post by
        <Link to={"/users/" + creator._id}>
          {creator.first_name + creator.last_name}
        </Link>
        at {props.photo.date_time}
      </div>
      <Divider />
      {comments}
    </div>
  );
}
function Comment(props) {
  return (
    <div>
      <span>{props.comment.date_time}:</span>
      <span>
        <Link to={"/users/" + props.comment.user._id}>
          {props.comment.user.first_name + props.comment.user.last_name}:
        </Link>
      </span>
      <span>{props.comment.comment}</span>
    </div>
  );
}
export default UserPhotos;
