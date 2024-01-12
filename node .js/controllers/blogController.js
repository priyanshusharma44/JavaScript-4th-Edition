const { blogs } = require("../modules");

exports.createBlog = async (req, res) => {
  let data = {
    title: req.body.name,
    desc: req.body.desc,
  };
  let createBlog = await blogs.create(data);

  if (createBlog) {
    res.status(200).json({
      data: createBlog,
      message: "created sucessfully",
    });
  }
  console.log(createBlog);
};
exports.getBlogs = async (req, res) => {
  try {
    let result = await blogs.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getBlogsById = async (req, res) => {
  try {
    let result = await blogs.findByPk(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ success: false, message: "Blog not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.deleteBlogsById = async (req, res) => {
  try {
    let result = await blogs.destroy({
      where: {
        id: req.params.id, // Corrected typo in req.params
      },
    });

    if (result) {
      res.status(200).json({
        success: true,
        message: "Deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
