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
  try {
    const form = await req.formData();
    const title = form.get("title")?.toString() || "";
    const difficulty = form.get("difficulty")?.toString() || "";
    const time = form.get("time")?.toString() || "";
    const recipe = form.get("recipe")?.toString() || "";
    const file = form.get("image") as File | null;

    let image = "";
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `creations/${randomUUID()}-${file.name}`;
      const storedFile = bucket.file(filename);
      await storedFile.save(buffer, { contentType: file.type });

      const [url] = await storedFile.getSignedUrl({
        action: "read",
        expires: "03-01-2500",
      });
      image = url;
    }

    const data: CreationData = { title, difficulty, time, recipe, image };
    const doc = await db.collection("creations").add(data);
    return NextResponse.json({ id: doc.id });
  } catch (err) {
    console.error("Failed to create creation", err);
    return NextResponse.json(
      { error: "Failed to create creation" },
      { status: 500 }
    );
  }
}
