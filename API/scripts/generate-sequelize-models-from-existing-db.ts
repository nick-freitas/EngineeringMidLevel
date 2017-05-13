const SequelizeAuto = require('sequelize-auto');

const username = process.env.RAFR_DB_USERNAME;
const password = process.env.RAFR_DB_PASSWORD;
const databaseName = process.env.RAFR_DB_NAME;
const host = process.env.RAFR_DB_HOST;

const sequelizeAuto = new SequelizeAuto(databaseName, username, password, {
    host: host,
    dialect: 'mysql'
});

sequelizeAuto.run(error => {
    if (error) {
        console.error(error);
        process.exit(-1);
    }

    const tableList = sequelizeAuto.tables;
    const fkList = sequelizeAuto.foreignKeys;

    console.log(tableList);
    console.log(fkList);
});
