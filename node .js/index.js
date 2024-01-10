const express = require("express");
const { testFunction } = require("./controllers/testControllers");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World from / route",
  });
});
app.get("/about", testFunction);

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server starting in ${PORT}`);
});
