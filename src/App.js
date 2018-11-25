import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";
import "./styles/global";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
