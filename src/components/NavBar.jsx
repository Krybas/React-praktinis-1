import { useState } from "react"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

  return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <a href="/" className="flex items-center py-4 px-2">
                            <span className="font-semibold text-gray-500 text-lg">Pirmas praktinis darbas</span>
                        </a>
                        <div className="hidden md:flex items-center space-x-1">
                            <a
                                href="/"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >Pirma užduotis</a>
                            <a
                                href="/antra"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >Antra užduotis</a>
                            <a
                                href="/trecia"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >Trečia užduotis</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar