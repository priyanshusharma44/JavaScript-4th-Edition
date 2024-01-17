exports.testFunction = async (req, res) => {
  var oddNumbers = [];
  var evenNumbers = [];
  for (let i = 1; i < 20; i++) {
    if (i % 2 === 0) {
      console.log("Even Number");
      evenNumbers.push(i);
    } else {
      console.log("Odd Number");
      oddNumbers.push(i);
    }
  }

  res.json({
    evenNumber: evenNumbers,
    oddNumber: oddNumbers,
  });
};
