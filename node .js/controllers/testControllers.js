exports.testFunction = async (req, res) => {
  var evenNumbers = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      console.log("i am here");
      evenNumbers.push(i);
    }
  }
  res.json({
    data: evenNumbers,
  });
};
