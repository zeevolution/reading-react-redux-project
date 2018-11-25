import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";
import "./styles/global";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
    </Wrapper>
  </BrowserRouter>
);

export default App;
