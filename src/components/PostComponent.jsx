var React = require('react');

var PostComponent = React.createClass({
     render : function() {

          postStyle = {
               height: 280,
               verticalAlign: 'bottom',
               position: 'relative',
               marginBottom: 15
          }

          barStyle = {
               position: 'absolute',
               top: 210,
               left: 15,
               height: 70,
               width: '100%',
               paddingTop: 5,
               paddingBottom: 15,
               background: '#333',
               color: '#fff',
               textAlign: 'center'
          }

          if (this.props.postBackgroundColor) {
               postStyle.background = this.props.postBackgroundColor;
          }

          console.log(postStyle);

          return (
               <div style={postStyle}>
                    <div style={barStyle} className="row">
                         <div className="col-xs-4">
                              <h4>{this.props.views}</h4>
                              <p className="small">Shotviews</p>
                         </div>
                         <div className="col-xs-4">
                              <h4>{this.props.likes}</h4>
                              <p className="small">Likes</p>
                         </div>
                         <div className="col-xs-4">
                              <h4>{this.props.comments}</h4>
                              <p className="small">Comments</p>
                         </div>
                    </div>
               </div>
          )
     }

});

module.exports = PostComponent;
