"use server";

import fs from "fs/promises";
import path from "path";

export async function uploadFile(formData){
    const file = formData.get("file");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join("uploads", file.name);

    await fs.writeFile(filePath, buffer);
    return "File uploaded successfully!!"
}