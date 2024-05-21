import { Link, useLoaderData, Form, redirect } from "@remix-run/react";
import { getStoredAppointments, updateAppointment } from "../data/appointments";

export default function EditAppointmentPage() {
  const appointment = useLoaderData();

  return (
    <main className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <header className="mb-6">
        <nav className="mb-4">
          <Link 
            to={`/appointment/${appointment._id}`} 
            className="text-blue-500 hover:underline"
          >
            Back to Appointments
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-800">Edit {appointment.animalName}'s' Appointment</h1>
      </header>
      <Form method="patch" className="space-y-6">
        <div className="p-4 bg-gray-100 rounded-md">
          <label className="block text-gray-700 font-bold mb-2">Animal Name</label>
          <input
            type="text"
            name="animalName"
            defaultValue={appointment.animalName}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            defaultValue={appointment.ownerName}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <label className="block text-gray-700 font-bold mb-2">Appointment Date</label>
          <input
            type="datetime-local"
            name="appointmentDate"
            defaultValue={new Date(appointment.appointmentDate).toISOString().slice(0, 16)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-md">
          <label className="block text-gray-700 font-bold mb-2">Reason</label>
          <textarea
            name="reason"
            defaultValue={appointment.reason}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </Form>
    </main>
  );
}

export async function loader({ params }) {
  const appointments = await getStoredAppointments();
  const appointmentId = params.appointmentId;
  const selectedAppointment = appointments.find(appointment => appointment._id.toString() === appointmentId);
  return selectedAppointment;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedAppointment = {
    animalName: formData.get("animalName"),
    ownerName: formData.get("ownerName"),
    appointmentDate: formData.get("appointmentDate"),
    reason: formData.get("reason"),
  };

  await updateAppointment(params.appointmentId, updatedAppointment);
  return redirect(`/appointment/${params.appointmentId}`);
}
