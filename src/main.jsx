var React = require('react');
var ReactDOM = require('react-dom');
var TopComponent = require('./components/TopComponent.jsx');
var Weather = require('./components/Weather.jsx');
var SidebarComponent = require('./components/SidebarComponent.jsx');
var PostComponent = require('./components/PostComponent.jsx');

ReactDOM.render(<TopComponent mainItem="20" description="New Followers This Month" />, document.getElementById('topComponent-1'));
ReactDOM.render(<TopComponent mainItem="$1250" description="Average Monthly Income" />, document.getElementById('topComponent-2'));
ReactDOM.render(<TopComponent mainItem="$13865" description="Yearly Income Goal" />, document.getElementById('topComponent-3'));
ReactDOM.render(<Weather temp="18" location="Paris"/>, document.getElementById('weather'));
ReactDOM.render(<SidebarComponent description="New Visitors" panelContent="1.5k" headingColor="#1164D1"/>, document.getElementById('sideBarComponent-1'));
ReactDOM.render(<SidebarComponent description="Bounce Rate" panelContent="50%" headingColor="#9835BD"/>, document.getElementById('sideBarComponent-2'));
ReactDOM.render(<SidebarComponent description="Searches" panelContent="28%" headingColor="#DE1439"/>, document.getElementById('sideBarComponent-3'));
ReactDOM.render(<SidebarComponent description="Traffic" panelContent="140.5 kb" headingColor="#6ABF67"/>, document.getElementById('sideBarComponent-4'));
ReactDOM.render(<PostComponent postBackgroundColor="#5788B3" views="15080" likes="12000" comments="5100"/>, document.getElementById('post-1'));
ReactDOM.render(<PostComponent postBackgroundColor="#B057B3" views="15080" likes="12000" comments="5100"/>, document.getElementById('post-2'));
