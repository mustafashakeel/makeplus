var React = require('react'),
    WeatherMessage = React.createClass({
        render:function(){

          var {temp,location} = this.props;

          console.log(" wm",this.props);
          return(
            <div>
              <span><h3>It is {temp} in {location}</h3></span>
            </div>
          );
        }
    });

    module.exports = WeatherMessage;
