const pg = require('pg');

var config = {
    user:'wwd',
    database:'postgres',
    password:'WWDldg@123',
    host:'127.0.0.1',
    port:'15432'
};
console.log(pg.native);
var pool = new pg.Pool(config);

sqlrunning = {
    "result" : ""
};
let Runsql = function(sql) 
{
    pool.query(sql,(err,result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        sqlrunning.result = result;
    });
    return sqlrunning.result;
}

module.exports = {
    Runsql:Runsql,
    dbpool:pool
};
