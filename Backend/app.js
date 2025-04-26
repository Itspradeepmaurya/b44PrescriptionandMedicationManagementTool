import express from 'express'

import cookieParser from 'cookie-parser';

import UserRouter from './src/routes/userAuth.routes.js';
import ProfileRouter from './src/routes/Profile.route.js';
import MedicationRouter from './src/routes/Medication.route.js';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.get('/',(req,res)=>res.send("YEss"))

app.use('/api/auth',UserRouter);
app.use('/api/profile', ProfileRouter);
app.use('/api/medication', MedicationRouter);

export default app