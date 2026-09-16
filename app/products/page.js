export default async function Product()
{
    const response = await fetch(
        "https://dummyjson.com/products/1"
    );

    const product = await response.json()
    return(
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold mb-6">Products</h1>
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="mt-4 text-gray-500">{product.id}</p>
            </div>
        </main>
    )
}   