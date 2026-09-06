"use client";

import Image from "next/image";
import { Fragment, useEffect, useSyncExternalStore } from "react";
import { isLocale, translations, type Locale } from "./i18n";
import styles from "./page.module.css";
import SiteHeader from "./site-header";

const localeStorageKey = "alepin.locale";
const localeChangeEvent = "alepin:locale-change";
let selectedLocale: Locale | null = null;

const productMedia = [
  {
    id: "classic",
    image: "/images/pita-pocket.jpg",
    sizes: "(max-width: 640px) 82vw, (max-width: 1180px) 53vw, 43vw",
    className: styles.productLarge,
  },
  {
    id: "thin",
    image: "/images/flatbread-fold.jpg",
    sizes: "(max-width: 640px) 82vw, (max-width: 1180px) 38vw, 25vw",
    className: styles.productTall,
  },
  {
    id: "sesame",
    image: "/images/seeded-bread.jpg",
    sizes: "(max-width: 640px) 82vw, (max-width: 1180px) 38vw, 25vw",
    className: styles.productWide,
  },
] as const;

function resolveBrowserLocale(): Locale {
  const queryLocale = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(queryLocale)) return queryLocale;

  if (selectedLocale) return selectedLocale;

  try {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    if (isLocale(storedLocale)) return storedLocale;
  } catch {
    // Language selection still works when storage is unavailable.
  }

  for (const browserLanguage of navigator.languages) {
    const languageCode = browserLanguage.toLowerCase().split("-")[0];
    if (isLocale(languageCode)) return languageCode;
  }

  return "fr";
}

function subscribeToLocale(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === localeStorageKey) {
      selectedLocale = null;
      onStoreChange();
    }
  };
  const onHistoryChange = () => {
    selectedLocale = null;
    onStoreChange();
  };

  window.addEventListener(localeChangeEvent, onStoreChange);
  window.addEventListener("storage", onStorage);
  window.addEventListener("popstate", onHistoryChange);

  return () => {
    window.removeEventListener(localeChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("popstate", onHistoryChange);
  };
}

function setBrowserLocale(locale: Locale) {
  selectedLocale = locale;

  try {
    window.localStorage.setItem(localeStorageKey, locale);
  } catch {
    // Keep the in-memory selection when storage is unavailable.
  }

  const url = new URL(window.location.href);
  url.searchParams.set("lang", locale);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new Event(localeChangeEvent));
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function WheatIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42V11" />
      <path d="M24 19c-6-1-9-5-9-10 6 1 9 5 9 10Z" />
      <path d="M24 27c-6-1-9-5-9-10 6 1 9 5 9 10Z" />
      <path d="M24 35c-6-1-9-5-9-10 6 1 9 5 9 10Z" />
      <path d="M24 19c6-1 9-5 9-10-6 1-9 5-9 10Z" />
      <path d="M24 27c6-1 9-5 9-10-6 1-9 5-9 10Z" />
      <path d="M24 35c6-1 9-5 9-10-6 1-9 5-9 10Z" />
    </svg>
  );
}

function Brand({ logoSrc, label }: { logoSrc: string; label: string }) {
  return (
    <a href="#accueil" className={styles.footerBrand} aria-label={label}>
      <Image
        className={styles.footerBrandLogo}
        src={logoSrc}
        alt=""
        width={2122}
        height={2118}
        sizes="(max-width: 640px) 116px, 132px"
      />
    </a>
  );
}

