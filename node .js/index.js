// const express = require("express");
// const { testFunction } = require("./controllers/testControllers");
// const app = express();

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World from / route",
//   });
// });
// app.get("/about", testFunction);

// let PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server starting in ${PORT}`);
// });
// const s = require("./superhero");
// const superhero = require("./superhero");
// console.log(s);
// // const math = require("./math.js");
// // const { add, sub } = math;
// // console.log(add(2, 4));
// // console.log(sub(2, 4));

const dbConfig = require("./controllers/dbConfig/dbConfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.db,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      accurate: dbConfig.pool.accurate, // Corrected property name
      idle: dbConfig.pool.idle,
    },
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDatabase();
