import cron from 'node-cron';
import Medication from '../models/Medication.model.js';
import User from '../models/User.model.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.configDotenv()
// Create your mail transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Schedule a job every minute
const medicationReminderJob = cron.schedule('* * * * *', async () => {
    console.log("Checking medication schedules...");

    const currentTime = new Date();
    const currentHours = currentTime.getHours().toString().padStart(2, '0');
    const currentMinutes = currentTime.getMinutes().toString().padStart(2, '0');
    const nowTime = `${currentHours}:${currentMinutes}`; // example: "08:05"

    try {
        const medications = await Medication.find({});

        for (const med of medications) {
            if (med.schedules.includes(nowTime)) {
                const user = await User.findById(med.userId);

                if (user) {
                    await transporter.sendMail({
                        from: `"Medication Reminder" process.env.EMAIL_USER`,
                        to: user.email,
                        subject: "Time to take your medication!",
                        text: `Hi ${user.name}, it's time to take your medicine: ${med.medicineName} (${med.dosage}). Instructions: ${med.instructions || 'No specific instructions.'}`
                    });

                    console.log(`Email sent to ${user.email} for medicine: ${med.medicineName}`);
                }
            }
        }

    } catch (error) {
        console.log("Error in cron job: ", error.message);
    }
});

export default medicationReminderJob;
