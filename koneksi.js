const mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'noderest'
});
conn.connect(err => {
    if(err) throw err;
    console.log(`Mysql terkoneksi`);
});

module.exports = conn;