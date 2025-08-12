import BoutiqueCard from "@/components/boutiquecard/BoutiqueCard";
import styles from "./boutiques.module.scss";

const BOUTIQUES = [
  {
    city: "Paris",
    address: "35 Rue de l'Excellence, 75002 Paris",
    hours: "Tue–Sun 9:00–18:00",
    mapUrl: "https://maps.google.com",
    image: "/images/boutique-paris.jpg",
  },
  {
    city: "London",
    address: "12 Royal Crescent, W1 London",
    hours: "Mon–Sat 9:00–18:00",
    mapUrl: "https://maps.google.com",
    image: "/images/boutique-london.jpg",
  },
];

export default function BoutiquesPage() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">Boutiques</h1>
      <p className="muted">Experience our creations in person.</p>
      <div className={styles.grid}>
        {BOUTIQUES.map((b) => (
          <BoutiqueCard key={b.city} {...b} />
        ))}
      </div>
    </div>
  );
}