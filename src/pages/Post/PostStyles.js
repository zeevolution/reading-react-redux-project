import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
`;

export const PostHeader = styled.div`
  display: inline-block;
  flex-direction: row;
  margin-left: 20px;
  padding-bottom: 5px;
  width: 100%;
  text-decoration: none;

  &:first-child {
    margin: 0;
  }
`;

export const PostCategory = styled.div`
  font-size: 14px;
  font-weight: 200;
  margin-top: 15px;
  text-transform: uppercase;
  color: #7e7e7e;
`;

export const PostTitle = styled.div`
  padding-bottom: 5px;

  h2 {
    font-size: 30px;
    font-weight: 300;
    color: #292929;
  }

  &:hover h2 {
    opacity: 0.4;
  }
`;

export const PostAuthors = styled.div`
  font-size: 14px;
  color: #2b2b2b;
`;

export const PostDetails = styled.div`
  display: flex;
  margin: 0;
`;

export const PostComments = styled.div`
  margin-right: 10px;
  font-size: 14px;
  color: #999;
`;

export const PostDate = styled.div`
  margin-right: 10px;
  font-size: 14px;
  color: #999;
`;

export const PostVote = styled.div`
  margin-right: 10px;
  font-size: 14px;
  color: #999;
`;

export const PostBody = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: left;

  font-size: 18px;
  font-weight: 400;
  color: #5a5a5a;
`;
