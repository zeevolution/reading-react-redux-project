import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../store/ducks/posts";

import {
  Container,
  Title,
  Posts,
  PostGrid,
  Post,
  PostCategory,
  PostTitle,
  PostAuthors,
  PostDetails,
  PostDate,
  PostComments,
  PostVote
} from "./MainStyles";

class Main extends Component {
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    const { id } = this.props.match.params;

    //Check if it's a post request by id.
    if (id) {
      this.props.getPostsRequestByCategory(id);
    } else {
      this.props.getPostsRequest();
    }
  }

  render() {
    return (
      <Container>
        <Title> List of Posts by VoteScore: </Title>
        <Posts>
          <PostGrid>
            {this.props.posts.data.length ? (
              this.props.posts.data.map(post => (
                <li key={post.id}>
                  <Link to={`${post.category}/${post.id}`}>
                    <Post>
                      <PostCategory>{post.category}</PostCategory>
                      <PostTitle>
                        <h2>{post.title}</h2>
                      </PostTitle>
                      <PostAuthors>by {post.author}</PostAuthors>
                    </Post>
                  </Link>
                  <PostDetails>
                    <PostDate>
                      <Moment format="MMM DD YYYY">
                        {new Date(post.timestamp).toString()}
                      </Moment>
                    </PostDate>
                    <PostComments>{post.commentCount} comments</PostComments>
                    <PostVote>{post.voteScore} votes</PostVote>
                  </PostDetails>
                </li>
              ))
            ) : (
              <li>
                <PostTitle>
                  <h2>No Posts Found</h2>
                </PostTitle>
              </li>
            )}
          </PostGrid>
        </Posts>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
