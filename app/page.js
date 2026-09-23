// import Link from "next/link";

// export default function Home()
// {
//   return(
//     <section className="max-w-3xl">
//       <h1 className="text-3xl font-bold text-red-800">Welcome to the Student Portal</h1>

//       <p className="mt-3 text-slate-600">
//         Manage Students and Courses
//       </p>

//       <div className="mt-6 flex gap-3">
//         <Link href="/students" className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">View Students</Link>
//         <Link href="/courses" className="rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700">View Courses</Link>
//       </div>
//     </section>
//   )
// }

// export default async function Home() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users",
//     {
//       cache: "no-store",
//     }
//   );

//   const students = await response.json();

//   return (
//     <main className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Student Profiles
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {students.map((student) => (
//           <div key={student.id}className="bg-white p-6 rounded-xl shadow-md">
//             <h2 className="text-xl font-bold">{student.name}</h2>
//             <p className="text-gray-600">{student.email}</p>
//             <p className="text-gray-600">{student.phone}</p>
//             <p className="text-gray-600">{student.address.city}</p>
//             <p className="text-gray-600">{student.company.name}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// export default async function Home()
// {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1",
//     {
//       cache: "no-store",
//     }
//   );

//   const student = await response.json();

//   return(
//     <main className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-centre mb-8">Student Profiles</h1>

//       <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
//         <h2 className="text-xl font-semibold">
//           <p>{student.name}</p>
//         </h2>
//         <p className="text-gray-600">{student.address.zipcode}</p>
//         <p className="text-gray-600">{student.company.name}</p>
//       </div>
//     </main>
//   )
// }

// "use client"

// import { useState } from "react"

// export default function Home()
// {
//   const [count, setCount] = useState(0)

//   return(
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Client-Side Rendering</h1>

//       <p className="text-xl mt-5">Count: {count}</p>

//       <button onClick={() => setCount(count + 1)} className="bg-blue-400 text-white px-5 mt-5 rounded-lg">Increase</button>
//       <button onClick={() => setCount(count - 1)} className="bg-blue-400 text-white px-5 m-5 rounded-lg">Decrease</button>
//     </div>
//   )
// }


// "use client"

// import { useEffect } from "react"

// export default function Home() {
//   useEffect(() => {
//     document.title = "My Website"
//   }, [])

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Hello World</h1>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from "react"

// export default function Home()
// {
//   const [count, setCount] = useState(0);

//   const handleDecrease = () => {
//     console.log("helooo decreased");
//     setCount(count - 1);
//   };

//   useEffect(() => {
//     console.log("Helloo....!!! Component is loaded");
//   },[])

//   return(
//     <div className="p-10">
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)} className="bg-blue-400 text-white px-5 mt-5 rounded-lg">Increase</button>
//       <button onClick={handleDecrease} className="bg-blue-400 text-white px-5 m-5 rounded-lg">Decrease</button>
//     </div>
//   )
// }


// "use client"

// import { useState } from "react"

// export default function Home()
// {
//   const [student, setStudent] = useState(null);

//   async function getStudent()
//   {
//     const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1"
//     );

//     const data = await response.json();

//     setStudent(data);
//   }

//   return(
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-4">Student Details</h1>

//       <button onClick={getStudent} className="bg-blue-400 text-white px-5 py-4 rounded-md">Click Here</button>

//       {student && (
//         <div className="mt-6 p-5 border rounded-lg">
//           <h2 className="text-2xl font-bold mb-3">{student.name}</h2>

//           <p>
//             <strong>Username:</strong> {student.username}
//           </p>

//           <p>
//             <strong>Email:</strong> {student.email}
//           </p>

//           <p>
//             <strong>Phone:</strong> {student.phone}
//           </p>

//           <p>
//             <strong>Website:</strong> {student.website}
//           </p>

//           <p>
//             <strong>City:</strong> {student.address.city}
//           </p>

//           <p>
//             <strong>Company:</strong> {student.company.name}
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }


//CSR form

// "use client"

// import { useState } from "react";

// export default function Home()
// {
//   const [name, SetName] = useState("");
//   const [color, SetColor] = useState("");

//   function handleSubmit(e)
//   {
//     e.preventDefault();
//     alert("Hello " + name)
//   }

//   return(
//     <div>
//       <h1>Student Form</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text" 
//         placeholder="Enter Your Name" 
//         value={name} 
//         onChange={(e) => SetName(e.target.value)}/>

//         <br /><br />

//         <select value={color} onChange={(e) => SetColor(e.target.value)}>
//           <option value="">Select Favourite Color</option>
//           <option value="Red">Red</option>
//           <option value="Green">Green</option>
//           <option value="Blue">Blue</option>
//         </select>

//         <p>Your Favourite Color: {color}</p>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }


//Registration form - Validation

// "use client"

// import { useState } from "react"

// export default function Home(){
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   function handleSubmit(e)
//   {
//     e.preventDefault();

//     setError("");
//     setSuccess("");

//     //1. Check empty fields
//     if(!name || !email || !age || !password)
//     {
//       setError("All fields are required");
//       return;
//     }

//     //2. Check name
//     if(name.length < 3){
//       setError("Name must contain atleast 3 characters");
//       return;
//     }

//     //3. Check Email
//     if(!email.includes("@")){
//       setError("Enter a valid Email");
//       return;
//     }

//     //4. Check Age
//     if(age < 18){
//       setError("Age must be above 18");
//       return;
//     }

//     //5. Check password
//     if(password.length < 6){
//       setError("Password must contain atleast 6 characters");
//       return;
//     }

//     setSuccess("Registration successfully done!")
//   }

//   return(
//     <div>
//       <h1>Student Registration</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             type="text"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Age:</label>
//           <input
//             type="text"
//             placeholder="Enter Age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button type="submit">Register</button>
//       </form>

//       {error && <p>{error}</p>}
//       {success && <p>{success}</p>}
//     </div>
//   )
// }

// "use client"

// import { uploadFile } from "./actions"

// export default function Home(){
//   return(
//     <form action="{uploadFile}">
//       <input type="text" name="file"/>
//       <button type="submit">Upload</button>
//     </form>
//   )
// }

"use client"

import { useActionState } from "react"
import { uploadFile } from "./actions"

export default function Home(){
  const [message, formAction] = useActionState(uploadFile,"");

  return(
    <div>
      <h1>File Upload</h1>

      <form action="{formAction}">
        <input type="file" name="file"/>
        <br />
        <br />

        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  )
}