var React = require('react'),
    WeatherForm = React.createClass({
      onFormSubmit:function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        this.props.onSearch(location);
      },
        render:function(){
          return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                  <input type="text" ref="location"/>
                  <button>Get Weather</button>
                </form>
            </div>

          );
        }
    });
    module.exports = WeatherForm;
