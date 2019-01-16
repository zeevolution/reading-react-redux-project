import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CommentsActions } from "../../store/ducks/comments";

import {
  Container,
  Title,
  PostHeader,
  PostCategory,
  PostTitle,
  PostAuthors,
  PostDetails,
  PostDate,
  PostComments,
  PostVote,
  PostBody,
  CommentGrid,
  Comments,
  ButtonGroup,
  EditPost,
  RemovePost,
  EditComment,
  RemoveComment
} from "./PostStyles";

class Post extends Component {
  componentDidMount() {
    this.loadComments();
  }

  loadComments() {
    if (this.props.location.post) {
      const { post } = this.props.location.post;
      this.props.getPostCommentsRequest(post.id);
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    if (this.props.location.post) {
      const { post } = this.props.location.post;

      return (
        <Container>
          <ButtonGroup>
            <EditPost>Edit</EditPost>
            <RemovePost>Remove</RemovePost>
          </ButtonGroup>
          <div>
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
          </div>
          <div>
            <Comments>
              Comentários:
              <CommentGrid>
                {this.props.comments.data.length ? (
                  this.props.comments.data.map(comment => (
                    <li>
                      <Title>
                        <p>{comment.body}</p>
                      </Title>
                      <small>
                        by {comment.author} - Vote Score: {comment.voteScore}
                      </small>
                      <br />
                      <EditComment>Edit</EditComment>
                      <RemoveComment>Remove</RemoveComment>
                    </li>
                  ))
                ) : (
                  <li>
                    <Title>
                      <h4>No comments for this post.</h4>
                    </Title>
                  </li>
                )}
              </CommentGrid>
            </Comments>
          </div>
        </Container>
      );
    } else {
      this.props.history.push("/");

      return <Container />;
    }
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CommentsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
