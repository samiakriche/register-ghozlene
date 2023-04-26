const mongoose = require("mongoose");

const { MONGO_URI } = "mongodb+srv://sami:sami@cluster0.xiudd.mongodb.net/?retryWrites=true&w=majority";

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect("mongodb+srv://sami:sami@cluster0.xiudd.mongodb.net/jwt?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};