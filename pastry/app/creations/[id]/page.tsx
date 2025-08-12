"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Creation { title: string; image: string; description: string }

export default function CreationDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [creation, setCreation] = useState<Creation | null>(null);

  useEffect(() => {
    const fetchCreation = async () => {
      const snap = await getDoc(doc(db, "creations", id));
      if (snap.exists()) {
        setCreation(snap.data() as Creation);
      }
    };
    fetchCreation();
  }, [id]);

  if (!creation) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">{creation.title}</h1>
      <img src={creation.image} alt={creation.title} />
      <p>{creation.description}</p>
    </div>
  );
}
