const mongoose = require("mongoose");
require('dotenv').config();

//DB connection
mongoose.connect(process.env.ConnectionString)
    .then(() => console.log("Connectect to MongoDB Atlas"))
    .catch((error) => console.error(error));

