# Vous voulez contribuer ?

Utilisez cette page pour proposer des mises à jour du wiki par des pull requests GitHub.

[Ouvrir le dépôt wiki-content](https://github.com/BritPVE/wiki-content)

## Comment envoyer une PR

1. Faites un fork de `BritPVE/wiki-content` sur votre compte GitHub.
2. Créez une nouvelle branche pour votre modification.
3. Modifiez la page sous `lang/en/` (par exemple `lang/en/Wiki/`). Ajoutez une traduction au même chemin sous `lang/<code>/`.
4. Faites un commit avec un message clair qui décrit ce qui a changé.
5. Ouvrez une pull request vers `BritPVE/wiki-content:main`.
6. Ajoutez un court résumé dans la description de la PR.

## Comment fonctionne la navigation

Le menu du wiki est contrôlé par `navigation.json`, à la racine du dépôt wiki-content. Les fichiers de pages sont découverts depuis `lang/en/`, mais **ils n'apparaissent dans le menu qu'une fois ajoutés à `navigation.json`**.

L'anglais est la langue par défaut. Une traduction reprend ce chemin sous `lang/<code>/`. `lang/en/Wiki/skills.md` est traduit par `lang/tr/Wiki/skills.md`. `overview.md` se trouve à côté des dossiers de section : `lang/en/overview.md`.

Le `name` d'une section ou d'une catégorie est une chaîne, ou un objet de codes de langue. La chaîne, et la valeur `en`, servent de valeur par défaut. Les entrées de pages restent des noms de fichiers. N'ajoutez pas une seconde section par langue.

Quand vous ajoutez une nouvelle page :

1. Ajoutez le fichier anglais sous `lang/en/` (par exemple `lang/en/Wiki/my-new-page.md`).
2. Ouvrez `navigation.json` et ajoutez le slug de la page au tableau `pages` de la bonne catégorie.
3. Utilisez le slug du nom de fichier (par exemple `my-new-page`) ou le chemin sous le dossier de langue (par exemple `Wiki/my-new-page.md`).
4. Ordonnez les pages dans le tableau selon l'ordre voulu dans le menu latéral.
5. Pour la traduire, ajoutez `lang/<code>/Wiki/my-new-page.md` et, si le libellé du menu change, ajoutez ce code au `name` de la catégorie.

Exemple d'entrée de catégorie :

```json
{
  "name": { "en": "Guides", "tr": "Rehberler" },
  "pages": [
    "beginner-guide",
    "my-new-page"
  ]
}
```

Pour masquer une page du menu sans la supprimer, ajoutez son slug au tableau `hiddenPages` dans `navigation.json`.

Le titre d'une page dans le menu est pris de son premier `# Heading`, et son URL est `/wiki/<slug>`. Nommez les fichiers en minuscules avec des traits d'union (`my-new-page.md`) pour que le nom de fichier corresponde au slug.

## Règles de mise en forme qui comptent sur ce site

Le site du wiki affiche le Markdown standard, mais quelques points sont faciles à rater. Chaque règle ci-dessous a été vérifiée sur le site en ligne.

**Images**

- Placez les images dans le dossier `assets/` à la racine du dépôt et référencez-les avec un chemin relatif **qui inclut l'extension du fichier** : `![Steak Dinner](../../../assets/AllMeals/SteakDinner.png)`. Un chemin sans `.png` s'affiche comme une image cassée.
- Les chemins sont **sensibles à la casse** : `BlueBerry.png` et `Blueberry.png` sont des fichiers différents.
- Remplissez toujours le texte alternatif entre crochets. C'est ce que montrent les lecteurs d'écran et l'emplacement d'une image cassée.
- Les icônes d'objets et de skins peuvent être intégrées depuis l'API de recherche du site : `![Name](/api/lookup/skins/<skinId>/image)` ou `![Name](/api/lookup/items/icon/<itemId>)`. Les identifiants de skins sont visibles sur la page **[Butin des objets](/loot-tables)**.

**Liens entre les pages**

- Liez les autres pages du wiki avec un chemin absolu : `[Skills](/wiki/skills)`. Les liens vers un titre dans une page (`#section`) **ne** fonctionnent pas, car les titres ne reçoivent pas d'ancre.
- Les deux pages d'outils sont `/loot-tables` (Butin des objets) et `/xp-calculator`.

**Encadrés et sections repliables**

- Utilisez des citations pour les conseils et les avertissements, comme dans le reste du wiki :

```markdown
> 💡 **Tip**
>
> Text of the tip.

> ⚠ **Important**
>
> Text of the warning.
```

- La syntaxe d'alerte GitHub `> [!NOTE]` **n'est pas** prise en charge et s'affiche comme du texte brut.
- Les sections repliables utilisent `<details>` et `<summary>`. Laissez une **ligne vide** après `</summary>` et n'indentez pas le contenu, sinon la première ligne Markdown à l'intérieur s'affiche en texte brut :

```markdown
<details>
<summary><strong>Show more</strong></summary>

![Image](../../../assets/example.png)

</details>
```

**Tableaux et vidéos**

- Laissez une ligne vide avant et après chaque tableau. Sans cela, la phrase qui suit le tableau est avalée dans la dernière ligne.
- Intégrez les vidéos YouTube avec : `@[youtube](https://www.youtube.com/watch?v=VIDEO_ID){width=960 height=540}`

## Conseils de style

- Vous trouverez un guide utile sur le Markdown [ici](https://www.markdownguide.org/cheat-sheet/).
- Utilisez un seul `# Title` en haut de chaque page Markdown, puis `##` / `###` pour les sections en dessous.
- Utilisez des titres et des puces pour que les pages restent lisibles.
- Gardez un contenu exact et concis. Utilisez les noms exacts en jeu pour les objets, les quêtes et les compétences.
- Préférez la description d'une règle (par exemple « toutes les N semaines, le jeudi à 18:00 UTC ») à une date unique qui deviendra fausse.
