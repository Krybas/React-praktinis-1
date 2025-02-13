export default function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Jūsų krepšelis</h2>
            {cart.length === 0 ? (
                <p>Krepšelis tuščias.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.uniqueId} className="flex justify-between items-center border-b p-2">
                        <span>{item.title} - {item.price.toFixed(2)}€</span>
                        <button
                            className="bg-gray-200 hover:bg-red-300 hover:border-red-500 py-1 px-3 rounded border-2 border-gray-500 mt-3"
                            onClick={() => removeFromCart(item.uniqueId)}
                        >
                            ❌
                        </button>
                    </div>
                ))
            )}
            <div className="mt-4 border-t pt-2 text-right font-bold">
                Iš viso: {total.toFixed(2)}€
            </div>
        </div>
    );
}
