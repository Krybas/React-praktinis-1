import GuessGame from "../components/p3/GuessGame";
import GuessForm from "../components/p3/GuessForm";
import Message from "../components/p3/Message";

const GuessGamePage = () => {
    const { addGuess, resetGame, feedback, guesses, gameOver } = GuessGame();

    return (
        <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
                <div className="max-w-lg mx-auto text-center px-6 py-8">
                    <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-gray-400 pb-3">🎲 Atspėk skaičių</h1>
                    <GuessForm addGuess={addGuess} gameOver={gameOver} />
                    <Message feedback={feedback} />

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
            </div>
        </main>
    );
};

export default GuessGamePage;
