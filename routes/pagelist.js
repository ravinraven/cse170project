exports.viewlog = function(req, res) { 
  var name = req.params.name; 
  console.log("This function from login should be called");
  res.render('login',{});
  // controller code goes here 
};

exports.viewbeach = function(req, res) { 
  var name = req.params.name; 
  console.log("This function from beachlist should be called");
  res.render('beachlist',{});
  // controller code goes here 
};

exports.viewdummy = function(req, res) { 
  var name = req.params.name; 
  res.render('dummy',{});
  // controller code goes here 
};