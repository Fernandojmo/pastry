import styles from "./VideoBanner.module.scss";

export default function VideoBanner() {
  return (
    <section className={`${styles.banner} container` }>
      <div className={styles.box}>
        <video className={styles.video} autoPlay muted loop playsInline poster="/images/banner-poster.jpg">
          <source src="/craft.mp4" type="video/mp4" />
        </video>
        <div className={styles.texts}>
          <h2>Crafted Daily</h2>
          <p>A glimpse into our kitchen: precision, patience, and passion.</p>
        </div>
      </div>
    </section>
  );
}