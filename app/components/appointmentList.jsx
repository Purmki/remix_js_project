import { Form, Link } from "@remix-run/react";

function AppointmentList({ appointments, deleteAppointment }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Doctor's appointments</h1>
      <ul id="note-list" className="max-w-68rem flex flex-wrap justify-center gap-4 list-none mx-auto">
        {appointments.map((appointment, index) => {
          return (
            <div key={index} className="note bg-primary-700 shadow-md p-6 rounded-md transition duration-300 ease-out hover:bg-primary-600 transform hover:-translate-y-1">
               <Link to={`/appointment/${appointment._id}`}>
                <header className="note-meta">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full">
                      #{index + 1}
                    </div>
                    <time className="text-gray-500" dateTime={appointment.appointmentDate}>
                      {new Date(appointment.appointmentDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-primary-200">{appointment.animalName}</h2>
                </header>
                <p className="text-gray-700">Owner: {appointment.ownerName}</p>
                <p className="mt-2">{appointment.reason}</p>
              </Link>
              <Form method="delete">
                <input type="hidden" name="appointmentId" value={appointment._id} />
              <button type="submit" className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline">
                Delete
              </button>
              </Form>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default AppointmentList;
