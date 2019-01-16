import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  h4 {
    font-weight: 300;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 5px;
  }
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

export const CommentGrid = styled.ol`
  border-width: 0.01em;
  border-style: solid;
  border-color: #a1a1a1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: left;
  list-style-type: none;
  padding: 0;
  li {
    padding: 10px 10px;
    font-weight: 600;
    text-align: left;
    text-transform: none;
    border-bottom: 0.01em solid #a1a1a1;
  }
`;

export const Comments = styled.div`
  font-size: 16px;
  font-weight: 200;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-transform: uppercase;
  color: #7e7e7e;
`;

export const ButtonGroup = styled.div`
  text-align: right;
`;

export const EditPost = styled.button`
  /* Adapt the colors based on primary prop */
  background: #1c262f;
  color: #fff;

  font-size: 1em;
  margin-left: 0.1em;
  padding: 5px 10px;
  border: 2px solid #1c262f;
  border-radius: 3px;
`;

export const RemovePost = styled.button`
  /* Adapt the colors based on primary prop */
  background: #f44336;
  color: #fff;

  font-size: 1em;
  margin-left: 0.1em;
  padding: 5px 10px;
  border: 2px solid #f44336;
  border-radius: 3px;
`;

export const EditComment = styled.button`
  /* Adapt the colors based on primary prop */
  background: #1c262f;
  color: #fff;

  font-size: 0.6em;
  margin-top: 0.3em;
  margin-right: 0.2em;
  padding: 5px 5px;
  border: 1px solid #1c262f;
  border-radius: 50px;
`;

export const RemoveComment = styled.button`
  /* Adapt the colors based on primary prop */
  background: #f44336;
  color: #fff;

  font-size: 0.6em;
  margin-left: 0.3em;
  padding: 5px 5px;
  border: 1px solid #f44336;
  border-radius: 50px;
`;
