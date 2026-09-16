//ISR
export const revalidate = 10
export default async function Notice()
{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    const notice = await response.json()
    return(
        <main className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold mb-6">College Notices</h1>
                <h2 className="text-xl font-semibold">{notice.title}</h2>
                <p className="mt-4 text-gray-500">{notice.body}</p>
            </div>
        </main>
    )
}   