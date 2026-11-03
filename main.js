// Path of the profile photo inside this folder, e.g. "photo.jpg"; empty shows the initials.
const PHOTO = "photo.jpg";

const TEXT = {
  ckb: {
    "doc.title": "مەحموود خدر — بایۆپرۆگرامەر",
    "hero.name": "مەحموود خدر",
    "nav.projects": "پڕۆژەکان",
    "nav.skills": "شارەزایی",
    "nav.research": "توێژینەوە",
    "nav.contact": "پەیوەندی",
    "hero.eyebrow": "بایۆپرۆگرامەر، ڕانیە",
    "hero.title": "سیستەمی دیجیتاڵی بۆ زانکۆ و زانستی ژیان دروست دەکەم.",
    "hero.lead": "خوێندکاری بایۆلۆجی لە زانکۆی ڕاپەڕین و پەرەپێدەری وێب و مۆبایل. ماڵپەڕ و ئەپی فرەزمانی (کوردی، ئینگلیزی و عەرەبی) دروست دەکەم، لە داتابەیسەوە تا بڵاوکردنەوە لە App Store و Google Play.",
    "hero.cta": "پڕۆژەکان ببینە",
    "projects.title": "پڕۆژەکان",
    "projects.lead": "هەموویان لە سەرەتاوە تا کۆتایی بە خۆم دروست کراون: دیزاین، باکئێند، ئەپ و سێرڤەر.",
    "skills.title": "شارەزایی",
    "research.title": "توێژینەوەی زانستی",
    "research.name": "نانۆپارتیکڵەکانی MgO–ZnO–CuO و ڕووەکی Astragalus gummifer",
    "research.body": "توێژینەوەی دەرچوونی بەشی بایۆلۆجی لە زانکۆی ڕاپەڕین، لەگەڵ کۆکردنەوەی سەرچاوەی زانستی پشتڕاستکراوە و پۆستەری کارکردن.",
    "contact.title": "پەیوەندی",
    "contact.body": "بۆ پڕۆژەیەکی نوێ، هاوکاری یان پرسیار، نامەم بۆ بنێرە.",
    "footer": "© ٢٠٢٦ مەحموود خدر، ڕانیە، هەرێمی کوردستان",
    live: "کارا",
    wip: "لە کاردایە",
    stats: [
      ["٨", "پڕۆژەی سەرەکی"],
      ["٥", "ماڵپەڕی کارا"],
      ["٣", "ئەپی Flutter"],
      ["٣+", "زمان لە هەر پڕۆژەیەک"],
    ],
  },
  en: {
    "doc.title": "Mahmood Khdir — Bioprogrammer",
    "hero.name": "Mahmood Khdir",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.research": "Research",
    "nav.contact": "Contact",
    "hero.eyebrow": "Bioprogrammer, Ranya",
    "hero.title": "I build digital systems for universities and the life sciences.",
    "hero.lead": "Biology student at the University of Raparin and web & mobile developer. I build multilingual sites and apps (Kurdish, English and Arabic), from the database to release on the App Store and Google Play.",
    "hero.cta": "See the projects",
    "projects.title": "Projects",
    "projects.lead": "Each one built end to end by me: design, backend, app and server.",
    "skills.title": "Skills",
    "research.title": "Research",
    "research.name": "MgO–ZnO–CuO nanoparticles and Astragalus gummifer",
    "research.body": "Undergraduate thesis in Biology at the University of Raparin, with a verified reference collection and a workflow poster.",
    "contact.title": "Contact",
    "contact.body": "For a new project, a collaboration or a question, send me a message.",
    "footer": "© 2026 Mahmood Khdir, Ranya, Kurdistan Region",
    live: "Live",
    wip: "In progress",
    stats: [
      ["8", "major projects"],
      ["5", "live websites"],
      ["3", "Flutter apps"],
      ["3+", "languages per project"],
    ],
  },
};

