import React from "react";
import "./userPhotos.css";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData.js";

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photoList: [], isLoaded: false };
  }

  componentDidMount() {
    this.fetchUserPhotos();
  }

  fetchUserPhotos() {
    fetchModel(
      "http://localhost:3000/photosOfUser/" + this.props.match.params.userId
    ).then(x =>
      this.setState({
        photoList: x,
        isLoaded: true
      })
    );
  }

  render() {
    if (this.state.isLoaded) {
      return <UserPhotosView photoList={this.state.photoList}></UserPhotosView>;
    } else {
      return <div></div>;
    }
  }
}

class UserPhotosView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cur: 0, creator: false };
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
    var photoList = this.props.photoList;
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

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creator: {}, isLoaded: false };
  }

  componentDidMount() {
    fetchModel("http://localhost:3000/users/" + this.props.photo.user_id).then(
      x =>
        this.setState({
          creator: x,
          isLoaded: true
        })
    );
  }

  render() {
    if (this.state.isLoaded) {
      var file_path = "/images/" + this.props.photo.file_name;
      if (this.props.photo.comments !== undefined) {
        var comments = this.props.photo.comments.map(x => (
          <Comment comment={x} key={x._id} />
        ));
      }

      var creator = this.state.creator;

      return (
        <div>
          <img src={file_path} alt="" />
          <div>
            Post by
            <Link to={"/users/" + creator._id}>
              {creator.first_name + creator.last_name}
            </Link>
            at {this.props.photo.date_time}
          </div>
          <Divider />
          {comments}
        </div>
      );
    } else return <div></div>;
  }
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creator: "default" };
  }
  componentDidMount() {
    fetchModel(
      "http://localhost:3000/users/" + this.props.comment.user_id
    ).then(x =>
      this.setState({
        creator: x
      })
    );
  }

  render() {
    return this.state.creator !== "default" ? (
      <div>
        <span>{this.props.comment.date_time}:</span>
        <span>
          <Link to={"/users/" + this.props.comment.user_id}>
            {this.state.creator.first_name + this.state.creator.last_name}:
          </Link>
        </span>
        <span>{this.props.comment.comment}</span>
      </div>
    ) : (
      <div></div>
    );
  }
}
export default UserPhotos;
