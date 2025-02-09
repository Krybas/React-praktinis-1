import { useState } from "react";

const GuessForm = ({ addGuess, gameOver }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!gameOver) {
            addGuess(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Įrašykite spėjimą..."
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                disabled={gameOver}
            />
            <button 
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 text-white py-1 px-3 rounded border-2 border-sky-800 disabled:bg-gray-400 disabled:border-gray-600"
                disabled={gameOver}
            >Spėti skaičių</button>
        </form>
    );
};

export default GuessForm;
