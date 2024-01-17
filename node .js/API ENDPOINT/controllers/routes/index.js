const express = require("express");
const { testFunction } = require("./controllers/testController");
const app = express();

const db = require("./model/index.js");
db.sequelize.sync({ force: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createRoutes = require("./routes/blogs.js");
const authRoutes = require("./routes/authroute.js");

app.use("/api", createRoutes);
app.use("/auth", authRoutes);
let PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is started in ${PORT}`);
});
