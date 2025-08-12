import Link from "next/link";
import styles from "./AboutTeaser.module.scss";

export default function AboutTeaser() {
  return (
    <div className={styles.grid}>
      <img src="/images/about-teaser.jpg" alt="About our patisserie" className={styles.image} />
      <div className={styles.copy}>
        <h2>Our Philosophy</h2>
        <p>
          We pursue clarity of taste and timeless aesthetics. Collections evolve with the seasons, highlighting
          fruits at peak ripeness and chocolates of origin.
        </p>
        <Link href="/about" className="btn-outline">Learn more</Link>
      </div>
    </div>
  );
}