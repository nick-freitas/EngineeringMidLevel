module.exports = {
  development: {
      username: process.env.RAFR_DB_USERNAME,
      password: process.env.RARF_DB_PASSWORD,
      database: process.env.RERF_DB_NAME,
      host: process.env.RAFR_DB_HOST,
      dialect: "mysql"
  }
};
