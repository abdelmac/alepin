export const localeOptions = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "ar", label: "العربية" },
] as const;

export type Locale = (typeof localeOptions)[number]["value"];

export function isLocale(value: string | null): value is Locale {
  return localeOptions.some((option) => option.value === value);
}

export const translations = {
  fr: {
    meta: {
      title: "Alepin — Le pain du Levant, façonné en France",
      description:
        "Découvrez Alepin, le véritable pain syro-libanais : tendre, généreux et façonné en France dans le respect du geste traditionnel.",
    },
    skipLink: "Aller au contenu",
    topBar: {
      authenticBread: "Le véritable pain syro-libanais",
      craftedInFrance: "Façonné en France",
      professionals: "Pour les professionnels",
    },
    header: {
      languageSelector: "Choisir la langue",
      logoAria: "Alepin, accueil",
      mainNavAria: "Navigation principale",
      mobileNavAria: "Navigation mobile",
      findUs: "Nous trouver",
      openMenuAria: "Ouvrir le menu",
      closeMenuAria: "Fermer le menu",
      mobileTagline: "Le pain du Levant, façonné en France.",
      nav: {
        breads: "Nos pains",
        story: "Notre histoire",
        craft: "Savoir-faire",
        contact: "Contact",
      },
    },
    hero: {
      eyebrow: "Boulangerie syro-libanaise",
      title: { lead: "Le goût du Levant,", emphasis: "tout simplement." },
      lead:
        "Un pain tendre, vivant et généreux. Une recette de famille façonnée ici, avec le goût de là-bas.",
      discoverBreads: "Découvrir nos pains",
      ourStory: "Notre histoire",
      essentialsAria: "Les essentiels Alepin",
      essentials: ["Peu d’ingrédients", "Geste précis", "Fabriqué en France"],
      imageAlt: "Pains du Levant servis dans un plat en cuivre",
      seal: "À GARNIR • À TREMPER • À PARTAGER •",
      featuredLabel: "Notre essentiel",
      featuredName: "Le pain alepin",
      scrollAria: "Découvrir la suite",
      scroll: "Faire défiler",
    },
    ticker: {
      ariaLabel: "Spécialités Alepin",
      items: ["Pain pita", "Mana’eesh", "Kaak", "Maarouk", "Douceurs d’Orient"],
    },
    story: {
      sectionLabel: "01 — Notre histoire",
      arabic: "خبز يجمعنا",
      title: { first: "Notre pain a", second: "une", emphasis: "mémoire." },
      paragraphOne:
        "Celle des fournils d’Alep, des repas qui s’étirent et du pain que l’on rompt au milieu de la table. Alepin fait vivre ce geste avec une exigence contemporaine.",
      paragraphTwo:
        "Nous travaillons une pâte simple, souple et expressive. Chaque pain est pensé pour accompagner le quotidien sans jamais le rendre ordinaire.",
      craftLink: "Voir notre savoir-faire",
    },
    products: {
      sectionLabel: "02 — Nos pains",
      title: { first: "Une gamme faite", second: "pour", emphasis: "toutes les tables." },
      introduction:
        "Moelleux ou légèrement toastés, nos pains s’invitent partout : du déjeuner pressé au dîner qui dure.",
      contactAction: "Nous contacter",
      items: [
        {
          name: "Le classique",
          arabic: "خبز عربي",
          description:
            "Souple, léger et délicatement toasté. Le pain de tous les jours, pensé pour être garni, trempé ou partagé.",
          alt: "Pains pita gonflés empilés sur un plateau",
        },
        {
          name: "Le pain fin",
          arabic: "خبز رقيق",
          description:
            "Une feuille tendre et aérienne, idéale pour les wraps, les sandwichs roulés et les grandes tablées.",
          alt: "Pain plat fin plié sur une planche en bois",
        },
        {
          name: "Le sésame",
          arabic: "بالسمسم",
          description:
            "Une croûte dorée, des graines généreuses et ce parfum grillé qui appelle la première bouchée.",
          alt: "Pains dorés couverts de graines",
        },
      ],
    },
    philosophy: {
      ariaLabel: "Notre philosophie",
      imageAlt: "Pain traditionnel disposé dans une corbeille en osier",
      label: "La recette Alepin",
      title: { first: "Une pâte.", second: "Du feu.", emphasis: "Du temps." },
      note: { first: "Peu d’ingrédients.", second: "Beaucoup de savoir-faire." },
    },
    craft: {
      imageAlt: "Boulanger tenant une pâte fraîche entre ses mains",
      captionLabel: "Le geste",
      captionValue: "Souple par nature",
      sectionLabel: "03 — Notre savoir-faire",
      title: { lead: "Le bon pain ne se presse pas.", emphasis: "Il s’écoute." },
      introduction:
        "De la souplesse de la pâte à la chaleur du four, chaque étape compte. C’est ce soin invisible qui donne aux pains Alepin leur texture légère et leur goût délicatement toasté.",
      steps: [
        {
          title: "Pétrir",
          text: "Une pâte simple, pétrie avec précision pour obtenir cette texture douce et souple.",
        },
        {
          title: "Laisser vivre",
          text: "Le temps fait son œuvre. La pâte repose, développe ses arômes et gagne en légèreté.",
        },
        {
          title: "Saisir",
          text: "Une cuisson vive révèle les notes toastées et forme la poche si caractéristique du pain levantin.",
        },
      ],
    },
    values: {
      sectionLabel: "04 — Ce qui nous guide",
      title: { first: "La tradition,", second: "les yeux", emphasis: "ouverts." },
      items: [
        {
          title: "Authentique",
          text: "Des recettes héritées du Levant, dont nous préservons l’essentiel.",
        },
        {
          title: "Généreux",
          text: "Un pain fait pour accueillir, rassembler et transformer chaque repas en un moment partagé.",
        },
        {
          title: "Curieux",
          text: "Fidèles au geste, libres dans les usages : nous imaginons le pain levantin d’aujourd’hui.",
        },
      ],
    },
    contact: {
      sectionLabel: "05 — Parlons-nous",
      audience: {
        first: "Restaurateur, épicier, distributeur",
        second: "ou simplement gourmand ?",
      },
      arabicGreeting: "أهلاً وسهلاً",
      title: { first: "Mettons le pain", second: "au", emphasis: "milieu de la table." },
      emailButton: "Écrire à l’équipe",
      emailSubject: "Demande Alepin",
      phone: "+33 (0)3 57 85 02 34",
      findUs: "Nous trouver",
      address: ["12 rue du Stade", "57730 Folschviller, France"],
    },
    footer: {
      logoAria: "Alepin, retour à l’accueil",
      tagline: { first: "Le pain du Levant,", second: "façonné en France." },
      navAria: "Navigation de pied de page",
      backToTop: "Haut de page",
      copyright: "© 2026 Alepin. Tous droits réservés.",
      closingLine: "Le goût du voyage, à portée de main.",
    },
  },
  en: {
    meta: {
      title: "Alepin — Levantine bread, crafted in France",
      description:
        "Discover Alepin, authentic Syrian-Lebanese bread: soft, generous and crafted in France with respect for tradition.",
    },
    skipLink: "Skip to content",
    topBar: {
      authenticBread: "Authentic Syrian-Lebanese bread",
      craftedInFrance: "Crafted in France",
      professionals: "For professionals",
    },
    header: {
      languageSelector: "Choose language",
      logoAria: "Alepin, home",
      mainNavAria: "Main navigation",
      mobileNavAria: "Mobile navigation",
      findUs: "Find us",
      openMenuAria: "Open menu",
      closeMenuAria: "Close menu",
      mobileTagline: "Levantine bread, crafted in France.",
      nav: {
        breads: "Our breads",
        story: "Our story",
        craft: "Our craft",
        contact: "Contact",
      },
    },
    hero: {
      eyebrow: "Syrian-Lebanese bakery",
      title: { lead: "The taste of the Levant,", emphasis: "simply." },
      lead:
        "Soft, full of life and generous. A family recipe crafted here, carrying the taste of the Levant.",
      discoverBreads: "Discover our breads",
      ourStory: "Our story",
      essentialsAria: "Alepin essentials",
      essentials: ["Few ingredients", "Precise craftsmanship", "Made in France"],
      imageAlt: "Levantine breads served in a copper dish",
      seal: "TO FILL • TO DIP • TO SHARE •",
      featuredLabel: "Our staple",
      featuredName: "Alepin bread",
      scrollAria: "Discover what comes next",
      scroll: "Scroll",
    },
    ticker: {
      ariaLabel: "Alepin specialities",
      items: ["Pita bread", "Mana’eesh", "Kaak", "Maarouk", "Sweets from the Levant"],
    },
    story: {
      sectionLabel: "01 — Our story",
      arabic: "خبز يجمعنا",
      title: { first: "Our bread has", second: "a", emphasis: "memory." },
      paragraphOne:
        "It carries the memory of Aleppo’s bakehouses, of meals that linger, and of bread broken at the centre of the table. Alepin keeps this ritual alive with contemporary precision.",
      paragraphTwo:
        "We work with a simple, supple and expressive dough. Every bread is made to accompany everyday life without ever making it ordinary.",
      craftLink: "Explore our craft",
    },
    products: {
      sectionLabel: "02 — Our breads",
      title: { first: "A range made", second: "for", emphasis: "every table." },
      introduction:
        "Soft or lightly toasted, our breads belong everywhere: from a quick lunch to a dinner that lingers.",
      contactAction: "Contact us",
      items: [
        {
          name: "The classic",
          arabic: "خبز عربي",
          description: "Soft, light and delicately toasted. The everyday bread, made to be filled, dipped or shared.",
          alt: "Puffed pita breads stacked on a tray",
        },
        {
          name: "Thin flatbread",
          arabic: "خبز رقيق",
          description: "A tender, airy flatbread, ideal for wraps, rolled sandwiches and large shared meals.",
          alt: "Thin flatbread folded on a wooden board",
        },
        {
          name: "Sesame",
          arabic: "بالسمسم",
          description: "A golden crust, a generous scattering of seeds and a toasted aroma that invites the first bite.",
          alt: "Golden breads covered with seeds",
        },
      ],
    },
    philosophy: {
      ariaLabel: "Our philosophy",
      imageAlt: "Traditional bread arranged in a wicker basket",
      label: "The Alepin recipe",
      title: { first: "One dough.", second: "Fire.", emphasis: "Time." },
      note: { first: "Few ingredients.", second: "Plenty of craftsmanship." },
    },
    craft: {
      imageAlt: "Baker holding fresh dough in both hands",
      captionLabel: "The touch",
      captionValue: "Naturally supple",
      sectionLabel: "03 — Our craft",
      title: { lead: "Good bread cannot be rushed.", emphasis: "It must be listened to." },
      introduction:
        "From the suppleness of the dough to the heat of the oven, every step matters. This unseen care gives Alepin breads their light texture and delicately toasted flavour.",
      steps: [
        { title: "Knead", text: "A simple dough, kneaded with precision to achieve its soft, supple texture." },
        { title: "Let it live", text: "Time works its magic. The dough rests, develops its aromas and becomes lighter." },
        { title: "Bake hot", text: "A burst of heat brings out the toasted notes and forms the pocket so characteristic of Levantine bread." },
      ],
    },
    values: {
      sectionLabel: "04 — What guides us",
      title: { first: "Tradition,", second: "with", emphasis: "eyes open." },
      items: [
        { title: "Authentic", text: "Recipes passed down from the Levant, whose essence we preserve." },
        { title: "Generous", text: "Bread made to welcome, bring people together and turn every meal into a shared moment." },
        { title: "Curious", text: "Faithful to the craft, free in how it is enjoyed: we reimagine Levantine bread for today." },
      ],
    },
    contact: {
      sectionLabel: "05 — Let’s talk",
      audience: { first: "Restaurateur, grocer, distributor", second: "or simply a food lover?" },
      arabicGreeting: "أهلاً وسهلاً",
      title: { first: "Let’s put bread", second: "at the", emphasis: "centre of the table." },
      emailButton: "Write to our team",
      emailSubject: "Alepin enquiry",
      phone: "+33 (0)3 57 85 02 34",
      findUs: "Find us",
      address: ["12 rue du Stade", "57730 Folschviller, France"],
    },
    footer: {
      logoAria: "Alepin, back to home",
      tagline: { first: "Levantine bread,", second: "crafted in France." },
      navAria: "Footer navigation",
      backToTop: "Back to top",
      copyright: "© 2026 Alepin. All rights reserved.",
      closingLine: "The taste of a journey, within reach.",
    },
  },
  de: {
    meta: {
      title: "Alepin — Brot aus der Levante, in Frankreich gefertigt",
      description:
        "Entdecken Sie Alepin, echtes syrisch-libanesisches Brot: weich, großzügig und mit Respekt vor der Tradition in Frankreich gefertigt.",
    },
    skipLink: "Zum Inhalt springen",
    topBar: {
      authenticBread: "Echtes syrisch-libanesisches Brot",
      craftedInFrance: "In Frankreich gefertigt",
      professionals: "Für Geschäftskunden",
    },
    header: {
      languageSelector: "Sprache wählen",
      logoAria: "Alepin, Startseite",
      mainNavAria: "Hauptnavigation",
      mobileNavAria: "Mobile Navigation",
      findUs: "So finden Sie uns",
      openMenuAria: "Menü öffnen",
      closeMenuAria: "Menü schließen",
      mobileTagline: "Brot aus der Levante, in Frankreich gefertigt.",
      nav: {
        breads: "Unsere Brote",
        story: "Unsere Geschichte",
        craft: "Unser Handwerk",
        contact: "Kontakt",
      },
    },
    hero: {
      eyebrow: "Syrisch-libanesische Bäckerei",
      title: { lead: "Der Geschmack der Levante,", emphasis: "ganz einfach." },
      lead:
        "Ein weiches, lebendiges und großzügiges Brot. Ein Familienrezept, hier gefertigt – mit dem Geschmack der Levante.",
      discoverBreads: "Unsere Brote entdecken",
      ourStory: "Unsere Geschichte",
      essentialsAria: "Das Wesentliche von Alepin",
      essentials: ["Wenige Zutaten", "Präzises Handwerk", "Hergestellt in Frankreich"],
      imageAlt: "Brote aus der Levante, serviert in einer Kupferschale",
      seal: "ZUM FÜLLEN • ZUM DIPPEN • ZUM TEILEN •",
      featuredLabel: "Unser Herzstück",
      featuredName: "Alepin-Brot",
      scrollAria: "Mehr entdecken",
      scroll: "Weiter",
    },
    ticker: {
      ariaLabel: "Alepin-Spezialitäten",
      items: ["Pita-Brot", "Mana’eesh", "Kaak", "Maarouk", "Süßes aus dem Orient"],
    },
    story: {
      sectionLabel: "01 — Unsere Geschichte",
      arabic: "خبز يجمعنا",
      title: { first: "Unser Brot hat", second: "ein", emphasis: "Gedächtnis." },
      paragraphOne:
        "Es trägt die Erinnerung an die Backstuben Aleppos, an Mahlzeiten, die lange dauern, und an das Brot, das in der Mitte des Tisches gebrochen wird. Alepin hält diese Geste mit zeitgemäßem Anspruch lebendig.",
      paragraphTwo:
        "Wir arbeiten mit einem einfachen, geschmeidigen und ausdrucksstarken Teig. Jedes Brot ist dafür gedacht, den Alltag zu begleiten, ohne ihn je alltäglich werden zu lassen.",
      craftLink: "Unser Handwerk entdecken",
    },
    products: {
      sectionLabel: "02 — Unsere Brote",
      title: { first: "Eine Auswahl", second: "für", emphasis: "jeden Tisch." },
      introduction:
        "Ob weich oder leicht getoastet, unsere Brote passen zu jedem Anlass: vom schnellen Mittagessen bis zum ausgedehnten Abendessen.",
      contactAction: "Kontakt aufnehmen",
      items: [
        {
          name: "Der Klassiker",
          arabic: "خبز عربي",
          description: "Weich, leicht und fein geröstet. Das Brot für jeden Tag – zum Füllen, Dippen oder Teilen.",
          alt: "Aufgegangene Pitabrote, auf einem Tablett gestapelt",
        },
        {
          name: "Dünnes Fladenbrot",
          arabic: "خبز رقيق",
          description: "Zart und luftig – ideal für Wraps, gerollte Sandwiches und große gemeinsame Tafeln.",
          alt: "Dünnes Fladenbrot, auf einem Holzbrett gefaltet",
        },
        {
          name: "Sesam",
          arabic: "بالسمسم",
          description: "Eine goldene Kruste, reichlich Saaten und dieses Röstaroma, das Lust auf den ersten Bissen macht.",
          alt: "Goldbraune, mit Saaten bestreute Brote",
        },
      ],
    },
    philosophy: {
      ariaLabel: "Unsere Philosophie",
      imageAlt: "Traditionelles Brot in einem Weidenkorb",
      label: "Das Alepin-Rezept",
      title: { first: "Ein Teig.", second: "Feuer.", emphasis: "Zeit." },
      note: { first: "Wenige Zutaten.", second: "Viel Handwerkskunst." },
    },
    craft: {
      imageAlt: "Ein Bäcker hält frischen Teig in beiden Händen",
      captionLabel: "Der Handgriff",
      captionValue: "Von Natur aus geschmeidig",
      sectionLabel: "03 — Unser Handwerk",
      title: { lead: "Gutes Brot lässt sich nicht drängen.", emphasis: "Man muss ihm zuhören." },
      introduction:
        "Von der Geschmeidigkeit des Teigs bis zur Hitze des Ofens zählt jeder Schritt. Diese unsichtbare Sorgfalt verleiht den Alepin-Broten ihre leichte Textur und ihren fein gerösteten Geschmack.",
      steps: [
        { title: "Kneten", text: "Ein einfacher Teig, präzise geknetet für eine weiche, geschmeidige Textur." },
        { title: "Leben lassen", text: "Die Zeit tut ihr Werk. Der Teig ruht, entwickelt seine Aromen und wird immer luftiger." },
        { title: "Heiß backen", text: "Kräftige Hitze bringt die Röstaromen hervor und bildet die für levantinisches Brot so charakteristische Tasche." },
      ],
    },
    values: {
      sectionLabel: "04 — Was uns leitet",
      title: { first: "Tradition,", second: "mit", emphasis: "offenen Augen." },
      items: [
        { title: "Authentisch", text: "Überlieferte Rezepte aus der Levante, deren Wesen wir bewahren." },
        { title: "Großzügig", text: "Brot, das einlädt, Menschen zusammenbringt und jede Mahlzeit zu einem gemeinsamen Moment macht." },
        { title: "Neugierig", text: "Dem Handwerk treu, in der Verwendung frei: Wir denken das Brot der Levante für heute neu." },
      ],
    },
    contact: {
      sectionLabel: "05 — Kommen wir ins Gespräch",
      audience: { first: "Gastronom, Feinkosthändler, Vertriebspartner", second: "oder einfach Genießer?" },
      arabicGreeting: "أهلاً وسهلاً",
      title: { first: "Bringen wir das Brot", second: "in die", emphasis: "Mitte des Tisches." },
      emailButton: "Dem Team schreiben",
      emailSubject: "Alepin-Anfrage",
      phone: "+33 (0)3 57 85 02 34",
      findUs: "So finden Sie uns",
      address: ["12 rue du Stade", "57730 Folschviller, Frankreich"],
    },
    footer: {
      logoAria: "Alepin, zurück zur Startseite",
      tagline: { first: "Brot aus der Levante,", second: "in Frankreich gefertigt." },
      navAria: "Navigation in der Fußzeile",
      backToTop: "Nach oben",
      copyright: "© 2026 Alepin. Alle Rechte vorbehalten.",
      closingLine: "Der Geschmack einer Reise – zum Greifen nah.",
    },
  },
  ar: {
    meta: {
      title: "ألبين — خبز بلاد الشام المصنوع بحِرفية في فرنسا",
      description:
        "اكتشف ألبين، الخبز السوري اللبناني الأصيل: طري وسخيّ، ويُصنع بحِرفية في فرنسا مع احترام التقاليد.",
    },
    skipLink: "الانتقال إلى المحتوى",
    topBar: {
      authenticBread: "الخبز السوري اللبناني الأصيل",
      craftedInFrance: "يُصنع بحِرفية في فرنسا",
      professionals: "للمهنيين",
    },
    header: {
      languageSelector: "اختيار اللغة",
      logoAria: "ألبين، الصفحة الرئيسية",
      mainNavAria: "التنقّل الرئيسي",
      mobileNavAria: "قائمة التنقّل على الهاتف",
      findUs: "اعثر علينا",
      openMenuAria: "فتح القائمة",
      closeMenuAria: "إغلاق القائمة",
      mobileTagline: "خبز بلاد الشام، يُصنع بحِرفية في فرنسا.",
      nav: {
        breads: "خبزنا",
        story: "قصتنا",
        craft: "حرفيتنا",
        contact: "تواصل معنا",
      },
    },
    hero: {
      eyebrow: "مخبز سوري لبناني",
      title: { lead: "مذاق بلاد الشام،", emphasis: "بكل بساطة." },
      lead: "خبز طريّ، نابض بالنكهة وسخيّ. وصفة عائلية نصنعها هنا، بمذاق من هناك.",
      discoverBreads: "اكتشف خبزنا",
      ourStory: "قصتنا",
      essentialsAria: "أهم ما يميّز ألبين",
      essentials: ["مكوّنات قليلة", "حِرفية دقيقة", "صُنع في فرنسا"],
      imageAlt: "أرغفة من خبز بلاد الشام مقدّمة في طبق نحاسي",
      seal: "للحشو • للتغميس • للمشاركة •",
      featuredLabel: "أساس مائدتنا",
      featuredName: "خبز ألبين",
      scrollAria: "اكتشاف المزيد",
      scroll: "مرّر للأسفل",
    },
    ticker: {
      ariaLabel: "تخصّصات ألبين",
      items: ["خبز البيتا", "مناقيش", "كعك", "معروك", "حلويات شرقية"],
    },
    story: {
      sectionLabel: "قصتنا — 01",
      arabic: "خبز يجمعنا",
      title: { first: "لخبزنا", second: "", emphasis: "ذاكرة." },
      paragraphOne:
        "ذاكرة أفران حلب، والوجبات التي تطول، والخبز الذي نتقاسمه في وسط المائدة. تُحيي ألبين هذا التقليد بمعايير عصرية.",
      paragraphTwo:
        "نحضّر عجينة بسيطة ومرنة وذات شخصية. وكل رغيف مصمّم ليرافق يومكم من دون أن يكون عاديًا.",
      craftLink: "اكتشف حرفيتنا",
    },
    products: {
      sectionLabel: "خبزنا — 02",
      title: { first: "تشكيلة صُمّمت", second: "لكل", emphasis: "الموائد." },
      introduction:
        "طريّة أو محمّصة برفق، تحضر أرغفتنا على كل مائدة: من غداء سريع إلى عشاء يمتدّ طويلًا.",
      contactAction: "تواصل معنا",
      items: [
        {
          name: "الكلاسيكي",
          arabic: "خبز عربي",
          description: "طريّ وخفيف ومحمّص برفق. خبز يومي صُمّم للحشو أو التغميس أو المشاركة.",
          alt: "أرغفة خبز البيتا المنتفخة مكدّسة على صينية",
        },
        {
          name: "الخبز الرقيق",
          arabic: "خبز رقيق",
          description: "رغيف رقيق، طري وخفيف، مثالي للّفائف والسندويشات والموائد العامرة.",
          alt: "رغيف رقيق ومسطّح مطويّ على لوح خشبي",
        },
        {
          name: "خبز السمسم",
          arabic: "بالسمسم",
          description: "قشرة ذهبية، وسمسم وفير، ورائحة محمّصة تدعوك إلى تذوّق اللقمة الأولى.",
          alt: "أرغفة ذهبية مغطاة بالسمسم",
        },
      ],
    },
    philosophy: {
      ariaLabel: "فلسفتنا",
      imageAlt: "خبز تقليدي مرتّب في سلة من الخوص",
      label: "وصفة ألبين",
      title: { first: "عجينة.", second: "نار.", emphasis: "ووقت." },
      note: { first: "مكوّنات قليلة.", second: "وحِرفية كبيرة." },
    },
    craft: {
      imageAlt: "خبّاز يمسك عجينة طازجة بين يديه",
      captionLabel: "اللمسة الحِرفية",
      captionValue: "مرن بطبيعته",
      sectionLabel: "حرفيتنا — 03",
      title: { lead: "الخبز الجيد لا يُستعجل.", emphasis: "بل يُصغى إليه." },
      introduction:
        "من مرونة العجينة إلى حرارة الفرن، لكل مرحلة أهميتها. هذه العناية غير المرئية هي ما يمنح خبز ألبين قوامه الخفيف ومذاقه المحمّص برفق.",
      steps: [
        { title: "العجن", text: "عجينة بسيطة تُعجن بدقة للحصول على قوام طري ومرن." },
        { title: "نتركها تنضج", text: "الوقت يصنع أثره. ترتاح العجينة، وتتفتح نكهاتها، وتزداد خفةً." },
        { title: "الخَبز بحرارة عالية", text: "تكشف حرارة الخَبز العالية النكهات المحمّصة، وتشكّل الجيب المميّز لخبز بلاد الشام." },
      ],
    },
    values: {
      sectionLabel: "ما يوجّهنا — 04",
      title: { first: "التقاليد،", second: "برؤية", emphasis: "منفتحة." },
      items: [
        { title: "أصيل", text: "وصفات توارثناها من بلاد الشام، ونحافظ على جوهرها." },
        { title: "سخيّ", text: "خبز صُنع ليستقبل الناس ويجمعهم، وليحوّل كل وجبة إلى لحظة نتشاركها." },
        { title: "متطلّع", text: "أوفياء للحرفة وأحرار في طرق التقديم: نعيد ابتكار خبز بلاد الشام ليلائم يومنا." },
      ],
    },
    contact: {
      sectionLabel: "لنتحدّث — 05",
      audience: {
        first: "هل أنت صاحب مطعم أو متجر أو شركة توزيع،",
        second: "أم أنك ببساطة من عشّاق الطعام؟",
      },
      arabicGreeting: "أهلاً وسهلاً",
      title: { first: "فلنجعل الخبز", second: "في", emphasis: "وسط المائدة." },
      emailButton: "راسل فريقنا",
      emailSubject: "طلب بخصوص ألبين",
      phone: "+33 (0)3 57 85 02 34",
      findUs: "موقعنا",
      address: ["12، شارع دو ستاد", "57730 فولشفيلر، فرنسا"],
    },
    footer: {
      logoAria: "ألبين، العودة إلى الصفحة الرئيسية",
      tagline: { first: "خبز بلاد الشام،", second: "يُصنع بحِرفية في فرنسا." },
      navAria: "التنقّل في تذييل الصفحة",
      backToTop: "العودة إلى الأعلى",
      copyright: "© 2026 ألبين. جميع الحقوق محفوظة.",
      closingLine: "مذاق السفر في متناول اليد.",
    },
  },
} as const;

export type SiteCopy = (typeof translations)[Locale];
