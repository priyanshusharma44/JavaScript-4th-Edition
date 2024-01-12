module.exports = {
  username: "root",
  host: "localhost",
  db: "okcrud", //database name
  password: "",
  dialect: "mysql", //type (oracal,muysql)
  pool: {
    //how many people can be connected
    max: 5,
    min: 0,
    idle: 10000,
    accurate: 30000,
  },
};
//we set configure of db ND EXPORTED
