const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = require('../database')

class User extends Model {
  static init(connection){
    super.init({
      email: {
        type: DataTypes.STRING, allowNull: false, unique: true
      },
      password: {
        type: DataTypes.STRING, allowNull: false
      },
    }, {
      sequelize: connection,
      modelName: 'users'
    })
  }
}

module.exports = User;