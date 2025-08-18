import { NextResponse } from "next/server";
import { db, bucket } from "@/lib/firebase";
import { randomUUID } from "crypto";

interface CreationData {
  title: string;
  difficulty: string;
  time: string;
  recipe: string;
  image: string;
  ingredients?: string[];
  steps?: string[];
  history?: string;
  instagramlink?: string;
  historyimg?: string;
  images?: string[];
}

async function uploadFile(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `creations/${randomUUID()}-${file.name}`;
  const storedFile = bucket.file(filename);
  await storedFile.save(buffer, { contentType: file.type });

  const [url] = await storedFile.getSignedUrl({
    action: "read",
    expires: "03-01-2500",
  });
  return url;
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const title = form.get("title")?.toString() || "";
    const difficulty = form.get("difficulty")?.toString() || "";
    const time = form.get("time")?.toString() || "";
    const recipe = form.get("recipe")?.toString() || "";

    const ingredientsRaw = form.get("ingredients")?.toString() || "";
    const stepsRaw = form.get("steps")?.toString() || "";
    const history = form.get("history")?.toString() || "";
    const instagramlink = form.get("instagramlink")?.toString() || "";

    const file = form.get("image") as File | null;
    const historyFile = form.get("historyimg") as File | null;
    const galleryFiles = form.getAll("images") as File[];

    let image = "";
    if (file) {
      image = await uploadFile(file);
    }

    let historyimg = "";
    if (historyFile) {
      historyimg = await uploadFile(historyFile);
    }

    let images: string[] | undefined;
    if (galleryFiles && galleryFiles.length > 0) {
      images = [];
      for (const img of galleryFiles) {
        if (img.size > 0) {
          images.push(await uploadFile(img));
        }
      }
    }

    const ingredients = ingredientsRaw
      ? ingredientsRaw
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined;

    const steps = stepsRaw
      ? stepsRaw
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined;

    const data: CreationData = {
      title,
      difficulty,
      time,
      recipe,
      image,
      ...(ingredients && { ingredients }),
      ...(steps && { steps }),
      ...(history && { history }),
      ...(instagramlink && { instagramlink }),
      ...(historyimg && { historyimg }),
      ...(images && images.length > 0 && { images }),
    };

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
