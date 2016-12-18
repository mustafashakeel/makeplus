var React = require('react'),
{Link,IndexLink} =require('react-router'),
  Nav = React.createClass({
    render:function(){
      return (
          <div>
            <h2>Nav Components</h2>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
              <Link to="/contact" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Contact</Link>
          </div>
      );
    }
  });
  module.exports = Nav;
