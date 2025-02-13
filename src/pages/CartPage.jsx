import {useState} from "react";
import ProductList from "../components/p2/ProductList";
import Cart from "../components/p2/Cart";

const products = [
    { id: 1, title: "iPhone 15", price: 819.99, image: "/src/assets/iPhone15.webp" },
    { id: 2, title: "Samsung Galaxy 24", price: 688.79, image: "/src/assets/SamsungS24.webp" },
    { id: 3, title: "Google pixel 9", price: 790.65, image: "/src/assets/GoogleP9.webp"},
    { id: 4, title: "Xiaomi Mi 14", price: 746.60, image: "/src/assets/Xiaomi14.webp" },
    { id: 5, title: "OnePlus 13", price: 1038, image: "/src/assets/OnePlus13.webp"},
    { id: 6, title: "Sony Xperia 1 VI", price: 1422.35, image: "/src/assets/SonyXperia1VI.webp"},
]

export default function CartPage() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newItem = { ...product, uniqueId: Date.now() };
        setCart([...cart, newItem]);
    };
  
    const removeFromCart = (uniqueId) => {
        setCart(cart.filter((item) => item.uniqueId !== uniqueId));
    };

    return (
        <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white p-4 rounded-lg shadow-lg">
                <div className="flex pt-1 px-4 max-w-5xl mx-auto">
                    <div className="w-2/3 pr-4">
                        <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-gray-400 pb-3"> 🛒 Pirkinių krepšelis</h1>
                        <ProductList products={products} addToCart={addToCart} />
                    </div>
                    <div className="w-1/3 pl-4">
                        <Cart cart={cart} removeFromCart={removeFromCart} />
                    </div>
                </div>
            </div>
        </main>
      );
}