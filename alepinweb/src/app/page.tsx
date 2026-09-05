import Image from "next/image";
import SiteHeader from "./site-header";
import styles from "./page.module.css";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";
const assetPath = (path: string) => `${pagesBasePath}${path}`;

const products = [
  {
    number: "01",
    name: "Le classique",
    arabic: "خبز عربي",
    description:
      "Souple, léger et délicatement toasté. Le pain de tous les jours, pensé pour être garni, trempé ou partagé.",
    image: assetPath("/images/pita-pocket.jpg"),
    alt: "Pains pita gonflés empilés sur un plateau",
    sizes: "(max-width: 640px) 82vw, (max-width: 1180px) 53vw, 43vw",
    className: styles.productLarge,
  },
  {
    number: "02",
    name: "Le pain fin",
    arabic: "خبز رقيق",
    description:
      "Une feuille tendre et aérienne, idéale pour les mezzés, les wraps et les grandes tablées.",
    image: assetPath("/images/flatbread-fold.jpg"),
    alt: "Pain plat fin plié sur une planche en bois",
    sizes: "(max-width: 640px) 82vw, (max-width: 1180px) 38vw, 25vw",
    className: styles.productTall,
  },
  {
    number: "03",
    name: "Le sésame",
    arabic: "بالسمسم",
    description:
      "Une croûte dorée, des graines généreuses et ce parfum grillé qui appelle la première bouchée.",
    image: assetPath("/images/seeded-bread.jpg"),
    alt: "Pains dorés couverts de graines",
    sizes: "(max-width: 640px) 82vw, (max-width: 1180px) 38vw, 25vw",
    className: styles.productWide,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Pétrir",
    text: "Une pâte simple, pétrie avec précision pour obtenir cette texture douce et souple.",
  },
  {
    number: "02",
    title: "Laisser vivre",
    text: "Le temps fait son œuvre. La pâte repose, développe ses arômes et gagne en légèreté.",
  },
  {
    number: "03",
    title: "Saisir",
    text: "Une cuisson vive révèle les notes toastées et forme la poche si caractéristique du pain levantin.",
  },
];

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

