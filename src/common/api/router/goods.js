const db = require('../db/db')

module.exports = {
    register: (app) => {
        app.get('/goods', function(req, res){
            var page = (req.query.page || 1) * 1;
            var limit = (req.query.limit || 10) * 1;
            var sql = `
            select 
                SQL_CALC_FOUND_ROWS
                * 
            from 
                goods 
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`;
            db.select(sql, function(data){
                res.send(data);
            })
        })
    }
}