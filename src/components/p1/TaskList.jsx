import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => (
    <div className="max-w-md mx-auto">
        <ul className="space-y-2">
        {tasks.length === 0 && <p>Nėra užduočių.</p>}
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
        </ul>
    </div>
);

export default TaskList;
