import { Link, useLoaderData } from "@remix-run/react";
import { getStoredAppointments } from "../data/appointments";

export default function AppointmentDetailsPage() {
  const appointment = useLoaderData();
  return (
    <main className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      <header className="mb-8">
        <nav className="mb-6">
          <Link 
            to="/EditAppointments" 
            className="text-gray-600 hover:text-gray-800 font-semibold"
          >
            &larr; Back to Appointments 
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-800">{appointment.animalName}</h1>
      </header>
      <div className="space-y-6">
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Owner:</h2>
          <p className="text-lg text-gray-600">{appointment.ownerName}</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Appointment Date:</h2>
          <p className="text-lg text-gray-600">
            {new Date(appointment.appointmentDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Reason:</h2>
          <p className="text-lg text-gray-600">{appointment.reason}</p>
        </div>
      </div>
      <footer className="mt-8">
      <Link
            to={`/edit/${appointment._id}`}
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Edit Appointment
          </Link>
      </footer>
    </main>
  );
}

  export async function loader({ params }) {
    const appointments = await getStoredAppointments();
    console.log("Appointments:", appointments);
    const appointmentId = params.appointmentId;
    console.log("Appointment ID:", appointmentId);
    const selectedAppointment = appointments.find(appointment => appointment._id.toString() === appointmentId);
    return selectedAppointment;
  }
  
