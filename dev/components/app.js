import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Home from './home';

export default class App extends React.Component {
  render () {
  	return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stuff">Stuff</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
        
          <Home />
          }
        </div>
      </div>
  	);
  }
}