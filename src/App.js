import React from "react";

import "./styles/global";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import { Wrapper, Container, Content } from "./styles/components";

const App = () => (
  <Wrapper>
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
  </Wrapper>
);

export default App;
