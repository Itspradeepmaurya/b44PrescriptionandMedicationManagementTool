import app from "./app.js";
import {configDotenv} from 'dotenv'

import connectDB from "./src/config/db.js";
import medicationReminderJob from './src/cron/medicationReminder.cron.js';

configDotenv()


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    connectDB();
});



medicationReminderJob.start();


