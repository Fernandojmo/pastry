import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="title">About the Chef</h1>
      <p className="lead">
        We celebrate seasonality, precision and emotion. Our creations balance geometry and flavor
        to craft memorable moments. Each piece is an expression of technique and respect for ingredients.
      </p>
      <div className={styles.grid}>
        <img src="/images/chef-portrait.jpg" alt="Chef portrait" className={styles.portrait} />
        <div className={styles.copy}>
          <p>
            Trained in some of the world’s most demanding kitchens, our chef leads a team dedicated to excellence.
            We design with structure and finish with finesse.
          </p>
          <p>
            Visit our boutiques to discover seasonal collections, signature classics, and limited editions
            released throughout the year.
          </p>
        </div>
      </div>
    </div>
  );
}
