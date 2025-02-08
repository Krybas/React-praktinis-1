import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ToDoPage from "./pages/ToDoPage";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <Routes>
                            <Route path="/" element={<ToDoPage />} />
                            <Route path="/antra" element={<h1 className="text-3xl font-bold text-center mb-8">Antra užduotis</h1>} />
                            <Route path="/trecia" element={<h1 className="text-3xl font-bold text-center mb-8">Trečia užduotis</h1>} />
                        </Routes>
                    </div>
                </div>
            </main>
        </>
    );
}
