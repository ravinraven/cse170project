
var Mongoose = require('mongoose');


var BeachSchema = new Mongoose.Schema({
	"beachname":String,
	"name":String,
	"activity":[{"name":String, 
					"count":Number}],
	"crowd":{"lastupdate":String, 
				"status":String, 
				"hottie":String
			}
  // fields are defined here
});

exports.Project = Mongoose.model('Project', BeachSchema);