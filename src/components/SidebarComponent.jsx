var React = require('react');

var SidebarComponent = React.createClass({
     render : function() {

          var panelStyle = {
               paddingTop: 10,
               paddingLeft: 20,
               paddingBottom: 10,
               color: '#fff'
          }
          var headingStyle = {
               marginTop: 5
          }

          if (this.props.headingColor) {
               panelStyle.background = this.props.headingColor;
          }
          return (
               <div className="panel panel-default">
                    <div style={panelStyle} className="panel-title">
                         <p className="small">{this.props.description}</p>
                         <h3 style={headingStyle}>{this.props.panelContent}</h3>
                    </div>
                    <div className="panel-body"></div>
               </div>
          )
     }

});

module.exports = SidebarComponent;
