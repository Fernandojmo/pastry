import styles from "./ProductCard.module.scss";

type Props = { title: string; image: string; description?: string };

export default function ProductCard({ title, image, description }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.thumbWrap}>
        <img src={image} alt={title} className={styles.thumb} />
      </div>
      <div className={styles.meta}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}
