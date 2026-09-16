import Link from "next/link";

export default function Products() {
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold mb-6">
                Products
            </h1>

            <div className="border rounded-lg p-5 w-80 mx-auto">
                <h2 className="text-xl font-bold">
                    Laptop
                </h2>

                <p className="text-gray-600 mb-4">
                    Price: ₹50,000
                </p>

                <Link
                    href="/questions1/products/cart"
                    className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
                >
                    Go to Cart
                </Link>
            </div>
        </div>
    );
}