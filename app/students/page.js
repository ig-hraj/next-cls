import Link from "next/link";

const students = [
  { name: "Harsh Raj", course: "B.Tech CSE", year: "3rd Year" },
  { name: "Sameer Yadav", course: "BCA", year: "3rd Year" },
  { name: "Lalita", course: "B.Tech CSE", year: "3rd Year" },
  { name: "Ujjawal", course: "BBA", year: "1st Year" },
];

export default function StudentsPage() {
  return (
    <section className="max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Students</h1>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Course</th>
              <th className="px-4 py-3 font-semibold">Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {students.map((student) => (
              <tr className="hover:bg-pink-50">
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3">{student.course}</td>
                <td className="px-4 py-3">{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
