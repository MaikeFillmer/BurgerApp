// ================================================================================
// ROUTER
// ================================================================================

var path = require('path');
var orm = require('../config/orm.js');


module.exports = function(app){

    app.post('/add', function(req,res) {
        if(req.body.burgerName){
            orm.addBurger(req.body.burgerName, function(){
                res.redirect('/');
        
            })
        }else{
            res.redirect('/');
        }
    });

    app.put('/devour', function(req,res){
        orm.devourBurger(req.body.burgerid, function(){
            res.redirect('/');
        })
    });

    
}



