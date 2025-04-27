import express from 'express';
import Medication from '../models/Medication.model.js';
import authMiddleware from '../middlewares/authMiddleware.js'; // 👈 import this!

const MedicationRouter = express.Router();

// Create a Medication
MedicationRouter.post('/add', authMiddleware, async (req, res) => {
    const { medicineName, dosage, instructions, schedules, startDate, endDate } = req.body;
    try {
        const newMedication = await Medication.create({ 
            userId: req.user.id,  // 👈 from authMiddleware
            medicineName, 
            dosage, 
            instructions, 
            schedules, 
            startDate, 
            endDate 
        });
        res.status(201).json({ message: "Medication added successfully", medication: newMedication });
    } catch (error) {
        console.log("Error in Add Medication: ", error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Get All Medications of a User
MedicationRouter.get('/', authMiddleware, async (req, res) => {
    try {
        const medications = await Medication.find({ userId: req.user.id }); // 👈 get user's medications
        res.status(200).json(medications);
    } catch (error) {
        console.log("Error in Get Medications: ", error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
});

export default MedicationRouter;
