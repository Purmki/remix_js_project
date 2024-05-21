import { redirect, useLoaderData } from "@remix-run/react";
import CreateAppointments from "../components/createAppointment";
import { getStoredAppointments, storeAppointments } from "../data/appointments";
import { MongoClient } from "mongodb"
import { findConflictingAppointments } from "../management/appointmentUtils";


export default function appointments() {
    return (
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 p-4">
            {/* Image on the left */}
            <img
              src="https://d6vhjw8wa28ve.cloudfront.net/wp-content/uploads/2022/01/dog-playing-in-backyard-020122.jpg"
              alt="Dog playing in backyard"
              className="w-full h-auto md:h-auto rounded-md shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <CreateAppointments />
          </div>
          {/* Image on the right (hidden on small screens) */}
          <div className="hidden md:block w-full md:w-1/2 p-4">
            <img
              src="https://www.dailypaws.com/thmb/Q0voLOjrlNmD6_gopxpv2HZgLIo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-games-fetch-301741957-2000-55f0272d106b40d3852635754f06a2e9.jpg"
              alt="Cat playing fetch"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      );

    
  }


  const MONGODB_URI = "mongodb://localhost:27017"; // MongoDB URI
  const MONGODB_DB_NAME = "remix_js_project"; // Database name
  const COLLECTION_NAME = "appointments"; // Collection name
  
  // Create a MongoDB client instance outside the action function
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
  export async function action({ request }) {
    const formData = await request.formData();
    const animalName = formData.get("animalName");
    const ownerName = formData.get("ownerName");
    const appointmentDate = new Date(formData.get("Date"));
    const reason = formData.get("reason");

    // Create an appointment object
    const appointment = {
        animalName,
        ownerName,
        appointmentDate,
        reason,
    };

    try {
        // Check for conflicting appointments
        const conflictExists = await findConflictingAppointments(appointmentDate);
        if (conflictExists) {
            return { error: "There is already an appointment scheduled to about that time" };
        }

        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const db = client.db(MONGODB_DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Insert the new appointment
        await collection.insertOne(appointment);

        // Redirect to the appointments page
        return redirect("/appointments");
    } catch (error) {
        console.error("Error inserting appointment:", error);
        throw error;
    } finally {
        // Close the MongoDB client connection
        await client.close();
    }
}
  
  