const express = require("express");
const path = require("path");
const { readFileSync } = require("fs");

const port = 8080;
const app = express();

const readGpsDataFromFile = function (req, res) {
	const contents = readFileSync(path.join(__dirname, "/data.txt"), "utf-8");
	res.json({ gpsData: contents });
};

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/gps_data", readGpsDataFromFile);

app.listen(port);

console.log("Server started at http://localhost:" + port);
