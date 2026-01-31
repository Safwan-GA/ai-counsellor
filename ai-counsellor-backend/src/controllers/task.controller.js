import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, userId: req.user.id });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findOneAndUpdate(
    { _id: taskId, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(task);
};
