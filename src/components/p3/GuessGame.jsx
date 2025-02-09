import { useState, useEffect } from "react";

const GuessGame = () => {
    const [targetNumber, setTargetNumber] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        resetGame();
    }, []);

    const addGuess = (text) => {
        console.log(targetNumber);
        if (!text.trim() || gameOver) return;
        const guess = parseInt(text, 10);
        if (isNaN(guess)) {
            setFeedback("⛔ Įveskite skaičių!");
            return;
        }

        setGuesses([...guesses, guess]);

        if (guess < targetNumber) {
            setFeedback("☝️ Bandyk didesnį skaičių!");
        } else if (guess > targetNumber) {
            setFeedback("👇 Bandyk mažesnį skaičių!");
        } else {
            setFeedback(`🎉 Teisingai! Skaičius buvo: ${targetNumber}`);
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
        setGuesses([]);
        setFeedback("");
        setGameOver(false);
    };

    return { addGuess, resetGame, feedback, guesses, gameOver };
};

export default GuessGame;
