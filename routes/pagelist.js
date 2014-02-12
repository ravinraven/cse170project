exports.viewlog = function(req, res) { 
  var name = req.params.name; 
  res.render('login');
  // controller code goes here 
};

exports.viewbeach = function(req, res) { 
  var name = req.params.name; 
  res.render('beachlist');
  // controller code goes here 
};

exports.viewdummy = function(req, res) { 
	console.log("ajax called dummy");
  var name = req.params.name; 
  res.render('dummy');
  // controller code goes here 
};

exports.viewpb = function(req, res) { 
  var name = req.params.name; 
  res.render('pb');
  // controller code goes here 
};


exports.viewob = function(req, res) { 
  var name = req.params.name; 
  res.render('ob');
  // controller code goes here 
};