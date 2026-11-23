import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);
const TOOL_PATHS = new Set(["/loot-tables", "/xp-calculator"]);
const ALERT_NAMES = "note|tip|important|warning|caution|abstract|info|todo|success|failure|danger|bug|example|quote";
const ALERT_LINE = new RegExp(`^>\\s*\\[!(?:${ALERT_NAMES})\\]`, "i");
const YOUTUBE_EMBED = /@\[youtube\]\((https?:\/\/[^\s)]+)\)(?:\{[^}\n]*\})?/gi;
const IMAGE = /!\[([^\]]*)\]\(\s*<?([^)\s>]+)>?/g;
const LINK = /(?<!!)\[(?:\\.|[^\]])*\]\(\s*<?([^)\s>]+)>?/g;
const TABLE_ROW = /^\s*\|.+\|\s*$/;
const TABLE_RULE = /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/;
const DANGEROUS_TAG = /<\s*(script|iframe|object|embed|style|link|meta|base|form)\b|javascript\s*:|\son[a-z]+\s*=/i;
const H2_OR_H3 = /^#{2,3}\s+\S/;
const H1 = /^#\s+\S/;

const TERM_PATTERNS = [
  ...[
    "fuck",
    "fucking",
    "fucked",
    "fucker",
    "motherfucker",
    "shit",
    "shitty",
    "bullshit",
    "bitch",
    "bitches",
    "cunt",
    "cunts",
    "asshole",
    "assholes",
    "dickhead",
    "whore",
    "slut",
    "nigger",
    "nigga",
    "faggot",
    "fag",
    "tranny",
    "kike",
    "spic",
    "chink",
    "porn",
    "pornography",
    "putain",
    "salope",
    "connard",
    "connasse",
    "enculé",
    "encule",
    "enculer",
    "nique",
    "niquer",
    "pédé",
    "pede",
    "merde",
    "mierda",
    "puta",
    "puto",
    "joder",
    "coño",
    "cabrón",
    "cabron",
    "maricón",
    "maricon",
    "gilipollas",
    "scheiße",
    "scheisse",
    "fotze",
    "hurensohn",
    "arschloch",
    "ficken",
    "wichser",
    "schwuchtel",
    "siktir",
    "orospu",
    "yarrak",
    "amk",
    "amina",
    "amına",
    "piç",
    "sikeyim",
  ].map((term) => termPattern(term)),
  new RegExp("(?<![\\p{L}\\p{N}])f[^\\p{L}\\p{N}\\n]{0,3}u[^\\p{L}\\p{N}\\n]{0,3}c[^\\p{L}\\p{N}\\n]{0,3}k(?:ing|er|ed)?(?![\\p{L}\\p{N}])", "iu"),
  new RegExp("(?<![\\p{L}\\p{N}])sh[^\\p{L}\\p{N}\\n]{0,3}i[^\\p{L}\\p{N}\\n]{0,3}t(?![\\p{L}\\p{N}])", "iu"),
];

const STOPWORDS = {
  en: words(`
    the and you for your this that with are from have not can when each
    they them their into over more than only other which what where about
    after before just like some there these those been were then does make used
    using once while should would could every first under through because without
    but its our out use how any
  `),
  fr: words(`
    le la les des une un est pas que qui sur par aux vos nos ces son ses vous
    pour avec dans sont cette votre plus aussi chaque tous tout toute toutes
    quand comme mais donc alors entre sous avant après apres peut être etre
    fait faire sans chez très tres dont leur leurs elle elles nous du au ce ne
    se de il on ou et en sa
  `),
  es: words(`
    el los las una un del por con sus pero como más mas hay son esta este estos
    estas está estan están cuando también tambien porque donde puede pueden cada
    todos todas sobre entre después despues antes tiene tienen desde hasta solo
    usted puedes para que de en es se su al lo ya si no mi
  `),
  de: words(`
    der die das und ein eine einer einem einen ist für fur mit auf den dem nicht
    von auch oder aber wenn dann nach über uber unter beim kann können koennen
    wird werden sind jeder jede jeden keine kein mehr noch nur schon durch ohne
    zwischen sowie bevor dass sie als bei zum zur ich wir man des zu im es er
    hat bis vom ihr uns ihm auf dem
  `),
  tr: words(`
    bir ve bu için icin ile gibi kadar sonra veya daha olan olarak ancak çünkü
    cunku değil degil içinde icinde üzerinde uzerinde arasında arasinda sadece
    bunlar şimdi simdi nasıl nasil burada şunlar sunlar önce once tüm tum diye
    bunun üzerine uzerine göre gore varken çok cok hem ise
  `),
  ru: words(`
    что это как для все или при его она они так уже еще ещё нет если только
    когда тоже может есть надо где кто чем был была были будет быть без под
    над про между после перед через более можно нельзя здесь там тогда потом
    потому чтобы этого этот эта эти этот вас вам нас них него нее мне меня
    тебя себе свой своя свои ваш наш мой моя который которая которые которого
    также очень сейчас всегда никогда другой другие один одна всех всего какой
    какая какое какие просто даже почему чтобы этот эту этом этой этих такой
    такая такое такие чем чтобы вас вам них него неё ещё ещё
  `),
};

