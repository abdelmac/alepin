"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { localeOptions, type Locale, type SiteCopy } from "./i18n";
import styles from "./page.module.css";

function Logo({ src, label }: { src: string; label: string }) {
  return (
    <a className={styles.brand} href="#accueil" aria-label={label}>
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

type SiteHeaderProps = {
  logoSrc: string;
  locale: Locale;
  copy: SiteCopy["header"];
  onLocaleChange: (locale: Locale) => void;
};

export default function SiteHeader({
  logoSrc,
  locale,
  copy,
  onLocaleChange,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navItems = [
    { href: "#nos-pains", label: copy.nav.breads },
    { href: "#notre-histoire", label: copy.nav.story },
    { href: "#savoir-faire", label: copy.nav.craft },
    { href: "#contact", label: copy.nav.contact },
  ];

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
        <Logo src={logoSrc} label={copy.logoAria} />
        <nav className={styles.desktopNav} aria-label={copy.mainNavAria}>
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.headerCta} href="#contact">
            {copy.findUs} <span aria-hidden="true">↗</span>
          </a>
          <label className={styles.languagePicker}>
            <span className={styles.srOnly}>{copy.languageSelector}</span>
            <select
              className={styles.languageSelect}
              value={locale}
              onChange={(event) => {
                setOpen(false);
                onLocaleChange(event.target.value as Locale);
              }}
              dir="ltr"
            >
              {localeOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  lang={option.value}
                  dir={option.value === "ar" ? "rtl" : "ltr"}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <span className={styles.languageChevron} aria-hidden="true">⌄</span>
          </label>
        </div>
        <button
          ref={menuButtonRef}
          className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? copy.closeMenuAria : copy.openMenuAria}
        >
          <span /><span />
        </button>
      </div>
      <div
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <nav aria-label={copy.mobileNavAria}>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <p>{copy.mobileTagline}</p>
      </div>
    </header>
  );
}
