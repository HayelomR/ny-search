var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NewYorkTimesSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },url:{
  	url:String
  }
});

var Times = mongoose.model("Times", NewYorkTimesSchema);
module.exports = Times;
