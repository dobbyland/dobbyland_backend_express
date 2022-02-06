const express = require('express');
const app = express();
const serverPort = process.env.PORT || 5000;
const models = require('./database/models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/test', (req, res) => {
  console.log(req.body);
  res.send('테스트');
});

app.post('/users/create', (req, res) => {
  models.Users.create({
    email: req.body.email,
  }).then((_) => {
    res.status(200).send();
  });
});

app.listen(serverPort, () => {
  console.log(`서버가 실행되었습니다. (포트번호 : ${serverPort})`);
});
