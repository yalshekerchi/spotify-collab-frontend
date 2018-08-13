import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Landing} />
          <NavigationBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
