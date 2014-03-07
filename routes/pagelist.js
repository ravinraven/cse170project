var beachstatus = require('../beachstatus.json');

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
    beachname = "Ocean Beach";
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
exports.viewMap = function(req, res) { 
   var name = req.params.name; 
   // var location;
   //var map = require('../public/json/map.json');
    var jsondata = { "beachname": name }
   res.render('map', jsondata);
  // controller code goes here 
};
exports.viewActivity = function(req, res) { 
   var name = req.params.name; 
   //var activity = require('../public/json/activity.json');
   var code = nametocode(name);
   res.render('activity', beachstatus[code]);
  // controller code goes here 
};

//testing json storage
exports.addActivity = function(req, res){
  var name = req.params.beach; 
  var activity = req.params.act; 
  var code = nametocode(name);
  //var activity = "Function call is fine";
  var arr = beachstatus[code]['activity'];
  for (var i = 0; i < arr.length; ++i) {
        if (arr[i]["name"] === activity) {
            arr[i]["count"]++;
            break;
        }
    }
  var code = nametocode(name);
  res.render('activity', beachstatus[code]);
}
exports.addActivity2 = function(req, res){
  var name = req.params.beach; 
  var activity = req.params.act; 
  var code = nametocode(name);
  //var activity = "Function call is fine";
  var arr = beachstatus[code]['activity'];
  for (var i = 0; i < arr.length; ++i) {
        if (arr[i]["name"] === activity) {
            arr[i]["count"]++;
            break;
        }
    }
  var code = nametocode(name);
  res.render('suggestact2', beachstatus[code]);
}
exports.suggestActivity = function(req, res){
  var name = req.params.name; 
  var code = nametocode(name);
  res.render('suggestact', beachstatus[code]);
}
exports.suggestActivity2 = function(req, res){
  var name = req.params.name; 
  var code = nametocode(name);
  res.render('suggestact2', beachstatus[code]);
}
exports.viewcrowd = function(req, res) { 
  var name = req.params.name;  //name of location
  //var location = "http://api.openweathermap.org/data/2.5/weather?lat=32.8608&lon=-117.2569"; //la jolla 
  //var crowd = require('../public/json/crowd.json');
  var code = nametocode(name);
  var data = beachstatus[code];
  data['ucrowd']=false;
  res.render('crowds',data);
  // controller code goes here 
};
exports.updateCrowd = function(req, res){
  var name = req.params.name; 
  var stat = req.params.status; 
  var newtime = getRealtime(); //"hhmmss"
  var code = nametocode(name);
  beachstatus[code]['crowd']['lastupdate'] = new Date();//newtime;
  beachstatus[code]['crowd']['status'] = stat;
  var data = beachstatus[code];
  data['ucrowd']=true;
  res.render('crowds',data);
}
exports.updateHottie = function(req, res){
  var name = req.params.name; 
  var stat = req.params.status; 
  var newtime = getRealtime(); //"hhmmss"
  var code = nametocode(name);
  beachstatus[code]['crowd']['hottie'] = stat;
  var data = beachstatus[code];
  data['ucrowd']=false;
  res.render('crowds',data);
}
function nametocode (name ){
  if(name == "LaJolla")
    return 0;
  else if(name == "Oceanside")
    return 1;
  else if(name == "PacificBeach")
    return 2;
  else if(name == "Coronado")
    return 3;
  else if(name == "MissionBay")
    return 4;
}
function getRealtime(){
  var date = new Date();
  var hours = date.getHours();
  var am = "AM";
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if(hours<10){ hours = "0"+hours;}else if (hours>12){hours = hours%12; am="PM";}
    if(minutes<10){minutes = "0"+minutes;}
  var formattedTime = hours + ':' + minutes + " " +am;
  return formattedTime;
}