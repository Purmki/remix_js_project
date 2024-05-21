import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb://localhost:27017';
const MONGODB_DB_NAME = 'remix_js_project';
const COLLECTION_NAME = 'appointments';

async function findConflictingAppointments(newAppointmentDate) {
    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const db = client.db(MONGODB_DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        const startTimeOfDay = new Date(newAppointmentDate);
        startTimeOfDay.setHours(0, 0, 0, 0);

        const endTimeOfDay = new Date(newAppointmentDate);
        endTimeOfDay.setHours(23, 59, 59, 999);

        const startTime = new Date(newAppointmentDate);
        startTime.setHours(newAppointmentDate.getHours() - 1, newAppointmentDate.getMinutes(), newAppointmentDate.getSeconds(), newAppointmentDate.getMilliseconds());

        const endTime = new Date(newAppointmentDate);
        endTime.setHours(newAppointmentDate.getHours() + 1, newAppointmentDate.getMinutes(), newAppointmentDate.getSeconds(), newAppointmentDate.getMilliseconds());

        const conflictingAppointments = await collection.find({
            appointmentDate: {
                $gte: new Date(Math.min(startTimeOfDay, startTime)),
                $lte: new Date(Math.max(endTimeOfDay, endTime))
            }
        }).toArray();

        return conflictingAppointments.length > 0;
    } catch (error) {
        console.error('Error finding conflicting appointments:', error);
        throw error;
    } finally {
        await client.close();
    }
}

export { findConflictingAppointments };
