// Include React
var React = require("react");
// Include Query.
var Form = require("./Form");
//Include Resu
var Results = require("./Results")
// Helper for making AJAX requests.
var helpers = require("./utils/helpers");
// Create the Search component.
var Search = React.createClass({
// Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return {
      searchterm: ""
    }
  },

  // If the component changes, i.e. if search query submitted
  componentDidUpdate : function() {
    console.log("When is our component updating???")
    // Run the article query for the search term
    // helpers.runQuery(this.state.searchWord).then(function(data) {
    //   this.setState({ results: data});
    // }.bind(this));
  },

  // Allows children (sub-components) to update parent component.
  setTerm: function(term) {
        helpers.runQuery(term).then(function(data) {
      this.setState({ results: data});
    }.bind(this));
  },

  render: function() {
    console.log("What is our result state ", this.state.results)
    return (
      <div className="col-md-12">
          <div className="row">
          <div className="col-sm-12">
            <Form term={this.setTerm} />
          </div>
        </div>
            <div className="row">
          <div className="col-sm-12">
            <Results results={this.state.results} />
          </div>
          </div>
      </div>
      );
    }
});

// Export the component back for use in other files
module.exports = Search;