function Brand() {
  return (
    <a
      href="#accueil"
      className={styles.footerBrand}
      aria-label="Alepin, retour à l’accueil"
    >
      <span className={styles.footerBrandMark} aria-hidden="true">
        <svg viewBox="0 0 52 52">
          <path d="M11 42V24C11 14.6 17.7 7 26 7s15 7.6 15 17v18" />
          <path d="M19 42V26c0-5.5 3.1-9.5 7-9.5s7 4 7 9.5v16" />
          <path d="M7 42h38" />
          <path d="M26 20v16M26 25l-4-4M26 29l5-5M26 33l-4-4" />
        </svg>
      </span>
      <span>
        <strong>ALEPIN</strong>
        <small>PAINS DU LEVANT</small>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className={styles.siteShell}>
      <a className={styles.skipLink} href="#contenu">
        Aller au contenu
      </a>

      <div className={styles.topBar}>
        <span>Le véritable pain syro-libanais</span>
        <span className={styles.topBarCenter}>Façonné en France</span>
        <a href="#contact">Pour les professionnels</a>
      </div>

      <SiteHeader />

      <main id="contenu">
        <section className={styles.hero} id="accueil">
          <div className={styles.heroOrnament} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span /> Boulangerie syro-libanaise
              </p>
              <h1>
                Le goût du Levant,
                <em> tout simplement.</em>
              </h1>
              <p className={styles.heroLead}>
                Un pain tendre, vivant et généreux. Une recette de famille
                façonnée ici, avec le goût de là-bas.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#nos-pains">
                  Découvrir nos pains <ArrowIcon />
                </a>
                <a className={styles.textLink} href="#notre-histoire">
                  Notre histoire <span aria-hidden="true">↗</span>
                </a>
              </div>
              <ul className={styles.heroDetails} aria-label="Les essentiels Alepin">
                <li>
                  <span>01</span> Peu d’ingrédients
                </li>
                <li>
                  <span>02</span> Geste précis
                </li>
                <li>
                  <span>03</span> Fabriqué en France
                </li>
              </ul>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroSun} aria-hidden="true" />
              <div className={styles.heroImageFrame}>
                <Image
                  src={assetPath("/images/hero-flatbread.jpg")}
                  alt="Pains du Levant servis dans un plat en cuivre"
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
                  <text>
                    <textPath href="#sealPath">
                      À GARNIR • À TREMPER • À PARTAGER •
                    </textPath>
                  </text>
                </svg>
                <WheatIcon />
              </div>
              <div className={styles.heroNote}>
                <span>Notre essentiel</span>
                <strong>Le pain alepin</strong>
              </div>
            </div>
          </div>
          <a className={styles.scrollCue} href="#notre-histoire" aria-label="Découvrir la suite">
            <span /> Faire défiler
          </a>
        </section>

        <div className={styles.ticker} aria-label="Spécialités Alepin">
          <div>
            <span>Pain pita</span><i>✦</i>
            <span>Mana’eesh</span><i>✦</i>
            <span>Kaak</span><i>✦</i>
            <span>Mezzés</span><i>✦</i>
            <span>Douceurs d’Orient</span>
          </div>
        </div>

        <section className={styles.storyIntro} id="notre-histoire">
          <div className={styles.sectionNumber}>01 — Notre histoire</div>
          <div className={styles.storyHeading}>
            <p className={styles.arabicAccent} lang="ar" dir="rtl">خبز يجمعنا</p>
            <h2>Notre pain a<br /> une <em>mémoire.</em></h2>
          </div>
          <div className={styles.storyBody}>
            <p>
              Celle des fournils d’Alep, des repas qui s’étirent et du pain
              que l’on rompt au milieu de la table. Alepin fait vivre ce geste
              avec une exigence contemporaine.
            </p>
            <p>
              Nous travaillons une pâte simple, souple et expressive. Chaque
              pain est pensé pour accompagner le quotidien sans jamais le
              rendre ordinaire.
            </p>
            <a className={styles.underlinedLink} href="#savoir-faire">
              Voir notre savoir-faire <ArrowIcon />
            </a>
          </div>
          <div className={styles.storyMark} aria-hidden="true">A</div>
        </section>

        <section className={styles.products} id="nos-pains">
          <div className={styles.productsHeader}>
            <div>
              <p className={styles.sectionNumber}>02 — Nos pains</p>
              <h2>Une gamme faite<br /> pour <em>toutes les tables.</em></h2>
            </div>
            <p>
              Moelleux ou légèrement toastés, nos pains s’invitent partout :
              du déjeuner pressé au dîner qui dure.
            </p>
          </div>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <article className={`${styles.productCard} ${product.className}`} key={product.name}>
                <a href="#contact">
                  <div className={styles.productImage}>
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes={product.sizes}
                    />
                    <span className={styles.productNumber}>{product.number}</span>
                    <span className={styles.productAction}>Nous contacter</span>
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
            ))}
          </div>
        </section>

        <section className={styles.imageStatement} aria-label="Notre philosophie">
          <Image
            src={assetPath("/images/bread-basket.jpg")}
            alt="Pain traditionnel disposé dans une corbeille en osier"
            fill
            sizes="100vw"
          />
          <div className={styles.imageStatementShade} />
          <div className={styles.imageStatementCopy}>
            <p>La recette Alepin</p>
            <h2>Une pâte.<br /> Du feu. <em>Du temps.</em></h2>
          </div>
          <p className={styles.imageStatementNote}>
            Peu d’ingrédients.<br /> Beaucoup de savoir-faire.
          </p>
        </section>

        <section className={styles.craft} id="savoir-faire">
          <div className={styles.craftVisual}>
            <div className={styles.craftImage}>
              <Image
                src={assetPath("/images/dough-craft.jpg")}
                alt="Boulanger tenant une pâte fraîche entre ses mains"
                fill
                sizes="(max-width: 900px) 90vw, 44vw"
              />
            </div>
            <div className={styles.craftCaption}>
              <span>Le geste</span>
              <strong>Souple par nature</strong>
            </div>
            <span className={styles.craftFlour} aria-hidden="true">✦</span>
          </div>

          <div className={styles.craftContent}>
            <p className={styles.sectionNumber}>03 — Notre savoir-faire</p>
            <h2>Le bon pain ne se presse pas. <em>Il s’écoute.</em></h2>
            <p className={styles.craftLead}>
              De la souplesse de la pâte à la chaleur du four, chaque étape
              compte. C’est ce soin invisible qui donne aux pains Alepin leur
              texture légère et leur goût délicatement toasté.
            </p>
            <ol className={styles.processList}>
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.values}>
          <div className={styles.valuesTitle}>
            <p className={styles.sectionNumber}>04 — Ce qui nous guide</p>
            <h2>La tradition,<br /> les yeux <em>ouverts.</em></h2>
          </div>
          <div className={styles.valuesGrid}>
            <article>
              <span className={styles.valueIcon} aria-hidden="true">
                <svg viewBox="0 0 40 40"><path d="M20 4v32M7 20h26M11 11l18 18M29 11 11 29" /></svg>
              </span>
              <p>01</p><h3>Authentique</h3>
              <p>Des recettes héritées du Levant, dont nous préservons l’essentiel.</p>
            </article>
            <article>
              <span className={styles.valueIcon} aria-hidden="true">
                <svg viewBox="0 0 40 40"><path d="M7 27c8 0 11-6 13-14 2 8 5 14 13 14-7 1-11 4-13 9-2-5-6-8-13-9Z" /></svg>
              </span>
              <p>02</p><h3>Généreux</h3>
              <p>Un pain fait pour accueillir, rassembler et transformer chaque repas en un moment partagé.</p>
            </article>
            <article>
              <span className={styles.valueIcon} aria-hidden="true">
                <svg viewBox="0 0 40 40"><path d="M20 34c9-5 14-12 14-21-9 0-15 5-17 14M20 34c-7-4-11-9-11-16 7 0 11 4 12 10" /></svg>
              </span>
              <p>03</p><h3>Curieux</h3>
              <p>Fidèles au geste, libres dans les usages : nous imaginons le pain levantin d’aujourd’hui.</p>
            </article>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contactIntro}>
            <p className={styles.sectionNumber}>05 — Parlons-nous</p>
            <p>Restaurateur, épicier, distributeur<br /> ou simplement gourmand ?</p>
          </div>
          <div className={styles.contactMain}>
            <p className={styles.contactArabic} lang="ar" dir="rtl">أهلاً وسهلاً</p>
            <h2>Mettons le pain<br /> au <em>milieu de la table.</em></h2>
            <div className={styles.contactActions}>
              <a
                className={styles.contactButton}
                href="mailto:amareine.europe@gmail.com?subject=Demande%20Alepin"
              >
                Écrire à l’équipe <ArrowIcon />
              </a>
              <a className={styles.phoneLink} href="tel:+33357850234">
                +33 (0)3 57 85 02 34
              </a>
            </div>
          </div>
          <div className={styles.contactAddress}>
            <span>Nous trouver</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=12+Rue+du+Stade+57730+Folschviller"
              target="_blank"
              rel="noreferrer"
            >
              12 rue du Stade<br /> 57730 Folschviller, France
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Brand />
          <p>Le pain du Levant,<br /> façonné en France.</p>
          <nav aria-label="Navigation de pied de page">
            <a href="#nos-pains">Nos pains</a>
            <a href="#notre-histoire">Notre histoire</a>
            <a href="#savoir-faire">Savoir-faire</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className={styles.backToTop} href="#accueil">
            Haut de page <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Alepin. Tous droits réservés.</span>
          <span>Le goût du voyage, à portée de main.</span>
        </div>
      </footer>
    </div>
  );
}