export default function LocalizedHome({ assetBasePath }: { assetBasePath: string }) {
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocale,
    resolveBrowserLocale,
    () => "fr",
  );
  const copy = translations[locale];
  const isRtl = locale === "ar";
  const direction = isRtl ? "rtl" : "ltr";
  const assetPath = (path: string) => `${assetBasePath}${path}`;
  const logoSrc = assetPath("/images/alepin-logo.png");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;

    const updateMetadata = () => {
      document.title = copy.meta.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", copy.meta.description);
    };

    updateMetadata();
    const animationFrame = window.requestAnimationFrame(updateMetadata);
    const metadataTimer = window.setTimeout(updateMetadata, 250);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(metadataTimer);
    };
  }, [copy.meta.description, copy.meta.title, direction, locale]);

  return (
    <div
      className={`${styles.siteShell} ${isRtl ? styles.rtl : ""}`}
      lang={locale}
      dir={direction}
    >
      <a className={styles.skipLink} href="#contenu">
        {copy.skipLink}
      </a>

      <div className={styles.topBar}>
        <span>{copy.topBar.authenticBread}</span>
        <span className={styles.topBarCenter}>{copy.topBar.craftedInFrance}</span>
        <a href="#contact">{copy.topBar.professionals}</a>
      </div>

      <SiteHeader
        logoSrc={logoSrc}
        locale={locale}
        copy={copy.header}
        onLocaleChange={setBrowserLocale}
      />

      <main id="contenu">
        <section className={styles.hero} id="accueil">
          <div className={styles.heroOrnament} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span /> {copy.hero.eyebrow}
              </p>
              <h1>
                {copy.hero.title.lead}
                <em>{copy.hero.title.emphasis}</em>
              </h1>
              <p className={styles.heroLead}>{copy.hero.lead}</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#nos-pains">
                  {copy.hero.discoverBreads} <ArrowIcon />
                </a>
                <a className={styles.textLink} href="#notre-histoire">
                  {copy.hero.ourStory} <span aria-hidden="true">↗</span>
                </a>
              </div>
              <ul className={styles.heroDetails} aria-label={copy.hero.essentialsAria}>
                {copy.hero.essentials.map((detail, index) => (
                  <li key={detail}>
                    <span dir="ltr">0{index + 1}</span> {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroSun} aria-hidden="true" />
              <div className={styles.heroImageFrame}>
                <Image
                  src={assetPath("/images/hero-flatbread.jpg")}
                  alt={copy.hero.imageAlt}
                  fill
                  preload
                  sizes="(max-width: 900px) 92vw, 48vw"
                />
              </div>
              <div className={styles.heroSeal} aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path
                      id="sealPath"
                      d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                    />
                  </defs>
                  <text lang={locale} direction={direction} textAnchor="middle">
                    <textPath href="#sealPath" startOffset="50%">
                      {copy.hero.seal}
                    </textPath>
                  </text>
                </svg>
                <WheatIcon />
              </div>
              <div className={styles.heroNote}>
                <span>{copy.hero.featuredLabel}</span>
                <strong>{copy.hero.featuredName}</strong>
              </div>
            </div>
          </div>
          <a className={styles.scrollCue} href="#notre-histoire" aria-label={copy.hero.scrollAria}>
            <span /> {copy.hero.scroll}
          </a>
        </section>

        <div className={styles.ticker} aria-label={copy.ticker.ariaLabel}>
          <div>
            {copy.ticker.items.map((item, index) => (
              <Fragment key={item}>
                <span>{item}</span>
                {index < copy.ticker.items.length - 1 ? <i>✦</i> : null}
              </Fragment>
            ))}
          </div>
        </div>

        <section className={styles.storyIntro} id="notre-histoire">
          <div className={styles.sectionNumber}>{copy.story.sectionLabel}</div>
          <div className={styles.storyHeading}>
            <p className={styles.arabicAccent} lang="ar" dir="rtl">{copy.story.arabic}</p>
            <h2>
              {copy.story.title.first}<br />
              {copy.story.title.second}{copy.story.title.second ? " " : null}
              <em>{copy.story.title.emphasis}</em>
            </h2>
          </div>
          <div className={styles.storyBody}>
            <p>{copy.story.paragraphOne}</p>
            <p>{copy.story.paragraphTwo}</p>
            <a className={styles.underlinedLink} href="#savoir-faire">
              {copy.story.craftLink} <ArrowIcon />
            </a>
          </div>
          <div className={styles.storyMark} aria-hidden="true">A</div>
        </section>

        <section className={styles.products} id="nos-pains">
          <div className={styles.productsHeader}>
            <div>
              <p className={styles.sectionNumber}>{copy.products.sectionLabel}</p>
              <h2>
                {copy.products.title.first}<br />
                {copy.products.title.second} <em>{copy.products.title.emphasis}</em>
              </h2>
            </div>
            <p>{copy.products.introduction}</p>
          </div>

          <div className={styles.productGrid}>
            {productMedia.map((media, index) => {
              const product = copy.products.items[index];
              return (
                <article className={`${styles.productCard} ${media.className}`} key={media.id}>
                  <a href="#contact">
                    <div className={styles.productImage}>
                      <Image
                        src={assetPath(media.image)}
                        alt={product.alt}
                        fill
                        sizes={media.sizes}
                      />
                      <span className={styles.productNumber} dir="ltr">0{index + 1}</span>
                      <span className={styles.productAction}>{copy.products.contactAction}</span>
                      <span className={styles.productArrow} aria-hidden="true"><ArrowIcon /></span>
                    </div>
                    <div className={styles.productCopy}>
                      <div>
                        <h3>{product.name}</h3>
                        <span lang="ar" dir="rtl">{product.arabic}</span>
                      </div>
                      <p>{product.description}</p>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.imageStatement} aria-label={copy.philosophy.ariaLabel}>
          <Image
            src={assetPath("/images/bread-basket.jpg")}
            alt={copy.philosophy.imageAlt}
            fill
            sizes="100vw"
          />
          <div className={styles.imageStatementShade} />
          <div className={styles.imageStatementCopy}>
            <p>{copy.philosophy.label}</p>
            <h2>
              {copy.philosophy.title.first}<br />
              {copy.philosophy.title.second} <em>{copy.philosophy.title.emphasis}</em>
            </h2>
          </div>
          <p className={styles.imageStatementNote}>
            {copy.philosophy.note.first}<br /> {copy.philosophy.note.second}
          </p>
        </section>

        <section className={styles.craft} id="savoir-faire">
          <div className={styles.craftVisual}>
            <div className={styles.craftImage}>
              <Image
                src={assetPath("/images/dough-craft.jpg")}
                alt={copy.craft.imageAlt}
                fill
                sizes="(max-width: 900px) 90vw, 44vw"
              />
            </div>
            <div className={styles.craftCaption}>
              <span>{copy.craft.captionLabel}</span>
              <strong>{copy.craft.captionValue}</strong>
            </div>
            <span className={styles.craftFlour} aria-hidden="true">✦</span>
          </div>

          <div className={styles.craftContent}>
            <p className={styles.sectionNumber}>{copy.craft.sectionLabel}</p>
            <h2>{copy.craft.title.lead} <em>{copy.craft.title.emphasis}</em></h2>
            <p className={styles.craftLead}>{copy.craft.introduction}</p>
            <ol className={styles.processList}>
              {copy.craft.steps.map((step, index) => (
                <li key={`step-${index + 1}`}>
                  <span dir="ltr">0{index + 1}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.values}>
          <div className={styles.valuesTitle}>
            <p className={styles.sectionNumber}>{copy.values.sectionLabel}</p>
            <h2>
              {copy.values.title.first}<br />
              {copy.values.title.second} <em>{copy.values.title.emphasis}</em>
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            <article>
              <span className={styles.valueIcon} aria-hidden="true">
                <svg viewBox="0 0 40 40"><path d="M20 4v32M7 20h26M11 11l18 18M29 11 11 29" /></svg>
              </span>
              <p dir="ltr">01</p><h3>{copy.values.items[0].title}</h3>
              <p>{copy.values.items[0].text}</p>
            </article>
            <article>
              <span className={styles.valueIcon} aria-hidden="true">
                <svg viewBox="0 0 40 40"><path d="M7 27c8 0 11-6 13-14 2 8 5 14 13 14-7 1-11 4-13 9-2-5-6-8-13-9Z" /></svg>
              </span>
              <p dir="ltr">02</p><h3>{copy.values.items[1].title}</h3>
              <p>{copy.values.items[1].text}</p>
            </article>
            <article>
              <span className={styles.valueIcon} aria-hidden="true">
                <svg viewBox="0 0 40 40"><path d="M20 34c9-5 14-12 14-21-9 0-15 5-17 14M20 34c-7-4-11-9-11-16 7 0 11 4 12 10" /></svg>
              </span>
              <p dir="ltr">03</p><h3>{copy.values.items[2].title}</h3>
              <p>{copy.values.items[2].text}</p>
            </article>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contactIntro}>
            <p className={styles.sectionNumber}>{copy.contact.sectionLabel}</p>
            <p>{copy.contact.audience.first}<br /> {copy.contact.audience.second}</p>
          </div>
          <div className={styles.contactMain}>
            <p className={styles.contactArabic} lang="ar" dir="rtl">{copy.contact.arabicGreeting}</p>
            <h2>
              {copy.contact.title.first}<br />
              {copy.contact.title.second} <em>{copy.contact.title.emphasis}</em>
            </h2>
            <div className={styles.contactActions}>
              <a
                className={styles.contactButton}
                href={`mailto:amareine.europe@gmail.com?subject=${encodeURIComponent(copy.contact.emailSubject)}`}
              >
                {copy.contact.emailButton} <ArrowIcon />
              </a>
              <a className={styles.phoneLink} href="tel:+33357850234" dir="ltr">
                {copy.contact.phone}
              </a>
            </div>
          </div>
          <div className={styles.contactAddress}>
            <span>{copy.contact.findUs}</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=12+Rue+du+Stade+57730+Folschviller"
              target="_blank"
              rel="noreferrer"
            >
              <bdi>{copy.contact.address[0]}</bdi><br />
              <bdi>{copy.contact.address[1]}</bdi>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Brand logoSrc={logoSrc} label={copy.footer.logoAria} />
          <p>{copy.footer.tagline.first}<br /> {copy.footer.tagline.second}</p>
          <nav aria-label={copy.footer.navAria}>
            <a href="#nos-pains">{copy.header.nav.breads}</a>
            <a href="#notre-histoire">{copy.header.nav.story}</a>
            <a href="#savoir-faire">{copy.header.nav.craft}</a>
            <a href="#contact">{copy.header.nav.contact}</a>
          </nav>
          <a className={styles.backToTop} href="#accueil">
            {copy.footer.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className={styles.footerBottom}>
          <span>{copy.footer.copyright}</span>
          <span>{copy.footer.closingLine}</span>
        </div>
      </footer>
    </div>
  );
}
