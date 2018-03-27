import React, { Component } from 'react';
import logo from './logo.svg';
// import Title from './Title';
import Home from './home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* 42G */}
            <Route path='/' component={Home} />
            <Route path='/home' exact render={props => <Home {...props} /> } />
            {/* 42J, 42K im getting match to show but im not sure if this is working how it should.  please let me know if you need to see more before passing it off */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
