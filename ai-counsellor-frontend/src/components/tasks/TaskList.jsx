export default function TaskList({ tasks, onToggle }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="bg-white p-6 rounded shadow text-center text-gray-600">
        Your tasks are yet to be generated. Please retry after sometime 🙂
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex items-center justify-between p-4 bg-white rounded shadow"
        >
          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.title}
          </span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task._id)}
          />
        </div>
      ))}
    </div>
  );
}
