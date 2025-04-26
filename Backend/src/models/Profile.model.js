import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        unique: true // One profile per user
    },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    allergies: [{ type: String }], // Array of allergy names
    conditions: [{ type: String }], // Array of conditions like "Diabetes"
    doctorName: { type: String },
    doctorContact: { type: String }
}, { timestamps: true });

const Profile = mongoose.model('profiles', profileSchema);

export default Profile;
