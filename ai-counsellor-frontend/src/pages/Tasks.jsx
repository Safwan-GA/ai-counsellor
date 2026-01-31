import { useEffect, useState } from "react";
import axios from "../api/axios";
import TaskList from "../components/tasks/TaskList";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get("/tasks");
      setTasks(res.data.tasks);
    };
    fetchTasks();
  }, []);

  const toggleTask = async (id) => {
    await axios.patch(`/tasks/${id}/toggle`);
    setTasks((prev) =>
      prev.map((t) => (t._id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  );
}