const PROJECTS = [
  {
    status: "live",
    title: { ckb: "سیستەمی بەشەناوخۆییەکانی زانکۆی ڕاپەڕین", en: "UoR Dormitory System" },
    body: {
      ckb: "بەڕێوەبردنی بەشەناوخۆییەکان: وەرگرتنی خوێندکار، ژوورەکان، ڕاپۆرتی PDF و ئاگادارکردنەوە. وێب و ئەپی iOS و Android.",
      en: "Dormitory management: student admission, rooms, PDF reports and push notifications. Web plus iOS and Android apps.",
    },
    tags: ["Flask", "PostgreSQL", "Redis", "Flutter", "Firebase"],
  },
  {
    status: "live",
    title: { ckb: "UOR Air Quality", en: "UOR Air Quality" },
    body: {
      ckb: "چاودێریی کوالیتیی هەوا بۆ ناوچەکە، بە ئەپی مۆبایل کە لە App Store بڵاوکراوەتەوە.",
      en: "Air-quality monitoring for the region, with a mobile app published on the App Store.",
    },
    tags: ["Django", "Flutter", "Docker"],
  },
  {
    status: "live",
    title: { ckb: "سەنتەری توێژینەوەی گەرمبوونی جیهانی", en: "Global Warming Research Center" },
    body: {
      ckb: "ماڵپەڕی سەنتەر بە سێ زمان، لەگەڵ ٢٤ ئەپی Google Earth Engine لە بەشی GeoLab.",
      en: "The center's trilingual website, with GeoLab: 24 Google Earth Engine apps.",
    },
    tags: ["Wagtail", "Django", "Earth Engine"],
    link: "https://gwrc.uor.edu.krd",
  },
  {
    status: "live",
    title: { ckb: "سەنتەری توێژینەوەی زانکۆی ڕاپەڕین", en: "UoR Research Center" },
    body: {
      ckb: "ماڵپەڕی بەڕێوەبەرایەتیی گشتیی سەنتەری توێژینەوە، بە کوردی، ئینگلیزی و عەرەبی.",
      en: "Website of the General Directorate of Research Center, in Kurdish, English and Arabic.",
    },
    tags: ["Wagtail", "Django", "PostgreSQL"],
    link: "https://research.dormitory-uor.online",
  },
  {
    status: "live",
    title: { ckb: "کتێبخانەی ئەلیکترۆنیی کۆلێژی زانست", en: "College of Science e-Library" },
    body: {
      ckb: "کتێبخانەی سەرچاوە زانستییەکان بە هەشت زمان، لەگەڵ پانێڵی بەڕێوەبردن بۆ ستاف.",
      en: "A catalogue of scientific resources in eight languages, with an admin panel for staff.",
    },
    tags: ["Laravel", "PHP", "SQLite"],
    link: "https://dormitory-uor.online",
  },
  {
    status: "live",
    title: { ckb: "ئەتڵەسی مێرووناسی", en: "Atlas of Entomology" },
    body: {
      ckb: "سەرچاوەیەکی فێرکاریی کراوە بۆ مێرووناسی، لەگەڵ تاقیکردنەوە و لیستی باشترینەکان.",
      en: "An open learning resource for entomology, with quizzes and a leaderboard.",
    },
    tags: ["JavaScript", "Supabase", "GitHub Actions"],
    link: "https://www.entomo.online",
  },
  {
    status: "live",
    title: { ckb: "DNA Analytics", en: "DNA Analytics" },
    body: {
      ckb: "شیکردنەوەی فایلی FASTA: پێکهاتەی بنکەکان، GC، چوارچێوەی خوێندنەوە، کۆدۆن و بەراوردی ڕیزبەندی.",
      en: "FASTA analysis: base composition, GC content, reading frames, codon usage and sequence comparison.",
    },
    tags: ["Python", "Bioinformatics", "Docker"],
  },
  {
    status: "wip",
    title: { ckb: "عەقار", en: "aqar" },
    body: {
      ckb: "پلاتفۆرمی خانووبەرە: ئاژانس، بەشداریکردن و نەخشە، بە ئەپی مۆبایل.",
      en: "A real-estate platform: agencies, subscriptions and maps, with a mobile app.",
    },
    tags: ["Django REST", "Flutter", "Redis"],
  },
];

