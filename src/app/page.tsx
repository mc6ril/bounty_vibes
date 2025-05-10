import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>QueensAndKings</h1>
        <p className={styles.subtitle}>
          Bienvenue dans l&apos;arsenal de QueensAndKings ! Cette plateforme est votre compagnon de jeu quotidien,
          conçue pour vous aider à optimiser vos équipes et à rester au top de la méta. Que ce soit pour le PvP, les
          raids ou les événements, trouvez instantanément les compositions qui feront la différence. Ensemble,
          continuons à faire grandir la puissance de notre guilde !
        </p>
        <div className={styles.ctaContainer}>
          <Link
            href="/teams"
            className={styles.ctaButton}>
            Explorer les équipes
          </Link>
        </div>
      </div>

      <section className={styles.features}>
        <Link
          href="/teams"
          className={styles.featureCard}>
          <div className={styles.featureIcon}>🎮</div>
          <h3>Compositions d&apos;équipes</h3>
          <p>Découvrez les meilleures compositions d&apos;équipes pour chaque mode de jeu</p>
        </Link>
        <Link
          href="/teams"
          className={styles.featureCard}>
          <div className={styles.featureIcon}>⚔️</div>
          <h3>Guides de personnages</h3>
          <p>Découvrez les synergies et les stratégies des personnages</p>
        </Link>
        <Link
          href="/teams"
          className={styles.featureCard}>
          <div className={styles.featureIcon}>📊</div>
          <h3>Statistiques de performance</h3>
          <p>Suivez les performances et les taux de succès des équipes</p>
        </Link>
      </section>

      <section className={styles.about}>
        <h2>À propos de QueensAndKings</h2>
        <p>
          Notre plateforme est l&apos;outil ultime pour la progression de la guilde. Chaque recherche, chaque équipe
          optimisée, chaque stratégie partagée renforce notre communauté. Utilisez cet arsenal pour rester compétitif,
          partager vos découvertes et contribuer à l&apos;excellence de QueensAndKings. Ensemble, nous écrivons
          l&apos;histoire de notre guilde !
        </p>
      </section>
    </main>
  );
}
