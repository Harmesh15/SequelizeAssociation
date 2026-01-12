const Students = require("./student");
const IdentityCard = require("./identity");
const department = require("./department");

// one to one
Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);


// one to many

department.hasMany(Students);
Students.belongsTo(department);

module.exports = {
    IdentityCard,
    Students
}