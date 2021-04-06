require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const { connect } = require("mongoose");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);
    console.log("Data Import Success");
    process.exit();
  } catch {
    console.error("error with data import");
    process.exit(1)
  }
};

importData();
