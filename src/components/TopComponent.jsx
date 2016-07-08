var React = require('react');

var TopComponent = React.createClass({
     render : function() {

          var panelStyle = {
               paddingTop: 30,
               paddingLeft: 20,
               paddingBottom: 10,
               minHeight: 150,
               background: '#eee'

          }

          return (
               <div className="panel panel-default">
                    <div style={panelStyle} className="panel-title">
                         <h3>{this.props.mainItem}</h3>
                         <p>{this.props.description}</p>
                    </div>
               </div>
          )
     }

});

module.exports = TopComponent;
