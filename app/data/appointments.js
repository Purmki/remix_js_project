import { MongoClient, ObjectId } from 'mongodb';

const MONGODB_URI = "mongodb://localhost:27017"; // MongoDB URI
const MONGODB_DB_NAME = "remix_js_project"; // Database name
const COLLECTION_NAME = "appointments"; // Collection name

async function connectToDatabase() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  return { client, db };
}

export async function getStoredAppointments() {
  const { client, db } = await connectToDatabase();
  const collection = db.collection(COLLECTION_NAME);
  try {
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
  const { client, db } = await connectToDatabase();
  const collection = db.collection(COLLECTION_NAME);
  try {
    await collection.insertMany(appointments);
    console.log('Appointments data stored successfully.');
  } catch (error) {
    console.error('Error storing appointments data:', error);
  } finally {
    await client.close();
  }
}

// export async function deleteAppointment(appointmentId) {
//   console.log("appointmentId", appointmentId);
//   const { client, db } = await connectToDatabase();
//   const collection = db.collection(COLLECTION_NAME);
//   try {
//     // Delete the appointment using the provided ObjectId
//     await collection.findOneAndDelete({ _id: ObjectId(appointmentId) });
//     console.log("appointmentId:", appointmentId)
//     console.log("Appointment deleted successfully.");
//   } catch (error) {
//     console.error("Error deleting appointment:", error);
//     throw error;
//   } finally {
//     await client.close();
//   }
// }


export async function deleteAppointment(appointmentId) {
  console.log("appointmentId",appointmentId)
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("2")
  try {
    await client.connect();
    console.log("3")
    const db = client.db(MONGODB_DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    console.log("4")
    await collection.findOneAndDelete({ _id: new ObjectId(appointmentId)});
    console.log("5")
    console.log("Appointment deleted successfully.");
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  } finally {
    await client.close();
  }
}


export async function updateAppointment(id, updatedAppointment) {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  const collection = db.collection(COLLECTION_NAME);
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedAppointment });
  await client.close();
}
