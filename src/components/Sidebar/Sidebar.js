import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesActions } from "../../store/ducks/categories";

import { Container, NewPost, Nav, Divider } from "./SidebarStyle";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav>
            <NewPost>
              <i className="fa fa-plus" />
              Post
            </NewPost>
          </Nav>
        </div>
        <Divider />
        <div>
          <Nav>
            <li>
              <Link to="/">All Posts</Link>
            </li>
          </Nav>
        </div>
        <div>
          <Nav>
            <li>
              <span>Categories</span>
            </li>
            {this.props.categories.data.length
              ? this.props.categories.data.map(category => (
                  <li key={category.id}>
                    <Link to={`${category.path}`}>{category.name}</Link>
                  </li>
                ))
              : ""}
          </Nav>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
