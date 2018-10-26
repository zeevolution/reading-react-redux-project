import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 250px;
  background: #fff;
  color: #101010;
  float: right;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;

  div {
    padding: 10px 25px;

    @media (max-width: 460px) {
      width: 125px;
    }
  }

  @media (max-width: 460px) {
    width: 130px;
  }
`;

export const NewPost = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  color: #101010;
  display: flex;
  align-items: center;
  padding: 15px 25px;

  &:hover {
    color: #8b4513;
  }

  i {
    margin-right: 10px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 16px;
      line-height: 32px;

      &:hover {
        color: #8b4513;
      }
    }
  }
`;
