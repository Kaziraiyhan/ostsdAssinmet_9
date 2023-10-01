const mongoose = require("mongoose");

const mongoDBURI = "mongodb://localhost:27017/assinment_9";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

const createCollection = async (collectionName) => {
  try {
    await mongoose.connection.db.createCollection(collectionName);
    console.log(`Collection '${collectionName}' created successfully`);
  } catch (error) {
    console.error("Error creating collection:", error.message);
  }
};

const removeCollection = async (collectionName) => {
  try {
    await mongoose.connection.db.dropCollection(collectionName);
    console.log(`Collection '${collectionName}' removed successfully`);
  } catch (error) {
    console.error("Error removing collection:", error.message);
  }
};

const insertDocument = async (collectionName, document) => {
  try {
    const Collection = mongoose.model(collectionName);
    const newDocument = new Collection(document);
    await newDocument.save();
    console.log("Document inserted successfully");
  } catch (error) {
    console.error("Error inserting document:", error.message);
  }
};

const deleteDocument = async (collectionName, documentId) => {
  try {
    const Collection = mongoose.model(collectionName);
    await Collection.findByIdAndDelete(documentId);
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document:", error.message);
  }
};

module.exports = {
  connectToDatabase,
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocument,
};
