const express = require('express');
const app = express();
require('dotenv').config();
const serverPort = process.env.PORT || 5000;
const models = require('./database/models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test/users/select', (req, res) => {
  models.users
    .findOne({
      attributes: ['id', 'email', 'nickname'],
      where: { email: 'haha@haha.com' },
    })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/test/users/create', (req, res) => {
  models.users
    .create({
      email: req.body.email,
      nickname: req.body.nickname,
    })
    .then((_) => {
      res.status(200).send();
    });
});

app.listen(serverPort, () => {
  console.log(`서버가 실행되었습니다. (포트번호 : ${serverPort})`);
});
