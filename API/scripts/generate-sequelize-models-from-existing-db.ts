const SequelizeAuto = require('sequelize-auto');

const username = process.env.RDS_USERNAME;
const password = process.env.RDS_PASSWORD;
const databaseName = process.env.RDS_DB_NAME;
const host = process.env.RDS_HOSTNAME;
const port = process.env.RDS_PORT;

const sequelizeAuto = new SequelizeAuto(databaseName, username, password, {
    host: host,
    port: port,
    dialect: 'mysql',
    additional: {
        timestamps: false
    }
});

sequelizeAuto.run(error => {
    if (error) {
        console.error(error);
        process.exit(-1);
    }

    const tableList = sequelizeAuto.tables;
    const fkList = sequelizeAuto.foreignKeys;

    // console.log(tableList);
    // console.log(fkList);
});
