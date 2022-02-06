module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        comment: '키',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        comment: '이메일',
        type: DataTypes.STRING(100),
        validate: {
          isEmail: true,
        },
        allowNull: false,
      },
      isEmailVerified: {
        comment: '이메일인증여부',
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      password: {
        comment: '비밀번호',
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      name: {
        comment: '이름',
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      nickname: {
        comment: '닉네임',
        allowNull: true,
        type: DataTypes.STRING(100),
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'Users',
      timestamps: true, // createAt, updateAt
      paranoid: true, // deleteAt
    },
  );

  return Users;
};
