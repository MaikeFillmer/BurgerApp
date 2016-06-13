// ================================================================================
// ROUTER
// ================================================================================

var path = require('path');
var orm = require('../config/orm.js');


module.exports = function(app){
	
	app.get('/', function(req,res) {
	    orm.getAllBurgers(function(burger){
	        	res.render('index', {burger});
	    	})
    });

	app.use('/image',function(req, res){
		res.sendFile(path.join(__dirname + '/assets/images/burger.jpg'));
	});
}