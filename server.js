const getConnection = require('./db');
const express = require('express');
const app = express();
const serverPort = process.env.PORT || 5000;

app.get('/members', (req, res) => {
    getConnection((conn) => {
        conn.query('select * from member where MemberSeq', (err, rows) => {
            if (err) throw err;
            res.json(rows);
        });
    });
});

app.listen(serverPort, () => {
    console.log(`서버가 실행되었습니다. (포트번호 : ${serverPort})`);
});