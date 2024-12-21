const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://akashakash86768:pCPiZddvO4V793NT@cluster0.8ywf2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB Atlas connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas:", err);
  } finally {
    await client.close();
  }
}

run();
