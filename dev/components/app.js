import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory} from 'react-router';
// import Home from './home';

export default class App extends React.Component {
  render () {
  	return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
  	);
  }
}