var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: 'root',
    password: '',
    database: 'flower',
    multipleStatements: true
})

module.exports = {
    select: function(_sql, _callback){
        db.query(_sql, function(error, results, fields){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    insert: function(_sql, _callback){
        db.query(_sql, function(error, results){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results}});
            }
            
        })        
    },
    delete: function(_sql, _callback){
        db.query(_sql, function(error, results){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results}});
            }
            
        })          
    },
    update: function(_sql, _callback){
        db.query(_sql, function(error, results){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results}});
            }
            
        })  
    }
}