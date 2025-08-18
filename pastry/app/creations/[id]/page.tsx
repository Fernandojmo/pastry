import { db } from "@/lib/firebase";
import { decodeId } from "@/lib/id";
import styles from "./creation.module.scss";

interface Creation {
  title: string;
  image: string;
  difficulty: string;
  time: string;
  recipe: string;
  images?: string[];
  ingredients?: string[];
  steps?: string[];
  history?: string;
  instagramlink?: string;
  historyimg?: string;
}

export default async function CreationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const docId = decodeId(params.id);
    const snap = await db.collection("creations").doc(docId).get();
    if (!snap.exists) {
      return (
        <div className={`container ${styles.wrapper}`}>
          <p>Not found</p>
        </div>
      );
    }

    const creation = snap.data() as Creation;

    return (
      <article className={`container ${styles.wrapper}`}>
        <h1 className="title">{creation.title}</h1>
        <img src={creation.image} alt={creation.title} className={styles.hero} />
        <div className={styles.meta}>
          <span>Difficulty: {creation.difficulty}</span>
          <span>Time: {creation.time}</span>
        </div>

        {creation.images && (
          <div className={styles.gallery}>
            {creation.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${creation.title} ${i + 1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        )}

        {creation.ingredients && (
          <section className={styles.section}>
            <h2>Ingredients</h2>
            <ul>
              {creation.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}
          {creation.steps && (
          <section className={styles.section}>
            <h2>Instructions</h2>
            <ol>
              {creation.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        )}

        {creation.recipe && <p className={styles.recipe}>{creation.recipe}</p>}

        {(creation.history || creation.historyimg || creation.instagramlink) && (
          <section className={styles.historySection}>
            <h2>History</h2>
            {creation.historyimg && (
              <img
                src={creation.historyimg}
                alt={`${creation.title} history`}
                className={styles.historyImage}
              />
            )}
            {creation.history && <p>{creation.history}</p>}
            {creation.instagramlink && (
              <a
                href={creation.instagramlink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramLink}
              >
                Instagram
              </a>
            )}
          </section>
        )}
      </article>
    );
  } catch (err) {
    console.error("Failed to load creation", err);
    return (
      <div className={`container ${styles.wrapper}`}>
        <p>Error loading creation</p>
      </div>
    );
  }
}
