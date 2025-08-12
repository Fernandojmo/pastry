import ProductCard from "@/components/productcard/ProductCard";
import styles from "./creations.module.scss";
import { db } from "@/lib/firebase";

interface Creation {
  id: string;
  title: string;
  image: string;
  difficulty: string;
  time: string;
  recipe: string;
}

export default async function CreationsPage() {
  let creations: Creation[] = [];
  try {
    const snap = await db.collection("creations").get();
    creations = snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<Creation, "id">),
    }));
  } catch (err) {
    console.error("Failed to fetch creations", err);
  }

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
