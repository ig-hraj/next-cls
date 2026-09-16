"use client";

import { useState } from "react";

export default function Cart() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold mb-6">
                Shopping Cart
            </h1>

            <div className="border rounded-lg p-6 w-80 mx-auto">
                <h2 className="text-xl font-bold">
                    Laptop
                </h2>

                <p className="mt-2 mb-4">
                    Price: ₹50,000
                </p>

                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={decreaseQuantity}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                        -
                    </button>

                    <span className="text-xl font-bold">
                        {quantity}
                    </span>

                    <button
                        onClick={increaseQuantity}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}