function words(text) {
  return new Set(text.split(/\s+/).filter(Boolean));
}

function termPattern(term) {
  return new RegExp(`(?<![\\p{L}\\p{N}])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}\\p{N}])`, "iu");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function relPosix(root, abs) {
  return path.relative(root, abs).split(path.sep).join("/");
}

function readUtf8(abs) {
  const bytes = fs.readFileSync(abs);
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes).replace(/^\uFEFF/, "");
  } catch {
    return null;
  }
}

function walk(dir, visit) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(abs, visit);
      continue;
    }
    if (entry.isFile()) visit(abs, entry.name);
  }
}

function maskFences(text) {
  const lines = text.split("\n");
  let inFence = false;
  let fenceChar = "";
  let fenceLength = 0;
  let fenceStart = 0;
  const masked = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const marker = line.trim().match(/^([`~]{3,})/);
    if (marker) {
      const token = marker[1];
      if (!inFence) {
        inFence = true;
        fenceChar = token[0];
        fenceLength = token.length;
        fenceStart = index + 1;
      } else if (token[0] === fenceChar && token.length >= fenceLength) {
        inFence = false;
        fenceChar = "";
        fenceLength = 0;
      }
      masked.push(line);
      continue;
    }
    masked.push(inFence ? " ".repeat(line.length) : line);
  }
  return {
    text: masked.join("\n"),
    unclosedFenceLine: inFence ? fenceStart : 0,
  };
}

function stripInlineCode(line) {
  return line.replace(/`[^`]*`/g, (span) => " ".repeat(span.length));
}

function lineRecords(text) {
  const rawLines = text.split("\n");
  let inFence = false;
  let fenceChar = "";
  let fenceLength = 0;
  let fenceStart = 0;
  const lines = rawLines.map((raw, index) => {
    const marker = raw.trim().match(/^([`~]{3,})/);
    let fenceLine = inFence;
    if (marker) {
      const token = marker[1];
      fenceLine = true;
      if (!inFence) {
        inFence = true;
        fenceChar = token[0];
        fenceLength = token.length;
        fenceStart = index + 1;
      } else if (token[0] === fenceChar && token.length >= fenceLength) {
        inFence = false;
        fenceChar = "";
        fenceLength = 0;
      }
    }
    return {
      number: index + 1,
      raw,
      prose: fenceLine ? "" : stripInlineCode(raw),
      inFence: fenceLine,
    };
  });
  return { unclosedFenceLine: inFence ? fenceStart : 0, lines };
}

function proseText(text) {
  const fenced = maskFences(text).text;
  return fenced
    .replace(/`[^`\n]*`/g, " ")
    .replace(/!\[[^\]]*]\([^)\n]*\)/g, " ")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/@\[youtube]\([^)\n]*\)(?:\{[^}\n]*\})?/gi, " ");
}

function tokensOf(text) {
  return proseText(text).toLowerCase().match(/\p{L}{2,}/gu) || [];
}

function markerScore(tokens, locale) {
  const set = STOPWORDS[locale];
  if (!set) return 0;
  let score = 0;
  for (const token of tokens) {
    if (set.has(token)) score += 1;
  }
  return score;
}

function jaccard(left, right) {
  const a = new Set(left.filter((token) => token.length >= 4));
  const b = new Set(right.filter((token) => token.length >= 4));
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const token of a) {
    if (b.has(token)) shared += 1;
  }
  return shared / (a.size + b.size - shared);
}

function headingCount(text) {
  const records = lineRecords(text);
  let count = 0;
  for (const line of records.lines) {
    if (line.inFence) continue;
    if (H2_OR_H3.test(line.prose.trim())) count += 1;
  }
  return count;
}

function factNumbers(text) {
  const source = proseText(text);
  const found = [];
  const pattern = /(?<!\d)(\d+(?:[.,]\d+)?)\s*%|%\s*(\d+(?:[.,]\d+)?)(?!\d)/g;
  for (const match of source.matchAll(pattern)) {
    const raw = (match[1] || match[2] || "").replace(",", ".");
    if (raw) found.push(raw);
  }
  return found;
}

function wikiSlugs(text) {
  const slugs = [];
  const records = lineRecords(text);
  for (const line of records.lines) {
    if (line.inFence) continue;
    eachMatch(LINK, line.prose, (match) => {
      const slug = wikiSlugFromUrl(match[1]);
      if (slug) slugs.push(slug);
    });
  }
  return slugs;
}

function wikiSlugFromUrl(url) {
  const pathOnly = url.split(/[?#]/)[0];
  const match = pathOnly.match(/^\/wiki\/([^/]+)\/?$/i);
  return match ? slugify(match[1]) : "";
}

function youtubeIds(text) {
  const ids = [];
  const records = lineRecords(text);
  for (const line of records.lines) {
    if (line.inFence) continue;
    eachMatch(YOUTUBE_EMBED, line.prose, (match) => {
      const id = youtubeId(match[1]);
      if (id) ids.push(id);
    });
  }
  return ids;
}

function youtubeId(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return "";
  }
  const host = parsed.hostname.replace(/^www\./i, "").toLowerCase();
  if (host === "youtube.com" || host === "m.youtube.com") {
    if (parsed.pathname === "/watch") return parsed.searchParams.get("v") || "";
    if (parsed.pathname.startsWith("/embed/") || parsed.pathname.startsWith("/shorts/")) {
      return parsed.pathname.split("/")[2] || "";
    }
  }
  if (host === "youtu.be") return parsed.pathname.replace(/^\/+/, "").split("/")[0] || "";
  return "";
}

function unique(values) {
  return [...new Set(values)];
}

function listed(values) {
  const items = unique(values);
  const shown = items.slice(0, 8).join(", ");
  return items.length > 8 ? `${shown}, …` : shown;
}

function assetIndex(root) {
  const exact = new Set();
  const lower = new Map();
  const assetsDir = path.join(root, "assets");
  walk(assetsDir, (abs) => {
    const rel = relPosix(root, abs);
    exact.add(rel);
    lower.set(rel.toLowerCase(), rel);
  });
  return { exact, lower };
}

function discoverLocale(root, locale) {
  const dir = path.join(root, "lang", locale);
  const pages = [];
  const tooDeep = [];
  if (!fs.existsSync(dir)) return { pages, tooDeep };
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isFile() && /\.md$/i.test(entry.name)) {
      pages.push(pageRecord(locale, entry.name, abs));
      continue;
    }
    if (!entry.isDirectory()) continue;
    for (const child of fs.readdirSync(abs, { withFileTypes: true })) {
      const childAbs = path.join(abs, child.name);
      if (child.isFile() && /\.md$/i.test(child.name)) {
        pages.push(pageRecord(locale, `${entry.name}/${child.name}`, childAbs));
        continue;
      }
      if (child.isDirectory()) {
        walk(childAbs, (fileAbs, name) => {
          if (/\.md$/i.test(name)) tooDeep.push(relPosix(root, fileAbs));
        });
      }
    }
  }
  return { pages, tooDeep };
}

function pageRecord(locale, sourceKey, abs) {
  const base = sourceKey.split("/").pop();
  return {
    locale,
    sourceKey,
    abs,
    rel: `lang/${locale}/${sourceKey}`,
    slug: slugify(base.replace(/\.md$/i, "")),
  };
}

function resolvePageRef(ref, pages) {
  const normalized = String(ref || "").trim().replace(/\\/g, "/").replace(/^\/+/, "");
  if (!normalized) return null;
  const bySlug = new Map(pages.map((page) => [page.slug, page]));
  const byKey = new Map(pages.map((page) => [page.sourceKey.toLowerCase(), page]));
  const byBase = new Map(pages.map((page) => [page.sourceKey.split("/").pop().toLowerCase(), page]));
  if (bySlug.has(normalized)) return bySlug.get(normalized);
  if (byKey.has(normalized.toLowerCase())) return byKey.get(normalized.toLowerCase());
  const base = normalized.split("/").pop().toLowerCase();
  if (byBase.has(base)) return byBase.get(base);
  return bySlug.get(slugify(normalized.replace(/\.md$/i, ""))) || null;
}

function checkNavigation(nav, englishPages, findings) {
  if (!nav || typeof nav !== "object" || Array.isArray(nav)) {
    findings.push(error("navigation.json", 1, "navigation.json must be an object."));
    return { routes: new Set(TOOL_PATHS), placed: new Set() };
  }
  const locales = nav.locales && typeof nav.locales === "object" ? nav.locales : null;
  const defaultLocale = String(nav.defaultLocale || "").trim();
  if (!locales || !defaultLocale || !locales[defaultLocale]) {
    findings.push(error("navigation.json", 1, "navigation.json needs defaultLocale and a matching locales entry."));
  }
  const knownLocales = new Set(Object.keys(locales || {}));
  const routes = new Set(TOOL_PATHS);
  const placed = new Set();
  const seen = new Set();
  const sections = Array.isArray(nav.sections) ? nav.sections : [];
  if (sections.length === 0) {
    findings.push(error("navigation.json", 1, "navigation.json has no sections, so the menu will be empty."));
  }
  for (const section of sections) {
    checkNameLocales(section?.name, knownLocales, findings);
    const sectionSlug = slugify(section?.slug || "");
    if (!sectionSlug) {
      findings.push(error("navigation.json", 1, "Each section needs a slug. Page URLs are /<section>/<page>."));
    }
    for (const category of section?.categories || []) {
      checkNameLocales(category?.name, knownLocales, findings);
      for (const ref of category?.pages || []) {
        const page = resolvePageRef(ref, englishPages);
        if (!page) {
          findings.push(error("navigation.json", 1, `Page "${ref}" does not match a file under lang/${defaultLocale || "en"}.`));
          continue;
        }
        if (seen.has(page.slug)) {
          findings.push(error("navigation.json", 1, `Page "${page.slug}" is listed more than once. The menu keeps only the first one.`));
          continue;
        }
        seen.add(page.slug);
        placed.add(page.slug);
        if (sectionSlug) routes.add(`/${sectionSlug}/${page.slug}`);
      }
    }
  }
  if (routes.has("/wiki/overview") || englishPages.some((page) => page.slug === "overview")) {
    routes.add("/overview");
    routes.add("/");
  }
  const hidden = new Set((nav.hiddenPages || []).map((entry) => slugify(entry)));
  for (const page of englishPages) {
    if (placed.has(page.slug) || hidden.has(page.slug)) continue;
    findings.push(error(page.rel, 1, "This page is not listed in navigation.json, so it will not appear in the menu."));
  }
  return { routes, placed };
}

function checkNameLocales(name, knownLocales, findings) {
  if (!name || typeof name !== "object" || Array.isArray(name)) return;
  for (const code of Object.keys(name)) {
    if (!knownLocales.has(code)) {
      findings.push(error("navigation.json", 1, `Menu label locale "${code}" is not listed in locales.`));
    }
  }
}

function resolveRepoPath(fromRel, url) {
  let decoded = url.split(/[?#]/)[0];
  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    decoded = url.split(/[?#]/)[0];
  }
  const clean = decoded.replace(/\\/g, "/");
  if (/^(?:https?:|data:)/i.test(clean)) return { kind: "external" };
  if (clean.startsWith("/api/lookup/")) return { kind: "lookup" };
  const fromDir = path.posix.dirname(fromRel);
  const joined = clean.startsWith("/")
    ? path.posix.normalize(clean)
    : path.posix.normalize(path.posix.join(fromDir, clean));
  const repoPath = joined.replace(/^\/+/, "");
  if (!repoPath || repoPath === ".." || repoPath.startsWith("../") || repoPath.includes("/../")) {
    return { kind: "escape", repoPath };
  }
  return { kind: "repo", repoPath };
}

function checkMarkdown(page, text, ctx, findings) {
  const records = lineRecords(text);
  if (records.unclosedFenceLine) {
    findings.push(error(page.rel, records.unclosedFenceLine, "Code fence is not closed, so the rest of the page renders as code."));
  }

  let seenContent = false;
  let h1Count = 0;
  let h1Line = 0;
  for (const line of records.lines) {
    if (line.inFence || !line.raw.trim()) continue;
    if (!seenContent) {
      seenContent = true;
      if (!H1.test(line.prose.trim())) {
        findings.push(error(page.rel, line.number, "The first line must be a single # title. The menu uses that heading."));
      }
    }
    if (H1.test(line.prose.trim())) {
      h1Count += 1;
      h1Line = line.number;
    }
  }
  if (seenContent && h1Count === 0) {
    findings.push(error(page.rel, 1, "The first line must be a single # title. The menu uses that heading."));
  }
  if (h1Count > 1) {
    findings.push(error(page.rel, h1Line, "Use only one # title. Sections below it use ## or ###."));
  }

  checkTables(page, records.lines, findings);
  checkDetails(page, records.lines, findings);

  for (const line of records.lines) {
    if (line.inFence) continue;
    const prose = line.prose;
    if (ALERT_LINE.test(prose.trim())) {
      findings.push(error(page.rel, line.number, "GitHub alert syntax is shown as literal text. Use a blockquote, for example > 💡 **Tip**."));
    }
    if (DANGEROUS_TAG.test(prose)) {
      findings.push(error(page.rel, line.number, "This HTML is not rendered as page content and can break the page. Use Markdown instead."));
    }
    checkImages(page, line, ctx, findings);
    checkLinks(page, line, ctx, findings);
    checkYoutube(page, line, findings);
    checkTerms(page, line, findings);
  }
}

function checkTables(page, lines, findings) {
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.inFence) continue;
    const next = lines[index + 1];
    if (!TABLE_ROW.test(line.prose.trim()) || !next || next.inFence || !TABLE_RULE.test(next.prose.trim())) continue;
    const previous = lines[index - 1];
    if (breaksTableStart(previous)) {
      findings.push(error(page.rel, line.number, "Leave a blank line before this table, or the site shows the pipes as text."));
    }
    let end = index + 2;
    while (end < lines.length && !lines[end].inFence && TABLE_ROW.test(lines[end].prose.trim())) end += 1;
    const after = lines[end];
    if (swallowedByTable(after)) {
      findings.push(error(page.rel, after.number, "Leave a blank line after the table, or this line is swallowed into the last row."));
    }
    index = end - 1;
  }
}

function breaksTableStart(line) {
  if (!line || line.inFence || !line.raw.trim()) return false;
  const text = line.prose.trim();
  return /^[-*+]\s/.test(text) || /^\d+[.)]\s/.test(text) || /^>/.test(text);
}

function swallowedByTable(line) {
  if (!line || line.inFence || !line.raw.trim()) return false;
  const text = line.prose.trim();
  if (/^#{1,6}\s/.test(text)) return false;
  if (/^(-{3,}|\*{3,}|_{3,})$/.test(text)) return false;
  if (/^<\/?[a-z]/i.test(text)) return false;
  if (/^[-*+]\s/.test(text) || /^\d+[.)]\s/.test(text)) return false;
  if (/^>/.test(text)) return false;
  if (TABLE_ROW.test(text)) return false;
  return true;
}

function checkDetails(page, lines, findings) {
  let open = 0;
  let openLine = 0;
  let waitingForBlank = false;
  let waitingForContent = false;
  for (const line of lines) {
    if (waitingForBlank) {
      waitingForBlank = false;
      if (line.inFence || line.raw.trim()) {
        findings.push(error(page.rel, line.number, "Leave a blank line after </summary>, or this line is shown as raw text."));
      } else {
        waitingForContent = true;
      }
    } else if (waitingForContent && !line.inFence && line.raw.trim()) {
      if (/^[ \t]/.test(line.raw)) {
        findings.push(error(page.rel, line.number, "Do not indent the first line inside <details>, or it is shown as raw text."));
      }
      waitingForContent = false;
    }
    if (line.inFence) continue;
    if (/<details\b/i.test(line.prose)) {
      open += 1;
      openLine = line.number;
    }
    if (/<\/summary>/i.test(line.prose)) {
      const after = line.prose.split(/<\/summary>/i)[1] || "";
      if (after.trim()) {
        findings.push(error(page.rel, line.number, "Leave a blank line after </summary>, or this line is shown as raw text."));
      } else {
        waitingForBlank = true;
      }
    }
    if (/<\/details>/i.test(line.prose)) {
      open = Math.max(0, open - 1);
      waitingForBlank = false;
      waitingForContent = false;
    }
  }
  if (open > 0) {
    findings.push(error(page.rel, openLine, "<details> is not closed, so the rest of the page stays inside the disclosure."));
  }
}

function eachMatch(pattern, text, visit) {
  pattern.lastIndex = 0;
  for (const match of text.matchAll(pattern)) visit(match);
}

function checkImages(page, line, ctx, findings) {
  eachMatch(IMAGE, line.prose, (match) => {
    const alt = match[1].trim();
    const url = match[2];
    if (!alt) {
      findings.push(warning(page.rel, line.number, "Image is missing alt text."));
    }
    const resolved = resolveRepoPath(page.rel, url);
    if (resolved.kind === "external" || resolved.kind === "lookup") return;
    if (resolved.kind === "escape") {
      findings.push(error(page.rel, line.number, `Image path escapes the repo: ${url}`));
      return;
    }
    const extension = path.posix.extname(resolved.repoPath).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(extension)) {
      findings.push(error(page.rel, line.number, `Image path needs a file extension (.png, .jpg, .gif, .webp, or .svg): ${url}`));
      return;
    }
    if (ctx.assets.exact.has(resolved.repoPath)) return;
    const actual = ctx.assets.lower.get(resolved.repoPath.toLowerCase());
    if (actual) {
      findings.push(error(page.rel, line.number, `Image path does not match the file name. Use ${actual}.`));
      return;
    }
    findings.push(error(page.rel, line.number, `Image file is missing: ${resolved.repoPath}`));
  });
}

