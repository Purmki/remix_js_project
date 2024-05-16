

function AppointmentList({ appointments}) {

  return (
    <ul id="appointment-list" className="space-y-4">
      {appointments.map((appointment, index) => (
          <article>
            <header className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full">
                  #{index + 1}
                </div>
                <time dateTime={appointment.appointmentDate} className="text-gray-500">
                  {new Date(appointment.appointmentDate).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </time>
              </div>
              <h2 className="text-xl font-bold">{appointment.animalName}</h2>
            </header>
            <p className="text-gray-700">Owner: {appointment.ownerName}</p>
            <p className="mt-2">{appointment.reason}</p>

          </article>
      ))}
    </ul>
  );
}

export default AppointmentList;
