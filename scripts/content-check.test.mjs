import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { checkContent } from "./content-check.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function writeRepo(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "wiki-check-"));
  for (const [rel, content] of Object.entries(files)) {
    const abs = path.join(root, ...rel.split("/"));
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content);
  }
  return root;
}

function navigation(pages = ["guide"]) {
  return JSON.stringify({
    defaultLocale: "en",
    locales: {
      en: { label: "English" },
      fr: { label: "Français" },
    },
    sections: [
      {
        name: "Wiki",
        slug: "wiki",
        categories: [{ name: "Guides", pages }],
      },
    ],
  }, null, 2);
}

function messages(result) {
  return result.errors.map((finding) => finding.message);
}

test("accepts a page the site can render", () => {
  const root = writeRepo({
    "navigation.json": navigation(),
    "assets/Meals/Steak.png": "png",
    "lang/en/Wiki/guide.md": `# Guide

You can use this page when you want to see each skill.

![Steak](../../../assets/Meals/Steak.png)

| Skill | Cost |
| --- | --- |
| Mining | 25% |

See [Skills](/wiki/guide).

### Rates
| Skill | Cost |
| --- | --- |
| Mining | 25% |
`,
  });
  const result = checkContent(root);
  assert.deepEqual(result.errors, []);
});

test("flags language, broken formatting, and a bad translation", () => {
  const english = `# Guide

You and your team can use this page when you want to see each skill and every other part from the tree. This should help them with the first steps before they make any other choice. They would use it once while they are there, because it does not take long.

## One

Mining yield is 25%. Speed is 35%. Durability is 15%. Finish chance is 100%.

## Two

## Three

## Four

## Five

@[youtube](https://www.youtube.com/watch?v=abcdefghijk){width=960 height=540}
`;
  const root = writeRepo({
    "navigation.json": navigation(),
    "assets/Meals/Steak.png": "png",
    "lang/en/Wiki/guide.md": `${english}
This page is shit.

> [!NOTE]
> Hidden

| Skill | Cost |
| --- | --- |
| Mining | 1 |
No blank line after the table.

![Steak](../../../assets/Meals/steak.png)

@[youtube](https://example.com/watch?v=nope)

[Missing](/wiki/missing)

<script>alert(1)</script>

<details>
<summary>More</summary>
Indented wrong.
</details>
`,
    "lang/fr/Wiki/guide.md": english,
  });
  const result = checkContent(root);
  const text = messages(result).join("\n");
  assert.match(text, /Inappropriate language/);
  assert.match(text, /GitHub alert/);
  assert.match(text, /blank line after the table/);
  assert.match(text, /does not match the file name/);
  assert.match(text, /not a YouTube URL/);
  assert.match(text, /does not match a page/);
  assert.match(text, /HTML is not rendered/);
  assert.match(text, /blank line after <\/summary>/);
  assert.match(text, /does not look fr|still the English text/);
});

test("ignores profanity and sample markup inside code", () => {
  const root = writeRepo({
    "navigation.json": navigation(),
    "lang/en/Wiki/guide.md": `# Guide

You can use this page when you want to see each skill.

\`shit\`

\`> [!NOTE]\`

\`\`\`
![Missing](../../../assets/nope.png)
<script>alert(1)</script>
\`\`\`
`,
  });
  const result = checkContent(root);
  assert.deepEqual(result.errors, []);
});

test("flags a translation that drops the English numbers", () => {
  const root = writeRepo({
    "navigation.json": navigation(),
    "lang/en/Wiki/guide.md": `# Guide

You can use this page when you want to see each skill and every other part.

## Rates

## More

## Extra

## Last

## End

Mining is 25%. Speed is 35%. Durability is 15%. Finish chance is 100%.
`,
    "lang/fr/Wiki/guide.md": `# Guide

Vous pouvez utiliser cette page pour voir chaque compétence et tous les autres points avec votre personnage. Cette page est pour vous dans le jeu. Elle vous permet de faire plus avec les points que vous avez sur le serveur.

## Taux

## Plus

## Extra

## Dernier

## Fin

Le minage est différent. La vitesse change. La durabilité change. La chance change.
`,
  });
  const result = checkContent(root);
  assert.match(messages(result).join("\n"), /missing numbers/);
});

test("accepts a French page that keeps the facts", () => {
  const root = writeRepo({
    "navigation.json": navigation(),
    "lang/en/Wiki/guide.md": `# Guide

You can use this page when you want to see each skill and every other part from the tree.

## Rates

## More

## Extra

## Last

## End

Mining is 25%. Speed is 35%. Durability is 15%. Finish chance is 100%.
`,
    "lang/fr/Wiki/guide.md": `# Guide

Vous pouvez utiliser cette page pour voir chaque compétence et tous les autres points avec votre personnage. Cette page est pour vous dans le jeu et vous permet de faire plus.

## Taux

## Plus

## Extra

## Dernier

## Fin

Le minage est de 25%. La vitesse est de 35%. La durabilité est de 15%. La chance de finir est de 100%.
`,
  });
  const result = checkContent(root);
  assert.deepEqual(result.errors, []);
});

test("current wiki content passes", () => {
  const result = checkContent(repoRoot);
  assert.deepEqual(result.errors, [], result.errors.map((finding) => `${finding.file}:${finding.line} ${finding.message}`).join("\n"));
});
