const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Phil:Sp9IFET6c7ceIWQa@maiya.engxn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Access the ALLSET database and the Clients collection
    const db = client.db('ALLSET');
    const collection = db.collection('Clients');

    // Find all documents in the Clients collection and log them to the console
    const documents = await collection.find().toArray();
    console.log('Documents in the Clients collection:', documents);

  } catch (err) {
    console.log('Error:', err);
  } finally {
    // Close the MongoDB Atlas connection when finished
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  }
}

main()