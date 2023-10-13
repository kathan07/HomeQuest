const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 3000;


dotenv.config();



main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
}



app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
