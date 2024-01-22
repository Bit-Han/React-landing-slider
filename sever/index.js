const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();


const port = process.env.PORT;
app.use(cors())
// Connection URL and database name
const url = process.env.MONGODB_URI;
const dbName = "investment-data"; // Replace with your actual database name

const collectionName = "Risk-level-data"; // collection name

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/risk-data", async (req, res) => {
	const client = await MongoClient.connect(url);
	try {
		// Specify the database
		const db = client.db(dbName);

		// Specify the collection
		const collection = db.collection(collectionName);

		// Find all documents in the collection
		const result = await collection.find({}).toArray();

		// Send the result as JSON
		res.json(result);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	} finally {
		// Close the connection
		client.close();
	}
});

app.listen(port, async () => {
	console.log(`Server is running at http://localhost:${port}`);
});
