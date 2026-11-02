# Du willst mitmachen?

Über diese Seite reichst du Inhalts-Updates für das Wiki als GitHub-Pull-Requests ein.

[Öffne das Repository wiki-content](https://github.com/BritPVE/wiki-content)

## So reichst du einen PR ein

1. Forke `BritPVE/wiki-content` auf dein GitHub-Konto.
2. Lege einen neuen Branch für deine Änderung an.
3. Bearbeite die Seite unter `lang/en/` (zum Beispiel `lang/en/Wiki/`). Lege eine Übersetzung unter demselben Pfad in `lang/<code>/` an.
4. Committe mit einer klaren Nachricht, die beschreibt, was sich geändert hat.
5. Öffne einen Pull Request nach `BritPVE/wiki-content:main`.
6. Schreib eine kurze Zusammenfassung in die PR-Beschreibung.

## So funktioniert die Navigation

Das Wiki-Menü steuert `navigation.json` im Stamm des Repos wiki-content. Seitendateien werden aus `lang/en/` erkannt, aber **sie erscheinen erst im Menü, wenn du sie in `navigation.json` einträgst**.

Englisch ist die Standardsprache. Eine Übersetzung spiegelt diesen Pfad unter `lang/<code>/`. `lang/en/Wiki/skills.md` wird durch `lang/tr/Wiki/skills.md` übersetzt. `overview.md` liegt neben den Abschnittsordnern: `lang/en/overview.md`.

Ein `name` für einen Abschnitt oder eine Kategorie ist ein String oder ein Objekt aus Sprachcodes. Der String und der Wert `en` sind der Standard. Seiteneinträge bleiben Dateinamen. Lege nicht für jede Sprache einen zweiten Abschnitt an.

Wenn du eine neue Seite hinzufügst:

1. Lege die englische Datei unter `lang/en/` an (zum Beispiel `lang/en/Wiki/my-new-page.md`).
2. Öffne `navigation.json` und füge den Seiten-Slug zum `pages`-Array der richtigen Kategorie hinzu.
3. Nutze den Dateinamen-Slug (zum Beispiel `my-new-page`) oder den Pfad unter dem Sprachordner (zum Beispiel `Wiki/my-new-page.md`).
4. Ordne die Seiten im Array so, wie sie im Seitenmenü erscheinen sollen.
5. Für die Übersetzung legst du `lang/<code>/Wiki/my-new-page.md` an. Wenn sich die Menübezeichnung ändert, füge diesen Code zum `name` der Kategorie hinzu.

Beispiel für einen Kategorie-Eintrag:

```json
{
  "name": { "en": "Guides", "tr": "Rehberler" },
  "pages": [
    "beginner-guide",
    "my-new-page"
  ]
}
```

Um eine Seite aus dem Menü zu verstecken, ohne sie zu löschen, füge ihren Slug zum Array `hiddenPages` in `navigation.json` hinzu.

Der Titel einer Seite im Menü kommt von der ersten `# Heading`, und ihre URL ist `/wiki/<slug>`. Benenne Dateien in Kleinbuchstaben mit Bindestrichen (`my-new-page.md`), damit der Dateiname zum Slug passt.

## Formatregeln, die auf dieser Seite zählen

Die Wiki-Seite rendert Standard-Markdown, aber ein paar Dinge gehen leicht schief. Jede Regel unten wurde gegen die Live-Seite geprüft.

**Bilder**

- Lege Bilder in den Ordner `assets/` im Repo-Stamm und verweise mit einem relativen Pfad **inklusive Dateiendung** darauf: `![Steak Dinner](../../../assets/AllMeals/SteakDinner.png)`. Ein Pfad ohne `.png` wird als kaputtes Bild angezeigt.
- Pfade unterscheiden **Groß- und Kleinschreibung**: `BlueBerry.png` und `Blueberry.png` sind verschiedene Dateien.
- Fülle den Alt-Text in den eckigen Klammern immer aus. Den lesen Screenreader, und der erscheint als Platzhalter bei einem kaputten Bild.
- Item- und Skin-Icons lassen sich über die eigene Lookup-API der Seite einbinden: `![Name](/api/lookup/skins/<skinId>/image)` oder `![Name](/api/lookup/items/icon/<itemId>)`. Die Skin-IDs siehst du auf der Seite **[Item Drops](/loot-tables)**.

**Links zwischen Seiten**

- Verlinke andere Wiki-Seiten mit einem absoluten Pfad: `[Skills](/wiki/skills)`. Links zu Überschriften innerhalb einer Seite (`#section`) funktionieren **nicht**, weil Überschriften keine Anker bekommen.
- Die beiden Werkzeug-Seiten sind `/loot-tables` (Item Drops) und `/xp-calculator`.

**Hinweise und einklappbare Abschnitte**

- Nutze Blockquotes für Tipps und Warnungen, passend zum Rest des Wikis:

```markdown
> 💡 **Tip**
>
> Text of the tip.

> ⚠ **Important**
>
> Text of the warning.
```

- Die Alert-Syntax `> [!NOTE]` von GitHub wird **nicht** unterstützt und erscheint als wörtlicher Text.
- Einklappbare Abschnitte nutzen `<details>` und `<summary>`. Lass nach `</summary>` eine **Leerzeile** und rücke den Inhalt nicht ein. Sonst wird die erste Markdown-Zeile darin als Rohtext angezeigt:

```markdown
<details>
<summary><strong>Show more</strong></summary>

![Image](../../../assets/example.png)

</details>
```

**Tabellen und Videos**

- Lass vor und nach jeder Tabelle eine Leerzeile. Ohne sie rutscht der Satz nach der Tabelle in die letzte Zeile.
- Bette YouTube-Videos so ein: `@[youtube](https://www.youtube.com/watch?v=VIDEO_ID){width=960 height=540}`

## Stil-Tipps

- Eine hilfreiche Markdown-Anleitung findest du [hier](https://www.markdownguide.org/cheat-sheet/).
- Nutze oben auf jeder Markdown-Seite ein `# Title` und darunter `##` / `###` für die Abschnitte.
- Nutze Überschriften und Aufzählungen, damit Seiten lesbar bleiben.
- Halte den Inhalt genau und knapp. Nutze die genauen Namen aus dem Spiel für Items, Quests und Skills.
- Beschreibe lieber eine Regel (zum Beispiel „alle N Wochen am Donnerstag um 18:00 UTC“) als ein einzelnes Datum, das veraltet.
