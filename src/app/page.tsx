import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Bounty Vibes</h1>
        <p className={styles.subtitle}>Your guide to the best teams in Star Wars: Galaxy of Heroes</p>
        <div className={styles.ctaContainer}>
          <Link
            href="/teams"
            className={styles.ctaButton}>
            Explore Teams
          </Link>
        </div>
      </div>

      <section className={styles.features}>
        <Link
          href="/teams"
          className={styles.featureCard}>
          <div className={styles.featureIcon}>🎮</div>
          <h3>Team Compositions</h3>
          <p>Discover optimal team setups for every game mode</p>
        </Link>
        <Link
          href="/teams"
          className={styles.featureCard}>
          <div className={styles.featureIcon}>⚔️</div>
          <h3>Character Guides</h3>
          <p>Learn about character synergies and strategies</p>
        </Link>
        <Link
          href="/teams"
          className={styles.featureCard}>
          <div className={styles.featureIcon}>📊</div>
          <h3>Performance Stats</h3>
          <p>Track team performance and success rates</p>
        </Link>
      </section>

      <section className={styles.about}>
        <h2>About Bounty Vibes</h2>
        <p>
          Bounty Vibes is your comprehensive resource for Star Wars: Galaxy of Heroes team building. Whether you&apos;re
          a beginner or a veteran player, find the perfect team compositions to dominate in all game modes.
        </p>
      </section>
    </main>
  );
}
