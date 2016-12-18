var React = require('react');
var ReactDOM = require('react-dom'),
    {Route,Router, IndexRoute,hashHistory} = require('react-router'),
    Main = require('Main'),
    Weather = require('Weather'),
    About = require('About'),
    Contact = require('Contact');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
