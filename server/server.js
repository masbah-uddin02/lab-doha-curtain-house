const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(port, () => {
      console.log(`server is running on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};


start();
