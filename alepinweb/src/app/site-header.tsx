"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const navItems = [
  { href: "#nos-pains", label: "Nos pains" },
  { href: "#notre-histoire", label: "Notre histoire" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  return (
    <a className={styles.brand} href="#accueil" aria-label="Alepin, accueil">
      <span className={styles.brandMark} aria-hidden="true">
        <svg viewBox="0 0 52 52">
          <path d="M11 42V24C11 14.6 17.7 7 26 7s15 7.6 15 17v18" />
          <path d="M19 42V26c0-5.5 3.1-9.5 7-9.5s7 4 7 9.5v16" />
          <path d="M7 42h38" />
          <path d="M26 20v16M26 25l-4-4M26 29l5-5M26 33l-4-4" />
        </svg>
      </span>
      <span className={styles.brandText}>
        <strong>ALEPIN</strong><small>PAINS DU LEVANT</small>
      </span>
    </a>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Logo />
        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className={styles.headerCta} href="#contact">
          Nous trouver <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={menuButtonRef}
          className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span /><span />
        </button>
      </div>
      <div
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <nav aria-label="Navigation mobile">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <p>Le pain du Levant, façonné en France.</p>
      </div>
    </header>
  );
}
