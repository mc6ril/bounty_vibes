import React from "react";
import Link from "next/link";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.mainHeader}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/teams">Teams</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.mainFooter}>
        <p>© 2024 Bounty Vibes - Star Wars: Galaxy of Heroes Guide</p>
      </footer>
    </div>
  );
};
