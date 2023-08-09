const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'GlobalStat',
    { // 변수1 : 속성 목록
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      cc: { // 국가 코드
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      confirmed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      death: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      released: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tested: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      testing: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      negative: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { // 매개변수3: 추가 옵션 
      sequelize,
      tableName: 'GlobalStat',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          fields: [{name: 'id'}]
        },
        {
          name: 'ccWithDate',
          unique: true,
          fields: [{ name: 'cc'}, {name: 'date'}],
        },
      ],
      timestamps: false,
    }
  )
}