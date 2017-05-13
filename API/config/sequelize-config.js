module.exports = {
  development: {
      username: process.env.RAFR_DB_USERNAME,
      password: process.env.RARF_DB_PASSWORD,
      database: "rafr",
      host: "localhost",
      dialect: "mysql"
  }
};
