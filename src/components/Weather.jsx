var React = require('react');

var Weather = React.createClass({
     render : function() {

          var panelStyle = {
               paddingTop: 10,
               paddingBottom: 10,
               color: '#fff',
               background: '#DB8514',
               textAlign: 'center',
               minHeight: 150
          }

          return (
               <div className="panel panel-default">
                    <div style={panelStyle} className="panel-title">
                         <h2>{this.props.temp}°</h2>
                         <p className="small">{this.props.location}</p>
                    </div>
               </div>
          )
     }

});

module.exports = Weather;
