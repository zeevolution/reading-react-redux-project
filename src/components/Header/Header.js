import React from "react";

import { Container, StyledLink } from "./HeaderStyle";

const Header = () => (
  <Container>
    <StyledLink to="/">
      <h3>My Readable</h3>
    </StyledLink>
  </Container>
);

export default Header;
