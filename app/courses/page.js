import Link from "next/link";

const courses = [
  { code: "CSE301", name: "Data Structures", instructor: "Dr. Rao", credits: 4 },
  { code: "CSE302", name: "Database Management", instructor: "Prof. Mehta", credits: 4 },
  { code: "CSE408", name: "Web Development", instructor: "Dr. Kapoor", credits: 3 },
  { code: "INT257", name: "Business Communication", instructor: "Prof. Iyer", credits: 2 },
];

export default function CoursesPage() {
  return (
    <section className="max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Courses</h1>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <article key={course.code} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">{course.code}</p>
            <h2 className="mt-1 text-xl font-bold text-slate-800">{course.name}</h2>
            <p className="mt-3 text-sm text-slate-600">Instructor: {course.instructor}</p>
            <p className="mt-1 text-sm text-slate-600">Credits: {course.credits}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
