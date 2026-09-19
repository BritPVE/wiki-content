# Want to Contribute?

Use this page to submit content updates to the wiki through GitHub pull requests.

[Open the wiki-content repository](https://github.com/BritPVE/wiki-content)

## How To Submit a PR

1. Fork `BritPVE/wiki-content` to your GitHub account.
2. Create a new branch for your change.
3. Choose the relevant top-level folder (for example `Wiki/`) and edit or add the target `.md` file.
4. Commit with a clear message describing what changed.
5. Open a pull request to `BritPVE/wiki-content:main`.
6. Include a short summary in the PR description.

## How Navigation Works

The wiki menu is controlled by `navigation.json` at the root of the wiki-content repo. Page files are discovered automatically, but **they will not appear in the menu until you add them to `navigation.json`**.

When adding a new page:

1. Add your `.md` file to the repo (for example `Wiki/my-new-page.md`).
2. Open `navigation.json` and add the page slug to the correct category's `pages` array.
3. Use the filename slug (for example `my-new-page`) or the file path (for example `Wiki/my-new-page.md`).
4. Order pages in the array as you want them to appear in the side menu.

Example category entry:

```json
{
  "name": "Guides",
  "pages": [
    "beginner-guide",
    "my-new-page"
  ]
}
```

To hide a page from the menu without deleting it, add its slug to the `hiddenPages` array in `navigation.json`.

A page's title in the menu is taken from its first `# Heading`, and its URL is `/wiki/<slug>`. Name files in lowercase with hyphens (`my-new-page.md`) so the filename matches the slug.

## Formatting Rules That Matter on This Site

The wiki site renders standard Markdown, but a few things are easy to get wrong. Every rule below was checked against the live site.

**Images**

- Put images in the `assets/` folder and reference them with a relative path **including the file extension**: `![Steak Dinner](../assets/AllMeals/SteakDinner.png)`. A path without `.png` shows as a broken image.
- Paths are **case-sensitive**: `BlueBerry.png` and `Blueberry.png` are different files.
- Always fill in the alt text in the square brackets; it is what screen readers and broken-image placeholders show.
- Item and skin icons can be embedded from the site's own lookup API: `![Name](/api/lookup/skins/<skinId>/image)` or `![Name](/api/lookup/items/icon/<itemId>)`. The skin IDs are visible on the **[Item Drops](/loot-tables)** page.

**Links between pages**

- Link to other wiki pages with an absolute path: `[Skills](/wiki/skills)`. Links to headings inside a page (`#section`) do **not** work, because headings don't get anchors.
- The two tool pages are `/loot-tables` (Item Drops) and `/xp-calculator`.

**Callouts and collapsible sections**

- Use blockquotes for tips and warnings, matching the rest of the wiki:

```markdown
> 💡 **Tip**
>
> Text of the tip.

> ⚠ **Important**
>
> Text of the warning.
```

- GitHub's `> [!NOTE]` alert syntax is **not** supported and shows up as literal text.
- Collapsible sections use `<details>` and `<summary>`. Leave a **blank line** after `</summary>` and do not indent the content, otherwise the first Markdown line inside is shown as raw text:

```markdown
<details>
<summary><strong>Show more</strong></summary>

![Image](../assets/example.png)

</details>
```

**Tables and videos**

- Leave a blank line before and after every table. Without it, the sentence after the table gets swallowed into the last row.
- Embed YouTube videos with: `@[youtube](https://www.youtube.com/watch?v=VIDEO_ID){width=960 height=540}`

## Style Tips

- You can find a helpful guide on markdown [here](https://www.markdownguide.org/cheat-sheet/).
- Use one `# Title` at the top of each markdown page and `##` / `###` for the sections below it.
- Use headings and bullet points to keep pages readable.
- Keep content accurate and concise. Use the exact in-game names for items, quests and skills.
- Prefer describing a rule (for example "every N weeks on Thursday at 18:00 UTC") over a single date that will go stale.
