import { Link, useActionData } from "@remix-run/react";


function CreateAppointments() {
    const actionData = useActionData();

    return (
        <div>
               <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
                  <h1 className="text-2xl font-bold mb-4">Make Appointment</h1>
                    {actionData?.error && (
                        <div className="text-red-500 mb-4">
                            {actionData.error}
                        </div>
                    )}
                    <form method="post" className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="animalName" className="text-sm font-semibold">Animal's Name:</label>
                            <input type="text" id="animalName" name="animalName" tabIndex={1} required className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="ownerName" className="text-sm font-semibold">Owner's Name:</label>
                            <input type="text" id="ownerName" name="ownerName" tabIndex={2} required className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="reason" className="text-sm font-semibold">Reason for Appointment:</label>
                            <textarea id="reason" name="reason" tabIndex={3} rows={4} required className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Date" className="text-sm font-semibold">Date:</label>
                            <input type="datetime-local" id="Date" name="Date" tabIndex={4} required className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        <button type="submit" tabIndex={5} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Schedule Appointment</button>
                    </form>
                    <Link to="/" className="block mt-4 text-blue-500 hover:underline">Go back to homepage</Link>
                </div>
  
        </div>
    );
}

export default CreateAppointments;
