// Include React
var React = require("react");

var helpers = require("./utils/helpers");

// Create the Saved component
var Saved = React.createClass({
	// Set a generic set of states associated with Main Component
	getInitialState: function() {
		return {
	    	savedArticle: []
		}
	},

  deleteArticle(articleID, index) {
    console.log("please delte this article " + articleID);
    helpers.deleteArticle(articleID).then(() => {
      this.setState((prevState) => ({
        savedArticle: [...prevState.savedArticle.slice(0,index), ...prevState.savedArticle.slice(index+1)]
      }));
    });
  },
	componentDidMount: function() {
		helpers.getSaved().then(function(response) {
			console.log("Saved articles: " + response);

			if (response !== this.state.savedArticle) {
				console.log("New saved articles", response.data);
				this.setState({ savedArticle: response.data });
			}
		}.bind(this));
	},

  	render: function() {
  		return (
  			<div className="col-md-12">
  				<div className="row">
		  			<div className="col-sm-12">
		    			<div className="panel panel-primary">
		      				<div className="panel-heading">
		        				<h3 style={{display: 'flex', justifyContent: 'center'}} className="panel-title">Saved Articles</h3>
		      				</div>
		      				<div className="panel-body" id="saved-section">
		      					{this.state.savedArticle.map(function(article, i) {
		      						console.log(article);
		      						return (
		      							<p key={i}><a href={article.url} target="_blank">{article.title}</a><br />{article.date} <br />
		      							  <button className="btn btn-primary" data-article-id={article._id} onClick={self.handleClick}style={{marginLeft:"200", color: 'white',margin:10}}>Delete</button>
											</p>
		      						);
		      					})}
		      				</div>
		      			</div>
		      		</div>
		      	</div>
		    </div>
  		);
  	}
});

// Export the component back for use in other files
module.exports = Saved;