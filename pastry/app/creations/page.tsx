import ProductCard from "@/components/productcard/ProductCard";
import styles from "./creations.module.scss";

const CREATIONS = [
  { title: "Citrus Crown", image: "/images/creation-1.jpg", description: "Layered citrus confit, soft mousse, crunchy base." },
  { title: "Hazelnut Prism", image: "/images/creation-2.jpg", description: "Praliné heart, gianduja veil, almond dacquoise." },
  { title: "Raspberry Orb", image: "/images/creation-3.jpg", description: "Raspberry compote, vanilla cream, sable breton." },
  { title: "Chocolate Monolith", image: "/images/creation-4.jpg", description: "70% grand cru chocolate, cocoa nib crunch, caramel core." },
];

export default function CreationsPage() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">Creations</h1>
      <p className="muted">Seasonal pastries and signature pieces.</p>
      <div className={styles.grid}>
        {CREATIONS.map((c) => (
          <ProductCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}
