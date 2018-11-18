import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  width: 250px;
  background: #2e3d49;
  color: #979ea4;
  float: left;
  display: flex;
  flex-direction: column;
  border: 0px;

  div {
    padding: 10px 25px;

    @media (max-width: 460px) {
      width: 125px;
      padding: 10px 10px;
    }
  }

  @media (max-width: 460px) {
    width: 130px;
  }
`;

export const NewPost = styled.button`
  background: transparent;
  border: 0;
  font-size: 16px;
  color: #979ea4;
  display: flex;
  width: 100%;
  align-items: center;

  &:hover {
    color: #fff;
  }

  i {
    margin-right: 10px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 5px;
  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 16px;
      line-height: 32px;

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      font-weight: bold;
    }
  }
`;

export const Divider = styled.hr`
  border: 0.3px solid #979ea1;
`;
