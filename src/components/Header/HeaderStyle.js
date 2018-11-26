import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  align-items: center;
  justify-content: space-between;
  background: #1c262f;
  text-align: center;
  height: 58px;

  h3 {
    font-weight: 300;
    font-size: 24px;
    margin: 15px;
    color: white;
  }

  &:hover h3 {
    opacity: 0.4;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
