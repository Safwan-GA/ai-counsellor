export default function TodoList({ tasks }) {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="text-lg font-semibold mb-3">To-Do List</h3>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between">
            <span className={task.completed ? "line-through text-gray-400" : ""}>
              {task.title}
            </span>
            <span>{task.completed ? "✅" : "⬜"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
