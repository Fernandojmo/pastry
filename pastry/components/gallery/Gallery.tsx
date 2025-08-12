import styles from "./Gallery.module.scss";

const IMAGES = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function Gallery() {
  return (
    <div className="container">
      <h2 className="subtitle">From the Boutique</h2>
      <div className={styles.masonry}>
        {IMAGES.map((src, i) => (
          <img key={src} src={src} alt={`Gallery ${i + 1}`} className={styles.item} />
        ))}
      </div>
    </div>
  );
}
