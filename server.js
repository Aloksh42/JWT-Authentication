const express = require('express');
require('dotenv').config();


const app = express();

app.use(express.json());



app.listen(process.env.PORT, () => {
  console.log(`Server started at PORT: ${process.env.PORT}`)
})