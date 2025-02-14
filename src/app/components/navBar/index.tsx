import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar-layout">
            <div className="navbar-container">
                <Link href={"/"}>Bounty Vibes</Link>
                <ul className="navbar-buttons">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/teams"}>Teams</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
