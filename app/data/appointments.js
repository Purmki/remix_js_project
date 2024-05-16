import { MongoClient } from "mongodb";

const MONGODB_URI = "mongodb://localhost:27017"; // MongoDB URI
const MONGODB_DB_NAME = "remix_js_project"; // Database name
const COLLECTION_NAME = "appointments"; // Collection name

export async function getStoredAppointments() {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(remix_js_project);
    const collection = db.collection(appointments);
    const appointments = await collection.find({}).toArray();
    return appointments;
  } catch (error) {
    console.error('Error reading appointments data:', error);
    return [];
  } finally {
    await client.close();
  }
}

export async function storeAppointments(appointments) {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(remix_js_project);
    const collection = db.collection(appointments);
    await collection.insertMany(appointments);
    console.log('Appointments data stored successfully.');
  } catch (error) {
    console.error('Error storing appointments data:', error);
  } finally {
    await client.close();
  }
}


export async function deleteAppointment(appointmentId) {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(MONGODB_DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Delete the appointment from MongoDB using _id directly
    await collection.deleteOne({ _id: appointmentId });

    console.log("Appointment deleted successfully.");
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  } finally {
    await client.close();
  }
}