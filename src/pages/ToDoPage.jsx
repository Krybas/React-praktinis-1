import { useState } from "react";
import TaskForm from "../components/p1/TaskForm";
import TaskList from "../components/p1/TaskList";

const ToDoPage = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        if (!text.trim()) return;
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
                <div className="max-w-lg mx-auto text-center px-6 py-8">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-gray-400 pb-3">📝 Užduočių sąrašas</h1>
                        <TaskForm addTask={addTask} />
                        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ToDoPage;