function checkLinks(page, line, ctx, findings) {
  eachMatch(LINK, line.prose, (match) => {
    const url = match[1];
    if (!url || url.startsWith("#")) {
      findings.push(warning(page.rel, line.number, "Links to headings do not work. Headings have no anchors."));
      return;
    }
    if (/^(?:https?:|mailto:)/i.test(url)) return;
    const [pathOnly, hash] = url.split("#");
    const normalized = normalizeSitePath(pathOnly, ctx.localeCodes);
    if (hash) {
      findings.push(warning(page.rel, line.number, "The # part of this link does not work. Headings have no anchors."));
    }
    if (!normalized.startsWith("/")) {
      findings.push(error(page.rel, line.number, `Use an absolute page link such as /wiki/skills, not ${url}.`));
      return;
    }
    if (ctx.routes.has(normalized)) return;
    findings.push(error(page.rel, line.number, `Link ${normalized} does not match a page on the site.`));
  });
}

function normalizeSitePath(url, localeCodes) {
  const trimmed = url.trim().replace(/\\/g, "/");
  if (!trimmed.startsWith("/")) return trimmed;
  const parts = trimmed.split("/").filter(Boolean);
  if (parts.length > 0 && localeCodes.has(parts[0])) parts.shift();
  if (parts.length === 0) return "/";
  return `/${parts.join("/")}`;
}

