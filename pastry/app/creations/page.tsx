"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ProductCard from "@/components/productcard/ProductCard";
import styles from "./creations.module.scss";

type Creation = { id: string; title: string; image: string; description: string };

export default function CreationsPage() {
  const [creations, setCreations] = useState<Creation[]>([]);

  useEffect(() => {
    const fetchCreations = async () => {
      const snapshot = await getDocs(collection(db, "creations"));
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Creation, "id">) }));
      setCreations(items);
    };
    fetchCreations();
  }, []);

  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">Creations</h1>
      <p className="muted">Seasonal pastries and signature pieces.</p>
      <div className={styles.grid}>
        {creations.map((c) => (
          <ProductCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}