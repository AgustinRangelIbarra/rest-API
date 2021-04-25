const express = require("express");

const router = express.Router();

// Create Routes
router.get("/", (request, response) => {
	response.send("Useeeerr");
});



module.exports = router;