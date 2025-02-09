import GuessGame from "../components/p3/GuessGame";
import GuessForm from "../components/p3/GuessForm";
import Message from "../components/p3/Message";

const GuessGamePage = () => {
    const { addGuess, resetGame, feedback, guesses, gameOver } = GuessGame();

    return (
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold text-center mb-8">🎲 Atspėk skaičių</h1>
            <GuessForm addGuess={addGuess} gameOver={gameOver} />
            <Message feedback={feedback} />

            <div className="mt-4">
                <h2 className="text-lg font-semibold">Jūsų bandymai:</h2>
                <p className="text-gray-700">
                {guesses.length > 0 ? guesses.join(", ") : "Dar nėra bandymų"}
                </p>
            </div>


            <p className="mt-2 text-gray-600">Bandymų skaičius: {guesses.length}</p>

            {gameOver && (
                <button 
                    onClick={resetGame}
                    className="bg-red-300 hover:bg-red-400 text-white py-1 px-3 rounded border-2 border-red-500 mt-3"
                >
                    🔄 Pradėti iš naujo
                </button>
            )}
        </div>
    );
};

export default GuessGamePage;
