const sequelize = require("../utils/db-connection");
const { DataTypes } = require("sequelize");

const IdentityCard = sequelize.define("IdentityCard", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  CardNo: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
});

module.exports = IdentityCard;