function checkYoutube(page, line, findings) {
  eachMatch(YOUTUBE_EMBED, line.prose, (match) => {
    if (!youtubeId(match[1])) {
      findings.push(error(page.rel, line.number, "This YouTube embed is not a YouTube URL, so the site shows it as raw text."));
    }
  });
}

function checkTerms(page, line, findings) {
  for (const pattern of TERM_PATTERNS) {
    pattern.lastIndex = 0;
    const match = pattern.exec(line.prose);
    if (!match) continue;
    const column = match.index + 1;
    findings.push(error(page.rel, line.number, `Inappropriate language ("${match[0]}") at column ${column}.`, column));
    return;
  }
}

function checkTranslation(page, english, localeCodes, findings) {
  if (!english) {
    findings.push(error(page.rel, 1, `No English page at lang/en/${page.sourceKey}, so the site will not show this translation.`));
    return;
  }
  const englishText = english.text;
  const translated = page.text;
  const translatedTokens = tokensOf(translated);
  const englishTokens = tokensOf(englishText);
  if (translatedTokens.length >= 40 && STOPWORDS[page.locale]) {
    const scores = {};
    for (const code of localeCodes) scores[code] = markerScore(translatedTokens, code);
    const expected = scores[page.locale] || 0;
    const englishScore = scores.en || 0;
    if (englishScore >= 8 && englishScore >= expected * 2 && expected < 6) {
      findings.push(error(
        page.rel,
        1,
        `Translation does not look ${page.locale}. ${page.locale} marker words: ${expected}. English marker words: ${englishScore}.`,
      ));
    } else if (jaccard(translatedTokens, englishTokens) >= 0.82) {
      findings.push(error(page.rel, 1, "Translation is still the English text."));
    }
  }

  if (englishTokens.length >= 200 && translatedTokens.length < englishTokens.length * 0.45) {
    findings.push(warning(
      page.rel,
      1,
      `Translation is much shorter than English (${translatedTokens.length} words vs ${englishTokens.length}).`,
    ));
  }

  const englishHeadings = headingCount(englishText);
  const translatedHeadings = headingCount(translated);
  if (englishHeadings >= 5 && translatedHeadings + 2 < englishHeadings && translatedHeadings < englishHeadings * 0.7) {
    findings.push(warning(page.rel, 1, `Translation drops headings (${translatedHeadings} vs ${englishHeadings} in English).`));
  }

  const englishFacts = unique(factNumbers(englishText));
  if (englishFacts.length >= 4) {
    const translatedFacts = new Set(factNumbers(translated));
    const missing = englishFacts.filter((value) => !translatedFacts.has(value));
    if (missing.length >= 3 && missing.length > englishFacts.length * 0.35) {
      findings.push(error(page.rel, 1, `Translation is missing numbers from English: ${listed(missing)}.`));
    }
  }

  const englishLinks = unique(wikiSlugs(englishText));
  if (englishLinks.length >= 3) {
    const translatedLinks = new Set(wikiSlugs(translated));
    const missing = englishLinks.filter((slug) => !translatedLinks.has(slug));
    if (missing.length >= 3 && missing.length > englishLinks.length * 0.4) {
      findings.push(warning(page.rel, 1, `Translation is missing wiki links: ${listed(missing.map((slug) => `/wiki/${slug}`))}.`));
    }
  }

  const englishVideos = unique(youtubeIds(englishText));
  const translatedVideos = new Set(youtubeIds(translated));
  const missingVideos = englishVideos.filter((id) => !translatedVideos.has(id));
  const extraVideos = [...translatedVideos].filter((id) => !englishVideos.includes(id));
  if (missingVideos.length > 0 || extraVideos.length > 0) {
    findings.push(error(page.rel, 1, "Translation YouTube videos do not match the English page."));
  }
}

