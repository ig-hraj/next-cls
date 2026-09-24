// "use server";

// import fs from "fs/promises";
// import path from "path";

// export async function uploadFile(formData){
//     const file = formData.get("file");
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const filePath = path.join("uploads", file.name);

//     await fs.writeFile(filePath, buffer);
//     return "File uploaded successfully!!"
// }

// "use server";

// import fs from "fs/promises";
// import path from "path";

// export async function uploadFile(prevState, formData) {
//   const file = formData.get("file");

//   // Check if the file is selected
//   if (!file || file.size === 0) {
//     return "Please select a file";
//   }

//   // Check file size
//   if (file.size > 2 * 1024 * 1024) {
//     return "File must be less than 2 MB";
//   }

//   // Check file type
//   const allowTypes = [
//     "image/jpeg",
//     "image/png",
//     "application/pdf"
//   ];
//   if (!allowTypes.includes(file.type)) {
//     return "Only, JPEG, PNG and PDF files are allowed";
//   }

//   // Path of existing upload folder
//   const filePath = path.join(process.cwd(), "upload", file.name);

//   // Get file data
//   const bytes = await file.arrayBuffer();

//   // Save the file (Fixed: changed 'Bytes' to lowercase 'bytes')
//   await fs.writeFile(filePath, Buffer.from(bytes));

//   return "File uploaded successfully";
// }

