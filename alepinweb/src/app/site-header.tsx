"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const navItems = [
  { href: "#nos-pains", label: "Nos pains" },
  { href: "#notre-histoire", label: "Notre histoire" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#contact", label: "Contact" },
];

function Logo({ src }: { src: string }) {
  return (
    <a className={styles.brand} href="#accueil" aria-label="Alepin, accueil">
      <Image
        className={styles.brandLogo}
        src={src}
        alt=""
        width={2122}
        height={2118}
        loading="eager"
        sizes="(max-width: 640px) 56px, 66px"
      />
    </a>
  );
}

export default function SiteHeader({ logoSrc }: { logoSrc: string }) {
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
        <Logo src={logoSrc} />
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
