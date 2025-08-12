import Link from "next/link";
import styles from "./ProductCard.module.scss";

type Props = {
  id: string;
  title: string;
  image: string;
  difficulty: string;
  time: string;
  recipe: string;
};

export default function ProductCard({ id, title, image, difficulty, time, recipe }: Props) {
  return (
    <Link href={`/creations/${id}`} className={styles.card}>
      <div className={styles.thumbWrap}>
        <img src={image} alt={title} className={styles.thumb} />
      </div>
      <div className={styles.meta}>
        <h3>{title}</h3>
        <p>Difficulty: {difficulty}</p>
        <p>Time: {time}</p>
        <p>{recipe}</p>
      </div>
    </Link>
  );
}
