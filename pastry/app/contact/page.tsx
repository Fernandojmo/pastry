import styles from "./contact.module.scss";

export default function ContactPage() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">Contact</h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Name</label>
          <input placeholder="Your name" />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className={styles.field}>
          <label>Message</label>
          <textarea rows={5} placeholder="Hello…" />
        </div>
        <button type="submit" className="btn-outline">Send</button>
      </form>
    </div>
  );
}
