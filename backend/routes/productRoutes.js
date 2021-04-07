const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

//@desc GET all products from db
//@route GET/products
//@access Public
router.get("/", getAllProducts);

//@desc GET all products from db
//@route GET/products
//@access Public
router.get("/:id", getProductById);

module.exports = router;
