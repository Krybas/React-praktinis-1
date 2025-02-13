import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ToDoPage from "./pages/ToDoPage";
import GuessGamePage from "./pages/GuessGamePage";
import CartPage from "./pages/CartPage";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                        <Routes>
                            <Route path="/" element={<ToDoPage />} />
                            <Route path="/antra" element={<CartPage />} />
                            <Route path="/trecia" element={<GuessGamePage />} />
                        </Routes>
            </main>
        </>
    );
}
