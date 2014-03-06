
/*
 * GET home page.
 */
var headlines = require("../headline.json");
exports.view = function(req, res){
  res.render('index', headlines);
};