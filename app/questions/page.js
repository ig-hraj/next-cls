// Create a next.js application in which user wants to start a counter , user should also have a permissoin to stop the counter
// and also creating the counter all of this should be done with the help of client component (Timer)
"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (start) {
            const timer = setInterval(() => {
                setCount((count) => count + 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [start]);

    const resetCounter = () => {
        setCount(0);
        setStart(false);
    };

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold mb-5">
                Counter: {count}
            </h1>

            <button
                onClick={() => setStart(true)}
                className="bg-green-500 text-white px-6 py-2 rounded-lg mr-3 hover:bg-green-600"
            >
                Start
            </button>

            <button
                onClick={() => setStart(false)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg mr-3 hover:bg-red-600"
            >
                Stop
            </button>

            <button
                onClick={resetCounter}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
                Reset
            </button>
        </div>
    );
}