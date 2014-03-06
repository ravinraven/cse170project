/**
 * Module dependencies.
 */


var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
//var mongoose = require('mongoose');

var index = require('./routes/index');
var project = require('./routes/project');
var pagelist = require('./routes/pagelist'); //every page should go to pagelist
// Example route
// var user = require('./routes/user');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
//var local_database_name = 'beachbumData';
//var local_database_uri  = 'mongodb://localhost/' + local_database_name
//var database_uri = process.env.MONGOLAB_URI || local_database_uri
//mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('BEACH BUM TEMP KEY'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/project/:name', project.viewProject);
app.get('/login', pagelist.viewlog);
app.get('/beachlist', pagelist.viewbeachlist);
app.get('/dummy', pagelist.viewdummy);
app.get('/Home', pagelist.viewHome);
app.get('/beach/:name', pagelist.viewbeach);
app.get('/surf/:name', pagelist.viewsurf);
app.get('/crowds/:name', pagelist.viewcrowd);
app.get('/weather/:name', pagelist.viewweather);
app.get('/map/:name', pagelist.viewMap);
app.get('/activity/:name', pagelist.viewActivity);
app.get('/addactivity/:beach/:act', pagelist.addActivity);
app.get('/addactivity2/:beach/:act', pagelist.addActivity);
app.get('/suggestact/:name', pagelist.suggestActivity);
app.get('/suggestact2/:name', pagelist.suggestActivity2);
app.get('/updatedcrowd/:name/:status', pagelist.updateCrowd);
app.get('/updatedhottie/:name/:status', pagelist.updateHottie);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
