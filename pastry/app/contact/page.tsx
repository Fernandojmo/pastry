import ProductCard from "@/components/productcard/ProductCard";
import { db } from "@/lib/firebase";
import styles from "./contact.module.scss";

interface Creation { id: string; title: string; image: string; description: string }

export default async function CreationsPage() {
  const snapshot = await db.collection("creations").get();
  const creations = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Creation, "id">),
  }));

  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">Creations</h1>
      <p className="muted">Seasonal pastries and signature pieces.</p>
      <div className={styles.grid}>
        {/* {creations.map((c) => (
          // <ProductCard key={c.id} {...c} />
        ))} */}
      </div>
    </div>
  );
}