const SKILLS = [
  { title: { ckb: "باکئێند", en: "Backend" }, items: "Python, Django, Wagtail, Flask, Laravel, PostgreSQL, Redis" },
  { title: { ckb: "مۆبایل", en: "Mobile" }, items: "Flutter, Dart, Firebase, App Store, Google Play, Xcode Cloud" },
  { title: { ckb: "سێرڤەر", en: "DevOps" }, items: "Docker, Nginx, Cloudflare, GitHub Actions, Linux" },
  { title: { ckb: "زانست", en: "Science" }, items: "Biology, Bioinformatics, Google Earth Engine, GIS" },
];

const CONTACTS = [
  { icon: "whatsapp", label: "WhatsApp", value: "+964 770 469 2000", phone: true, href: "https://wa.me/9647704692000", color: "#1a9e4b" },
  { icon: "viber", label: "Viber", value: "+964 770 469 2000", phone: true, href: "viber://chat?number=%2B9647704692000", color: "#7360f2" },
  { icon: "telegram", label: "Telegram", value: "+964 750 708 7901", phone: true, href: "https://t.me/+9647507087901", color: "#1c8ad6" },
  { icon: "facebook", label: "Facebook", value: "mahmod.faqe", href: "https://www.facebook.com/mahmod.faqe", color: "#1877f2" },
  { icon: "messenger", label: "Messenger", value: "mahmod.faqe", href: "https://m.me/mahmod.faqe", color: "linear-gradient(135deg, #0a7cff, #a334fa)" },
  { icon: "snapchat", label: "Snapchat", value: "mahmod.faqe", href: "https://www.snapchat.com/add/mahmod.faqe", color: "#fffc00", ink: "#1c1f1d" },
  { icon: "mail", label: { ckb: "ئیمەیڵ", en: "Email" }, value: "mahmodfaqe2@gmail.com", href: "mailto:mahmodfaqe2@gmail.com", color: "#3a7c62" },
  { icon: "github", label: "GitHub", value: "mahmodfaqe", href: "https://github.com/mahmodfaqe", color: "#24292f" },
];

const ICONS = {
  whatsapp: '<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path fill="currentColor" stroke="none" d="M9.2 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3l-1.9-.9c-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.3 0-.5z"/>',
  viber: '<path d="M12 3c-4.4 0-7.7 1.3-8.3 5.6-.3 2.1-.3 4.2.3 6.1.5 1.5 1.5 2.5 3 3V21l2.8-2.6c.7.1 1.4.1 2.2.1 4.4 0 7.7-1.3 8.3-5.6.3-2.1.3-4.2-.3-6.1C19.3 4.3 16.5 3 12 3z"/><path fill="currentColor" stroke="none" d="M9.6 7.4c.3-.3.8-.3 1.1 0l.9 1.2c.2.3.2.7-.1 1l-.4.4c.4.9 1.1 1.6 2 2l.4-.4c.3-.3.7-.3 1-.1l1.2.9c.3.3.3.8 0 1.1l-.5.5c-.6.6-1.5.7-2.3.3-1.7-.9-3.1-2.3-4-4-.4-.8-.3-1.7.3-2.3z"/>',
  telegram: '<path fill="currentColor" stroke="none" d="M21.4 3.6 2.8 10.8c-1.3.5-1.3 1.3-.2 1.6l4.7 1.5 1.8 5.5c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.3-.5-1.9-1.5-1.5zM9.1 13.9l8.7-5.5c.4-.3.8-.1.5.2l-7.3 6.6-.3 3.3z"/>',
  facebook: '<path fill="currentColor" stroke="none" d="M14 8h2.5V4.5H14c-2.8 0-4.5 1.8-4.5 4.6V11H7v3.5h2.5V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.4c0-.9.3-1.4.9-1.4z"/>',
  messenger: '<path d="M12 3C6.9 3 3 6.7 3 11.5c0 2.6 1.1 4.9 3 6.5v3l2.9-1.6c1 .3 2 .4 3.1.4 5.1 0 9-3.7 9-8.5S17.1 3 12 3z"/><path fill="currentColor" stroke="none" d="M6.8 14.3 10 10.8l2.3 2.3 4.9-2.6-3.3 3.6-2.3-2.3z"/>',
  snapchat: '<path fill="#fff" stroke-width="1.4" d="M12 3.5c-2.6 0-4.5 2-4.5 4.6v2.1l-1.2-.4c-.6-.2-1 .5-.5.9.5.4 1.2.7 1.7.9-.6 1.6-1.8 2.8-3.3 3.4-.4.2-.3.7.1.8.8.2 1.3.4 1.5.8.1.3.1.8.5.8.6 0 1.5-.2 2.4.3.9.5 1.7 1.3 3.3 1.3s2.4-.8 3.3-1.3c.9-.5 1.8-.3 2.4-.3.4 0 .4-.5.5-.8.2-.4.7-.6 1.5-.8.4-.1.5-.6.1-.8-1.5-.6-2.7-1.8-3.3-3.4.5-.2 1.2-.5 1.7-.9.5-.4.1-1.1-.5-.9l-1.2.4V8.1c0-2.6-1.9-4.6-4.5-4.6z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
};

