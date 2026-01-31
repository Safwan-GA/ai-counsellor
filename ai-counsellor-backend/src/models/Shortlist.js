import mongoose from 'mongoose';


const shortlistSchema = new mongoose.Schema({
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
universityId: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
status: { type: String, enum: ['shortlisted', 'locked'], default: 'shortlisted' }
});


export default mongoose.model('Shortlist', shortlistSchema);