const express = require('express');
require("dotenv").config();
const user = require("./endpoints/user");

const app = express();
const port = process.env.port || 9000;

//middleware
app.use(express.json());
app.use('/api', user);

//endpoint
app.get("/", (req, res) => {
   res.send("Welcome to my API") 
});


app.listen(port, () => console.log('server listening on port ', port));