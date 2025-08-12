import styles from "./Newsletter.module.scss";

export default function Newsletter() {
  return (
    <div className={`container ${styles.box}`}>
      <h3 className="subtitle">Join Our List</h3>
      <p className="muted">Get seasonal drops, boutique news, and special releases.</p>
      <form className={styles.form}>
        <input type="email" required placeholder="you@example.com" />
        <button type="submit" className="btn-outline">Subscribe</button>
      </form>
      <p className="fineprint">We respect your privacy. Unsubscribe anytime.</p>
    </div>
  );
}