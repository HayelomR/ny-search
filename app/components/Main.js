// Get React
var React = require("react");
// Get Search file
var Search = require("./Search");
// Get Save file
var Saved = require("./Saved");
//Get Saved file
// main compenet where we render our file
var Main = React.createClass({
  // Describe Main Component's render method
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>New York Times Article Finder</h1>
          <p>Search The Article from the failing New ork Times Below.</p>
        </div>

        <div className="row">
          <Search />
        </div>

        <div className="row">
          <Saved />
        </div>
      </div>
    );
  }
});

module.exports = Main;