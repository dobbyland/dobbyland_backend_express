require('dotenv').config();
const mysql = require('mysql');

let pool = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 30
});

pool.getConnection( (err, connection) => {
    connection.release();
    if (err) throw err;
    console.log(`DB(mysql) 연결이 성공했습니다. (DB포트번호 : ${process.env.DB_PORT}, 데이터베이스 : ${process.env.DB_DATABASE})`);
});

const getConnection = (callback) => {
    pool.getConnection( (err, conn) => {
        conn.release();
        if (err) throw err;
        callback(conn);
    });
}

module.exports = getConnection;