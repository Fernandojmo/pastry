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
        <textarea name="recipe" placeholder="Recipe" required rows={6} />
        <textarea
          name="ingredients"
          placeholder="Ingredients (one per line)"
          rows={5}
        />
        <textarea name="steps" placeholder="Steps (one per line)" rows={5} />
        <textarea name="history" placeholder="History" rows={5} />
        <input type="text" name="instagramlink" placeholder="Instagram link" />
        <input type="file" name="image" accept="image/*" required />
        <input type="file" name="historyimg" accept="image/*" />
        <input type="file" name="images" accept="image/*" multiple />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
