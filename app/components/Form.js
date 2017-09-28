var React = require("react");
var Form = React.createClass({

  getInitialState: function() {
    return {Searchterm: "",
            date:"",
            url:""
  };
  }, 
  // Response to user input
  handleChange: function(event) {
    //prevent the form from getting submitted
    event.preventDefault();

    this.setState({ Searchterm: event.target.value });
  },

  // When a user submits...
  handleSubmit: function(event) {
    // Prevent HTML from trying to submit form if user hits enter.
    event.preventDefault();
    // Set the parent to have the search term.
    this.props.term(this.state.Searchterm);
    this.setState({ Searchterm: ""});
  },

  render: function() {
    console.log('What are the props', this.props)
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                value={this.state.term}
                type="text"
                className="form-control"
                id="term"
                onChange={this.handleChange}
                required
              />
              <button className="btn btn-primary" type="submit">
                        Search
                     </button>
                  </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files.
module.exports = Form