function error(file, line, message, column = 1) {
  return { severity: "error", file, line, column, message };
}

function warning(file, line, message, column = 1) {
  return { severity: "warning", file, line, column, message };
}

function sortFindings(findings) {
  return findings.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || a.message.localeCompare(b.message));
}

export function checkContent(rootDir) {
  const root = path.resolve(rootDir);
  const findings = [];
  const navPath = path.join(root, "navigation.json");
  if (!fs.existsSync(navPath)) {
    return { errors: [error("navigation.json", 1, "navigation.json is missing.")], warnings: [] };
  }
  const navText = readUtf8(navPath);
  if (navText == null) {
    return { errors: [error("navigation.json", 1, "navigation.json is not valid UTF-8.")], warnings: [] };
  }
  let nav = null;
  try {
    nav = JSON.parse(navText);
  } catch (cause) {
    findings.push(error("navigation.json", 1, `navigation.json is not valid JSON: ${cause.message}`));
  }

  checkTerms({ rel: "navigation.json" }, { number: 1, prose: JSON.stringify(nav || "") }, findings);

  const localeCodes = new Set(Object.keys(nav?.locales || {}));
  if (nav?.defaultLocale) localeCodes.add(String(nav.defaultLocale));
  const defaultLocale = String(nav?.defaultLocale || "en");
  const english = discoverLocale(root, defaultLocale);
  for (const rel of english.tooDeep) {
    findings.push(error(rel, 1, "This file is nested too deep. The site only reads lang/<locale>/*.md and one folder below that."));
  }
  const slugCounts = new Map();
  for (const page of english.pages) slugCounts.set(page.slug, (slugCounts.get(page.slug) || 0) + 1);
  for (const page of english.pages) {
    if (slugCounts.get(page.slug) > 1) {
      findings.push(error(page.rel, 1, `Slug "${page.slug}" is used by more than one English page. URLs would collide.`));
    }
  }

  const { routes } = checkNavigation(nav, english.pages, findings);
  const ctx = {
    assets: assetIndex(root),
    routes,
    localeCodes,
  };

  const pagesByLocale = new Map();
  const langDir = path.join(root, "lang");
  const folderLocales = fs.existsSync(langDir)
    ? fs.readdirSync(langDir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name)
    : [];
  for (const locale of folderLocales) {
    if (!localeCodes.has(locale)) {
      findings.push(error(`lang/${locale}`, 1, `Locale folder "${locale}" is not listed in navigation.json, so the site will not offer it.`));
    }
  }
  for (const locale of localeCodes) {
    const discovered = locale === defaultLocale ? english : discoverLocale(root, locale);
    if (locale !== defaultLocale) {
      for (const rel of discovered.tooDeep) {
        findings.push(error(rel, 1, "This file is nested too deep. The site only reads lang/<locale>/*.md and one folder below that."));
      }
      if (discovered.pages.length === 0 && !folderLocales.includes(locale)) {
        findings.push(warning(`lang/${locale}`, 1, `Locale "${locale}" has no lang folder. Missing pages fall back to English.`));
      }
    }
    pagesByLocale.set(locale, discovered.pages);
  }

  const englishByKey = new Map((pagesByLocale.get(defaultLocale) || []).map((page) => [page.sourceKey, page]));
  for (const pages of pagesByLocale.values()) {
    for (const page of pages) {
      const text = readUtf8(page.abs);
      if (text == null) {
        findings.push(error(page.rel, 1, "This file is not valid UTF-8."));
        continue;
      }
      page.text = text;
      checkMarkdown(page, text, ctx, findings);
      if (page.locale !== defaultLocale) {
        const source = englishByKey.get(page.sourceKey);
        checkTranslation(page, source ? { text: readUtf8(source.abs) || "" } : null, localeCodes, findings);
      }
    }
  }

  const errors = sortFindings(findings.filter((finding) => finding.severity === "error"));
  const warnings = sortFindings(findings.filter((finding) => finding.severity === "warning"));
  return { errors, warnings };
}

