import Link from "next/link";
import styles from "./ProductCard.module.scss";

type Props = { id: string; title: string; image: string; description?: string };

export default function ProductCard({ id, title, image, description }: Props) {
  return (
    <Link href={`/creations/${id}`} className={styles.card}>
      <div className={styles.thumbWrap}>
        <img src={image} alt={title} className={styles.thumb} />
      </div>
      <div className={styles.meta}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
}
