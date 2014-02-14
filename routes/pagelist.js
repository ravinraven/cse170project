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

exports.viewHome = function(req, res) { 
  var name = req.params.name; 
  res.render('Home');
  // controller code goes here 
};

exports.viewob = function(req, res) { 
  var name = req.params.name; 
  res.render('ob');
  // controller code goes here 
};
exports.viewmb = function(req, res) { 
  var name = req.params.name; 
  res.render('mb');
  // controller code goes here 
};
exports.viewcb = function(req, res) { 
  var name = req.params.name; 
  res.render('cb');
  // controller code goes here 
};
exports.viewljs = function(req, res) { 
  var name = req.params.name; 
  res.render('ljs');
  // controller code goes here 
};
exports.viewob = function(req, res) { 
  var name = req.params.name; 
  res.render('ob');
  // controller code goes here 
};
exports.viewsurf = function(req, res) { 
  var name = req.params.name; 
  var surf = require('../public/json/surf.json');
  res.render('surf', surf);
  // controller code goes here 
};