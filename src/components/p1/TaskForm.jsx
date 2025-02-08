import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Įrašykite užduotį..."
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded border-2 border-green-800"
            >Pridėti užduotį</button>
        </form>
    );
};
export default TaskForm;
