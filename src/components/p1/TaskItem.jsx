
const TaskItem = ({ task, toggleTask, deleteTask }) => (
    <li className="flex items-center justify-between p-3 bg-white border border-gray-400 rounded-lg shadow mb-2">
        <span className={`flex-grow ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.text}
        </span>
        <div>
            <button 
                onClick={() => toggleTask(task.id)}
                className={`mr-3 border-2 ${task.completed ? 'border-blue-500 bg-blue-100 hover:bg-blue-300' : 'border-green-500 bg-green-100 hover:bg-green-300'} text-white py-1 px-3 rounded`}
            >{task.completed ? "🔄" : "✔"}</button>
            <button 
                onClick={() => deleteTask(task.id)}
                className="border-2 border-red-500 bg-red-100 hover:bg-red-300 text-white py-1 px-3 rounded"
            >❌</button>
        </div>
    </li>
);
  
export default TaskItem;
  