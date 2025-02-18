import Navbar from "./components/navBar";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Navbar />
            <main className={styles.main}>
                <h1>Bounty Vibes</h1>
                <p>Bienvenue dans la guilde ! Trouve toutes les informations dont tu as besoin</p>
            </main>
            <footer className={styles.footer}>
                <p>Bounty Vibes</p>
            </footer>
        </div>
    );
}
