import React from 'react';

import { Container, NewPost, Nav } from './SidebarStyle';

const Sidebar = () => (
  <Container>
    <NewPost>
      <i className="fa fa-plus" />
      Post
    </NewPost>
    <div>
      <br />
      <h6>Categories:</h6>
      <Nav>
        <li>
          <a href=""> - Categoria 1</a>
        </li>
      </Nav>
    </div>
    <div>
      <br />
      <h6>Filter by:</h6>
      <Nav>
        <li>
          <a href=""> - Filter 1</a>
        </li>
      </Nav>
    </div>
  </Container>
);

export default Sidebar;
