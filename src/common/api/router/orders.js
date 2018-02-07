const db = require('../db/db')

module.exports = {
    register: (app) => {
        // 查
        app.get('/orders', function(req, res){
           
            var page = (req.query.page || 1) * 1;
            var limit = (req.query.limit || 10) * 1;
            var sql = `
            select 
                SQL_CALC_FOUND_ROWS
                user.username, user.id ,user.address,orders.status,orders.date,user.phone 
            from 
                orders 
                INNER JOIN 
            user
            ON orders.userid=user.id
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`;
            
            db.select(sql, function(data){
                
                res.send(data);
            })   
        })
        // 删
        app.post('/ordersdel',function(req,res){
            var id = req.body.id;
            var sql =`
                delete from orders where id=${id}
            `;
            db.delete(sql,function(data){
                res.send(data);
            })

        })
        
        // Update 语句用于修改表中的数据。
        //语法：UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
        
    }
}