import * as React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import './App.css';

import { store } from './frontend/common/Store/configureStore';
import Home from './frontend/web/containers/Home/HomeContainer';

const Header = styled.header`
  background-color: black;
  font-size: 2em;
  text-align: center;
  color: white;
`;

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header>Title</Header>
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
