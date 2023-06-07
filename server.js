// Importing the express module
const express = require("express");
const app = express();

// Importing the router module
const router = require("./routes/routes");

// Using the router middleware
app.use(router);

// Starting the server on port 3000
app.listen(3000);
