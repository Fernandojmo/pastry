import styles from "./BoutiqueCard.module.scss";

type BoutiqueProps = {
  city: string;
  address: string;
  hours: string;
  mapUrl: string;
  image: string;
};

export default function BoutiqueCard({ city, address, hours, mapUrl, image }: BoutiqueProps) {
  return (
    <article className={styles.card}>
      <img src={image} alt={`${city} boutique`} className={styles.image} />
      <div className={styles.body}>
        <h3>{city}</h3>
        <p className={styles.address}>{address}</p>
        <p className={styles.hours}>{hours}</p>
        <a href={mapUrl} target="_blank" className="btn-outline">View on Map</a>
      </div>
    </article>
  );
}