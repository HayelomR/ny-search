
//axios package to make http requests.
var axios = require("axios");
var nytAPI = "e0dad0e40b0f4d5f989fcc7eb1de4b97";
//Helper functions for making API call to NYT
var helper = {
	// Runs query to nytimes
	runQuery: function(searchTerm) {
		console.log("Here is the search term " + searchTerm);
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + searchTerm;
		return axios.get(queryURL).then(function(response) {
			if (response.data.response.docs[0]) {
				return response.data.response.docs;
			} else {
				return "";
			}
		}).catch((err) => {
			console.log("Error fetching data", err)
		})
	},

	getSaved: function() {
		return axios.get("/api/saved");
	},

	saveArticle: function(article) {
		console.log("Saved the article", article)
		return axios.post("/api/saved", {
			title: article.headline.main
			 
		
		
		});
	}
};

// Expore helper.
module.exports = helper;