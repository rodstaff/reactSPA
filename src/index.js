import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory} from 'react-router';
import App from '../dev/components/app';
import Home from '../dev/components/home';
import Stuff from '../dev/components/stuff';
import Contact from '../dev/components/contact';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="stuff" component={Stuff} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);