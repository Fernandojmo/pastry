import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p>© {new Date().getFullYear()} Pâtisserie. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}