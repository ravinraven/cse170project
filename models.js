
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
	"beachname":String,"name":String,"activity":[{"name":String, "count":Number}],"crowd":{"lastupdate":String, "status":String}
  // fields are defined here
});

exports.Project = Mongoose.model('Project', ProjectSchema);