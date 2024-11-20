const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // Asegúrate de que coincida con el nombre de la tabla
  timestamps: true,   // Para manejar `createdAt` y `updatedAt`
});

module.exports = User;
