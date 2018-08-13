import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Rooms from './Rooms';
import NowPlaying from './NowPlaying';
import Queue from './Queue';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/rooms" component={Rooms} />
          <Route exact={true} path="/playing" component={NowPlaying} />
          <Route exact={true} path="/queue" component={Queue} />
          <NavigationBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
