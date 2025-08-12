import { NextResponse } from "next/server";
import { db, bucket } from "@/lib/firebase";
import { randomUUID } from "crypto";

interface CreationData {
  title: string;
  difficulty: string;
  time: string;
  recipe: string;
  image: string;
}

export async function POST(req: Request) {
  const form = await req.formData();
  const title = form.get("title")?.toString() || "";
  const difficulty = form.get("difficulty")?.toString() || "";
  const time = form.get("time")?.toString() || "";
  const recipe = form.get("recipe")?.toString() || "";
  const file = form.get("image") as File | null;

  let image = "";
  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `creations/${randomUUID()}-${file.name}`;
    const storedFile = bucket.file(filename);
    await storedFile.save(buffer, { contentType: file.type });
    await storedFile.makePublic();
    image = `https://storage.googleapis.com/${bucket.name}/${filename}`;
  }

  const data: CreationData = { title, difficulty, time, recipe, image };
  const doc = await db.collection("creations").add(data);
  return NextResponse.json({ id: doc.id });
}
