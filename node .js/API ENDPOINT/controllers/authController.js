const { auth } = require("../modules");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 8);
    const registerUser = new auth({ email, password: hashpassword });
    await registerUser.save();

    res.status(200).json({
      success: true,
      message: "register user sucessfully",
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      error: `${error}`,
      message: "error while creating",
    });
  }
};
