import express from 'express';
import Profile from '../models/Profile.model.js';
import authMiddleware from '../middlewares/authMiddleware.js'; // add your auth middleware

const ProfileRouter = express.Router();

// Create or Update Profile (Protected)
ProfileRouter.post('/createOrUpdate', authMiddleware, async (req, res) => {
    const { age, gender, allergies, conditions, doctorName, doctorContact } = req.body;
    try {
        const existingProfile = await Profile.findOne({ userId: req.user.id });
        if (existingProfile) {
            // Update
            await Profile.updateOne({ userId: req.user.id }, { age, gender, allergies, conditions, doctorName, doctorContact });
            return res.status(200).json({ message: "Profile updated successfully" });
        } else {
            // Create
            await Profile.create({ userId: req.user.id, age, gender, allergies, conditions, doctorName, doctorContact });
            return res.status(201).json({ message: "Profile created successfully" });
        }
    } catch (error) {
        console.log("Error in Profile Create/Update: ", error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Get Profile of logged-in User (Protected)
ProfileRouter.get('/me', authMiddleware, async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.id });
        if (!profile) return res.status(404).json({ message: "Profile not found" });
        res.status(200).json(profile);
    } catch (error) {
        console.log("Error in Get Profile: ", error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
});

export default ProfileRouter;
