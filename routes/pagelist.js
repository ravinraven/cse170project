exports.viewlog = function(req, res) { 
  var name = req.params.name; 
  res.render('login');
  // controller code goes here 
};

exports.viewbeachlist = function(req, res) { 
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

exports.viewHome = function(req, res) { 
  var name = req.params.name; 
  res.render('Home');
  // controller code goes here 
};

exports.viewbeach = function(req, res) { 
  var name = req.params.name; 
  var beachname;
  if(name == "LaJolla")
    beachname = "La Jolla Shores";
  else if(name == "Oceanside")
    beachname = "Oceanside";
  else if(name == "PacificBeach")
    beachname = "Pacific Beach";
  else if(name == "Coronado")
    beachname = "Coronado";
  else if(name == "MissionBay")
    beachname = "Mission Bay";

  //create sture for data
  var jsondata = { "beachname": beachname,
                "stringname":name }
  res.render('beach', jsondata);
  // controller code goes here 
};
exports.viewsurf = function(req, res) { 
  var name = req.params.name; 
  var surf = require('../public/json/surf.json');
  res.render('surf', surf[name]);
  // controller code goes here 
};
exports.viewweather = function(req, res) { 
  var name = req.params.name;  //name of location
  var location = "http://api.openweathermap.org/data/2.5/weather?lat=32.8608&lon=-117.2569"; //la jolla 
  
  var jsondata = { "location":location, "beachname": name }
  res.render('weather', jsondata);
  // controller code goes here 
};
exports.viewcrowd = function(req, res) { 
  var name = req.params.name;  //name of location
  //var location = "http://api.openweathermap.org/data/2.5/weather?lat=32.8608&lon=-117.2569"; //la jolla 
  res.render('crowds');
  // controller code goes here 
};
exports.viewMap = function(req, res) { 
   var name = req.params.name; 
   var location;
   var jsondata = { "beachname": name }
   res.render('map', jsondata);
  // controller code goes here 
};
exports.viewActivity = function(req, res) { 
   var name = req.params.name; 
   var jsondata = {"image": mapimage }
   res.render('activity');
  // controller code goes here 
};
