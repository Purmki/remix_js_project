import { redirect, useLoaderData } from "@remix-run/react";
import CreateAppointments from "../components/createAppointment";
import { getStoredAppointments, storeAppointments } from "../data/appointments";
import { MongoClient } from "mongodb"


export default function appointments() {
    return (
        <div>
            <CreateAppointments />
      </div>
    );

    
  }


const MONGODB_URI = "mongodb://localhost:27017"; // MongoDB URI
const MONGODB_DB_NAME = "remix_js_project"; // Database name
const COLLECTION_NAME = "appointments"; // Collection name

export async function action({ request }) {
    const formData = await request.formData();
    const animalName = formData.get("animalName");
    const ownerName = formData.get("ownerName");
    const appointmentDate = formData.get("Date");
    const reason = formData.get("reason");

    // Create an appointment object
    const appointment = {
        animalName,
        ownerName,
        appointmentDate,
        reason,
    };

    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();

        const db = client.db(MONGODB_DB_NAME);
        const collection = db.collection(COLLECTION_NAME);
        await collection.insertOne(appointment);
        return redirect("/appointments");
    } catch (error) {
        console.error("Error inserting appointment:", error);
        throw error;
    } finally {
        await client.close();
    }
}

  
  