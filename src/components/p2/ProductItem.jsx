export default function ProductItem({ product, addToCart }) {
    return (
        <div className="border rounded-lg shadow-md p-1 text-center">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2 mt-1 rounded" />
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.price.toFixed(2)} €</p>
            <button
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                onClick={() => addToCart(product)}
            >
                Pridėti
            </button>
        </div>
    );
}
