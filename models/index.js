const Students = require("./student");
const IdentityCard = require("./identity");
const department = require("./department");
const courses = require("./courses");
const studenCourses = require("./studentCourses");

// one to one
Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);


// one to many
department.hasMany(Students);
Students.belongsTo(department);


// many to many
Students.belongsToMany(courses,{through:studenCourses});
courses.belongsToMany(Students,{through:studenCourses});

 

module.exports = {
    IdentityCard,
    Students,
    department,
    courses
}