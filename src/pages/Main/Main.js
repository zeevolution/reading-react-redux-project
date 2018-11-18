import React from "react";

import {
  Container,
  Title,
  Posts,
  PostGrid,
  Post,
  PostCategory,
  PostTitle,
  PostAuthors,
  PostDetails,
  PostDate,
  PostComments,
  PostVote
} from "./MainStyles";

const Main = () => (
  <Container>
    <Title> List of Posts by VoteScore: </Title>
    <Posts>
      <PostGrid>
        <li>
          <Post href="">
            <PostCategory>Category</PostCategory>
            <PostTitle>
              <h2>The 2018 Web Developer Roadmap</h2>
            </PostTitle>
            <PostAuthors>by Author</PostAuthors>
          </Post>
          <PostDetails>
            <PostDate> 5 Nov </PostDate>
            <PostComments>50 comments</PostComments>
            <PostVote>Votos</PostVote>
          </PostDetails>
        </li>
        <li>
          <Post href="">
            <PostCategory>Category</PostCategory>
            <PostTitle>
              <h2>How To Learn Data Science If You’re Broke</h2>
            </PostTitle>
            <PostAuthors>by Author</PostAuthors>
          </Post>
          <PostDetails>
            <PostDate> 5 Nov </PostDate>
            <PostComments>50 comments</PostComments>
            <PostVote>Votos</PostVote>
          </PostDetails>
        </li>
      </PostGrid>
    </Posts>
  </Container>
);

export default Main;
