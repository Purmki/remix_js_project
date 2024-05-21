import { json } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import AppointmentList from "../components/appointmentList";
import { deleteAppointment, getStoredAppointments } from "../data/appointments"

export default function EditAppointments() {
    const appointments = useLoaderData(); // Load appointments using useLoaderData hook
    
    return (
        <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} /> // Render AppointmentList component with appointments data
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    await deleteAppointment(formData.get("appointmentId"));
    return redirect(`/editAppointments`);
  }

export async function loader() {
    const appointments = await getStoredAppointments(); // Load appointments data from storage
    // console.log("the appointments data is:", appointments)
    return json(appointments); // Return the appointments data to be used by the component
}
