"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

const NAV = [
  { href: "/creations", label: "Creations" },
  { href: "/boutiques", label: "Boutiques" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          PÂTISSERIE
        </Link>
        <ul className={styles.menu}>
          {NAV.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className={styles.link}>
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
