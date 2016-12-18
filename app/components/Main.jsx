var React = require('react'),
    Nav = require('Nav'),
Main = React.createClass({
  render:function(){
    console.log(this.props);

    var aa='f',
    tag = '<Nav/>',
    ftag = '<h1>login again</h1>',
    bb ="";
    if(aa==='f'){
      return(
        <div>

      <Nav/>

          <h2>Main Components</h2>
          {this.props.children}

    </div>
      );
    }else{
      return(
        <div>



          <h2>Main Components</h2>
          {this.props.children}

    </div>
      );
    }
    return(
      <div>

    <Nav/>

        <h2>Main Components</h2>
        {this.props.children}

  </div>
    );
  }
});

module.exports = Main;
