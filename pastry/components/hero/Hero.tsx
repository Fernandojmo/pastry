import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video className={styles.media} autoPlay muted loop playsInline poster="/images/hero-poster.jpg">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className="container">
          <h1 className="display">Seasonal Haute Pâtisserie</h1>
          <p className="muted maxw">Signature creations crafted with precision and emotion.</p>
        </div>
      </div>
    </section>
  );
}