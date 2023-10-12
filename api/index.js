const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})