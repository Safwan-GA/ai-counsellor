import Shortlist from '../models/Shortlist.js';
import Stage from '../models/Stage.js';
import Task from '../models/Task.js';
import { generateApplicationTasks } from '../utils/generateTasks.js';


export const shortlistUniversity = async (req, res) => {
const { universityId } = req.params;
const record = await Shortlist.create({
userId: req.user.id,
universityId,
status: 'shortlisted'
});
res.json(record);
};
export const lockUniversity = async (req, res) => {
const { universityId } = req.params;


const lockedCount = await Shortlist.countDocuments({ userId: req.user.id, status: 'locked' });


const record = await Shortlist.findOneAndUpdate(
{ userId: req.user.id, universityId },
{ status: 'locked' },
{ new: true }
);


// Update stage
await Stage.findOneAndUpdate(
{ userId: req.user.id },
{ currentStage: 'Preparing Applications' }
);

// Auto-generate tasks only if this is first lock
if (lockedCount === 0) {
const tasks = generateApplicationTasks(universityId).map(task => ({
...task,
userId: req.user.id,
dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
}));


await Task.insertMany(tasks);
}


res.json(record);
};