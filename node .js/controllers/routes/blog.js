const { createBlog, getBlogs, getBlogsById } = require("../blogController.js");

const router = require("express").Router();

router.post("/create", createBlog);
router.get("/get", getBlogs);
router.get("/get/:id", getBlogsById);
module.exports = router;
