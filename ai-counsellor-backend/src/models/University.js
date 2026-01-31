import mongoose from 'mongoose';


const universitySchema = new mongoose.Schema({
name: String,
country: String,
program: String,
tuition: Number,
riskLevel: String,
acceptanceChance: Number,
});


export default mongoose.model('University', universitySchema);