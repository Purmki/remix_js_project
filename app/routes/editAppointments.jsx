import { useLoaderData } from "@remix-run/react";
import AppointmentList from "../components/appointmentList";
import { getStoredAppointments } from "../data/appointments";

export default function EditAppointments() {
    const appointments = useLoaderData(); // Load appointments using useLoaderData hook
    return (
        <AppointmentList appointments={appointments} /> // Render AppointmentList component with appointments data
    );
}

export async function loader() {
    const appointments = await getStoredAppointments(); // Load appointments data from storage
    return appointments; // Return the appointments data to be used by the component
}