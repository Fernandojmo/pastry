import styles from "../creations.module.scss";

export default function NewCreationPage() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">New Creation</h1>
      <form
        action="/api/creations"
        method="POST"
        encType="multipart/form-data"
        className={styles.grid}
      >
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="difficulty" placeholder="Difficulty" required />
        <input type="text" name="time" placeholder="Time" required />
        <textarea name="recipe" placeholder="Recipe" required />
        <input type="file" name="image" accept="image/*" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
