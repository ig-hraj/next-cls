// import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import "./globals.css";

export default function RootLayout({children})
{
  return(
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex gap-5">
            <Link href="/">Home</Link>

            <Link href="/students">Students</Link>
            <Link href="/courses">Courses</Link>
          </nav>
        </header>
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  )
}