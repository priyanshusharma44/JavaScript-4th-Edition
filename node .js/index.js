// index.js

const express = require("express");
const app = express();
const db = require("./modules/index");
const blogController = require("./controllers/blogController");
const { create } = require("hbs");

// Sync the Sequelize models with the database
db.sequelize.sync({ force: false });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createRoutes = require("./controllers/routes/blog.js");

// Use the blogController for the /blogs routes
app.use("/blogs", createRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server starting in ${PORT}`);
});
