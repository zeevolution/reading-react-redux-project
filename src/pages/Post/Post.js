import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";

import {
  Container,
  PostHeader,
  PostCategory,
  PostTitle,
  PostAuthors,
  PostDetails,
  PostDate,
  PostComments,
  PostVote,
  PostBody
} from "./PostStyles";

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const { post } = this.props.location.state;

    return (
      <Container>
        <PostHeader>
          <PostCategory>{post.category}</PostCategory>
          <PostTitle>
            <h2>{post.title}</h2>
          </PostTitle>
          <PostAuthors>by {post.author}</PostAuthors>
        </PostHeader>
        <PostDetails>
          <PostDate>
            <Moment format="MMM DD YYYY">
              {new Date(post.timestamp).toString()}
            </Moment>
          </PostDate>
          <PostComments>{post.commentCount} comments</PostComments>
          <PostVote>{post.voteScore} votes</PostVote>
        </PostDetails>
        <PostBody>{post.body}</PostBody>
      </Container>
    );
  }
}

export default Post;
