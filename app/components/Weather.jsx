var React = require('react'),
    WeatherForm = require('WeatherForm'),
        WeatherMessage = require('WeatherMessage'),
        openweathermap = require('openweathermap'),
    Weather = React.createClass({

      getInitialState:function(){
        return {
          location:'Vancouver',
          temp:10
        }
      },
      handleSearch:function(location){
        var that = this;
        openweathermap.getTemp(location).then(function(temp){
          debugger;
           console.log("weather ",temp);

          that.setState({
            location:location,
            temp:temp
          });
        },function(err){
          alert("Error ",err);
        })
      },
        render:function(){
          var {temp,location } = this.state;
          return(
            <div>
              <h1>Weather Component</h1>
              <WeatherForm onSearch={this.handleSearch}/>
              <WeatherMessage temp={temp} location={location}/>
            </div>

          );
        }
    });

    module.exports = Weather;
