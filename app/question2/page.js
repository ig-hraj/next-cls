// create a next.js app through which user can check the latest notices displayed by the university.
// Most of the times /notices page is static in nature, but when the new notice is uploaded page changes its content.

export default async function Notices() {
    const response = await fetch("https://dummyjson.com/posts", {
        next: { revalidate: 60 },
    });

    const data = await response.json();

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">
                University Notices
            </h1>

            {data.posts.map((notice) => (
                <div key={notice.id} className="border p-4 mb-4 rounded-lg shadow">
                    <h2 className="text-xl font-bold">
                        {notice.title}
                    </h2>
                    <p className="mt-2">
                        {notice.body}
                    </p>
                </div>
            ))}
        </div>
    );
}