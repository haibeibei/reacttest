import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Index from './component/index/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Route path="/" component={Index}/>
        </Router>
      </div>
    );
  }
}

export default App;
