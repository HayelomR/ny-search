
// Get the React File
var React = require("react");

// Get The Ajax Call
var helpers = require("./utils/helpers");

var Results = React.createClass({

	getInitialState: function() {
		return {title: "",
			date: "",
			url: ""};
	},

	handleSave: function(result, event) {
		console.log("Handle save fire!", result )
		event.preventDefault();
		this.setState({ saveThisArticle: result});
		helpers.saveArticle(result).then(function(data) {
			console.log("New article saved: " + data);
		}).catch((err) => {
			console.log("Hayelom there is an error please check", err)
		})
	},

	// Here we render the function
	render: function() {
		if (this.props.results) {
			return (
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 style={{display: 'flex', justifyContent: 'center'}} className="panel-title">Results</h3>
					</div>
					<div className="panel-body">
						<ul>
							{this.props.results.map((result,i) => {

								return (
									<li key={i}>
									 <div className="show-artile" key={i}><a href={result.web_url} target="_blank">{result.headline.main}</a><br />{result.pub_date}
									 </div>
									<button onClick={(e) => this.handleSave(result, e)} style={{ display: 'flex', justifyContent: 'center',color: 'blue',margin:"10"}}>Save</button>
									</li>

									)
							})}

						</ul>
					</div>
				</div>
			);
		} else {
			return (
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h2 style={{display: 'flex', justifyContent: 'center'}}className="panel-title">Results</h2>
					</div>
					<div className="panel-body">

					</div>
				</div>
			);
		}
	}
});

// Export ==== Export ==== Export
module.exports = Results;
