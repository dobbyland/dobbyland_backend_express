const { sequelize } = require('./database/models');

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('시퀄라이즈: 데이터베이스 연결 및 테이블 작성 성공');
  })
  .catch((err) => {
    console.log(err);
  });
