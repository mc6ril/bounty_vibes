import Navbar from "./components/navBar";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Navbar />
            <main className={styles.main}>
                <h1>Bounty Vibes</h1>
                <p>Bienvenu dans la guilde ! Trouves toutes les infos dont tu as besoins</p>
            </main>
            <footer className={styles.footer}>
                <p>Bounty Vibes</p>
            </footer>
        </div>
    );
}
