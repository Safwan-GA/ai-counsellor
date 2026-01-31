export const aiChat = async (req, res) => {
const profile = await Profile.findOne({ userId: req.user.id });
if (!profile?.isComplete) {
return res.status(403).json({ message: 'Complete profile before using AI' });
}


const locked = await Shortlist.countDocuments({ userId: req.user.id, status: 'locked' });


const { message } = req.body;


// Dummy AI logic placeholder
let response = `AI received: ${message}`;
let actions = [];


if (message.toLowerCase().includes('application') && locked === 0) {
return res.status(403).json({ message: 'Lock at least one university to get application guidance' });
}


if (message.toLowerCase().includes('sop')) {
actions.push({ type: 'SUGGEST_TASK', title: 'Draft SOP' });
}


res.json({ reply: response, actions });
};