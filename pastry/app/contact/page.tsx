// --- FILE: app/(pages)/contact/page.tsx ---
import styles from "./contact.module.scss";

export default function ContactPage() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">Contact</h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>Name</label>
          <input className={styles.input} placeholder="Your name" />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" placeholder="you@example.com" />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Message</label>
          <textarea className={styles.textarea} rows={5} placeholder="Hello…" />
        </div>
        <button type="submit" className="btn-outline">Send</button>
      </form>
    </div>
  );
}

