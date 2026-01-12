const sequelize = require("../utils/db-connection");
const { DataTypes } = require("sequelize");

const studenCourses = sequelize.define('studentCourses',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    }
})

module.exports = studenCourses;