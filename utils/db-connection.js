const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'association',
    'root',
    'harmesh15', {
    host: 'localhost',
    dialect: 'mysql'
}
);
    (async () => {
        try {
            await sequelize.authenticate()
            console.log("table created")
        } catch (error) {
            console.log(error)
        }
    })();


module.exports = sequelize;