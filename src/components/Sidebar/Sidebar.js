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
          <span>Filter by</span>
        </li>
        <li>
          <a href="">Filter 1</a>
        </li>
      </Nav>
    </div>
  </Container>
);

export default Sidebar;
