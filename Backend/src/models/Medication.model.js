import mongoose from 'mongoose';

const medicationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    medicineName: { type: String, required: true },
    dosage: { type: String }, // Example: "500mg"
    instructions: { type: String }, // Example: "Take after meals"
    schedules: [{ type: String }], // Example: ["08:00", "14:00", "20:00"] - 24 hr format
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date } // Optional - when the course ends
}, { timestamps: true });

const Medication = mongoose.model('medications', medicationSchema);

export default Medication;
