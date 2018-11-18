import React from "react";

import { Container, NewPost, Nav, Divider } from "./SidebarStyle";

const Sidebar = () => (
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
          <span>Categories</span>
        </li>
        <li>
          <a href="">Categoria 1</a>
        </li>
      </Nav>
    </div>
    <div>
      <Nav>
        <li>
          <span>Filters</span>
        </li>
        <li>
          <a href="">All</a>
        </li>
        <li>
          <a href="">VoteScore</a>
        </li>
        <li>
          <a href="">Date</a>
        </li>
      </Nav>
    </div>
  </Container>
);

export default Sidebar;
