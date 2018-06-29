import * as React from "react";
import styled from "styled-components";
import "./App.css";

import { Home } from "./containers/Home/Home";

const Header = styled.header`
  background-color: black;
  font-size: 2em;
  text-align: center;
  color: white;
`;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header>NVENTIVE</Header>
        <Home />
      </div>
    );
  }
}

export default App;