const phoneText = (s, lang) =>
  (lang === "ckb" ? s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]) : s).replace(/ /g, "\u00a0");

const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

function render(lang) {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ckb" ? "rtl" : "ltr";
  document.title = t["doc.title"];
  document.getElementById("langBtn").textContent = lang === "ckb" ? "EN" : "کوردی";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t[node.dataset.i18n];
  });

  const avatar = document.getElementById("avatar");
  if (PHOTO) {
    const img = el("img");
    img.src = PHOTO;
    img.alt = t["hero.name"];
    avatar.replaceChildren(img);
  } else {
    avatar.textContent = "MK";
    avatar.setAttribute("aria-hidden", "true");
  }

  const stats = document.getElementById("stats");
  stats.replaceChildren(...t.stats.map(([n, label]) => {
    const li = el("li");
    li.append(el("strong", null, n), el("span", null, label));
    return li;
  }));

  const grid = document.getElementById("projectGrid");
  grid.replaceChildren(...PROJECTS.map((p) => {
    const card = el("article", "card");
    card.append(
      el("span", p.status === "wip" ? "badge wip" : "badge", t[p.status]),
      el("h3", null, p.title[lang]),
      el("p", null, p.body[lang]),
    );
    if (p.link) {
      const a = el("a", "link", p.link.replace(/^https:\/\/(www\.)?/, ""));
      a.href = p.link;
      a.target = "_blank";
      a.rel = "noopener";
      card.append(a);
    }
    const tags = el("div", "tags");
    tags.append(...p.tags.map((tag) => el("span", "tag", tag)));
    card.append(tags);
    return card;
  }));

  const skills = document.getElementById("skillGroups");
  skills.replaceChildren(...SKILLS.map((s) => {
    const box = el("div", "skill-group");
    box.append(el("h3", null, s.title[lang]), el("p", null, s.items));
    box.lastChild.dir = "ltr";
    return box;
  }));
  const contacts = document.getElementById("contactGrid");
  contacts.replaceChildren(...CONTACTS.map((c) => {
    const card = el("a", "contact-card");
    card.href = c.href;
    if (c.href.startsWith("https:")) {
      card.target = "_blank";
      card.rel = "noopener";
    }
    const icon = el("span", "contact-icon");
    icon.style.background = c.color;
    if (c.ink) icon.style.color = c.ink;
    icon.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[c.icon]}</svg>`;
    const value = el("span", "contact-value", c.phone ? phoneText(c.value, lang) : c.value);
    value.dir = "ltr";
    const text = el("span", "contact-text");
    text.append(el("span", "contact-label", typeof c.label === "string" ? c.label : c.label[lang]), value);
    card.append(icon, text);
    return card;
  }));
}

let current = "en";
try { current = localStorage.getItem("lang") || "en"; } catch (e) {}
render(current);

document.getElementById("langBtn").addEventListener("click", () => {
  current = current === "ckb" ? "en" : "ckb";
  try { localStorage.setItem("lang", current); } catch (e) {}
  render(current);
});
