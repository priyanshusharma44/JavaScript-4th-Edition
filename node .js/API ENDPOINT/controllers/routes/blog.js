const {
  createBlog,
  getBlogs,
  getBlogsById,
  deleteBlogsById,
  updateBlog,
} = require("../blogController.js");

const router = require("express").Router();

router.post("/create", createBlog);
router.get("/get", getBlogs);
router.get("/get/:id", getBlogsById);
router.get("/delete/:id", deleteBlogsById);
router.post("/update/:id", updateBlog);

module.exports = router;
