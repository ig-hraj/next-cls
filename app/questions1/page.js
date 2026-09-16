// Create a nested routes of products user should be able to increase and decrease the value of product in the cart by using + and - buttons.
// The cart should have atleast 1 item previously

import Link from "next/link";

export default function Questions1() {
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold mb-5">
                Question 1
            </h1>

            <Link href="/questions1/products" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Go to Products
            </Link>
        </div>
    );
}