export function reportFindings(result) {
  const findings = [...result.errors, ...result.warnings];
  for (const finding of findings) {
    const message = finding.message.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
    console.log(`::${finding.severity} file=${finding.file},line=${finding.line},col=${finding.column || 1}::${message}`);
  }
  console.log(`${result.errors.length} error(s), ${result.warnings.length} warning(s).`);
}

export function limitToFiles(result, files) {
  const changed = new Set(files.map((file) => file.replace(/\\/g, "/").trim()).filter(Boolean));
  const keep = (finding) => {
    const file = String(finding.file || "").replace(/\\/g, "/");
    if (changed.has(file)) return true;
    for (const changedFile of changed) {
      if (changedFile.startsWith(`${file}/`)) return true;
    }
    return false;
  };
  return {
    errors: result.errors.filter(keep),
    warnings: result.warnings.filter(keep),
  };
}

export function reviewBody(result) {
  const findings = [...result.errors, ...result.warnings];
  if (findings.length === 0) return "";
  const lines = [
    "<!-- content-checks -->",
    "Please review these content check results:",
    "",
  ];
  for (const finding of findings) {
    const label = finding.severity === "error" ? "Error" : "Warning";
    lines.push(`- **${label}** \`${finding.file}\` line ${finding.line}: ${finding.message}`);
  }
  return `${lines.join("\n")}\n`;
}

function isDirectRun() {
  const entry = process.argv[1] ? path.resolve(process.argv[1]) : "";
  return entry === fileURLToPath(import.meta.url);
}

function optionValue(flag) {
  const index = process.argv.indexOf(flag);
  if (index === -1) return null;
  return process.argv[index + 1] || "";
}

if (isDirectRun()) {
  let result = checkContent(process.cwd());
  const filesPath = optionValue("--files");
  if (filesPath !== null) {
    const files = filesPath ? fs.readFileSync(filesPath, "utf8").split(/\r?\n/) : [];
    result = limitToFiles(result, files);
  }
  reportFindings(result);
  const reportPath = optionValue("--report");
  if (reportPath) fs.writeFileSync(reportPath, reviewBody(result));
  if (result.errors.length > 0) process.exitCode = 1;
}
