const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");

// Create a new router instance
const router = express.Router();

// Import the controller module
const controller = require(path.join(__dirname, "..", "controllers", "controller.js"));

// Enable Cross-Origin Resource Sharing
router.use(cors());

// Parse JSON bodies
router.use(bodyparser.json());

// Serve static files from the "public" directory
router.use(express.static(path.join(__dirname, "..", "public")));

// Define routes
router.post("/addorder", controller.addorder);
router.post("/addorderat2", controller.addorderat2);
router.post("/addorderat3", controller.addorderat3);

router.get("/getorderfrom1", controller.getorderfrom1);
router.get("/getorderfrom2", controller.getorderfrom2);
router.get("/getorderfrom3", controller.getorderfrom3);

router.delete("/deleteorderfromtable1/:id", controller.deleteorderfromtable1);
router.delete("/deleteorderfromtable2/:id", controller.deleteorderfromtable2);
router.delete("/deleteorderfromtable3/:id", controller.deleteorderfromtable3);

router.delete("/editorderfromtable1/:id", controller.editorderfromtable1);
router.delete("/editorderfromtable2/:id", controller.editorderfromtable2);
router.delete("/editorderfromtable3/:id", controller.editorderfromtable3);

router.get("/", controller.getmainfile);

// Export the router
module.exports = router;
