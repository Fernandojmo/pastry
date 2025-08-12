import Link from "next/link";
import styles from "./HighlightGrid.module.scss";

const HIGHLIGHTS = [
  { title: "The Collection", image: "/images/highlight-collection.jpg", href: "/creations" },
  { title: "Visit Our Boutiques", image: "/images/highlight-boutique.jpg", href: "/boutiques" },
  { title: "Behind the Craft", image: "/images/about-teaser.jpg", href: "/about" },
];

export default function HighlightGrid() {
  return (
    <div className={styles.grid}>
      {HIGHLIGHTS.map((h) => (
        <Link key={h.title} href={h.href} className={styles.card}>
          <img src={h.image} alt={h.title} className={styles.image} />
          <div className={styles.gradient} />
          <div className={styles.caption}>
            <h3>{h.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
