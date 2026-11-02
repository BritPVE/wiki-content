# ¿Quieres contribuir?

Usa esta página para enviar actualizaciones de contenido a la wiki mediante pull requests de GitHub.

[Abre el repositorio wiki-content](https://github.com/BritPVE/wiki-content)

## Cómo enviar un PR

1. Haz un fork de `BritPVE/wiki-content` en tu cuenta de GitHub.
2. Crea una rama nueva para tu cambio.
3. Edita la página en `lang/en/` (por ejemplo `lang/en/Wiki/`). Añade una traducción en la misma ruta bajo `lang/<code>/`.
4. Haz el commit con un mensaje claro que diga qué cambió.
5. Abre un pull request hacia `BritPVE/wiki-content:main`.
6. Incluye un resumen corto en la descripción del PR.

## Cómo funciona la navegación

El menú de la wiki lo controla `navigation.json`, en la raíz del repositorio wiki-content. Las páginas se descubren desde `lang/en/`, pero **no aparecen en el menú hasta que las añades a `navigation.json`**.

El inglés es el idioma predeterminado. Una traducción copia esa ruta bajo `lang/<code>/`. `lang/en/Wiki/skills.md` se traduce con `lang/tr/Wiki/skills.md`. `overview.md` vive junto a las carpetas de sección: `lang/en/overview.md`.

El `name` de una sección o categoría es un texto, o un objeto de códigos de idioma. El texto, y el valor `en`, son el predeterminado. Las entradas de página siguen siendo nombres de archivo. No añadas una segunda sección por idioma.

Al añadir una página nueva:

1. Añade el archivo en inglés bajo `lang/en/` (por ejemplo `lang/en/Wiki/my-new-page.md`).
2. Abre `navigation.json` y añade el slug de la página al array `pages` de la categoría correcta.
3. Usa el slug del nombre de archivo (por ejemplo `my-new-page`) o la ruta bajo la carpeta de idioma (por ejemplo `Wiki/my-new-page.md`).
4. Ordena las páginas en el array como quieres que aparezcan en el menú lateral.
5. Para traducirla, añade `lang/<code>/Wiki/my-new-page.md` y, si la etiqueta del menú cambia, añade ese código al `name` de la categoría.

Ejemplo de entrada de categoría:

```json
{
  "name": { "en": "Guides", "tr": "Rehberler" },
  "pages": [
    "beginner-guide",
    "my-new-page"
  ]
}
```

Para ocultar una página del menú sin borrarla, añade su slug al array `hiddenPages` de `navigation.json`.

El título de una página en el menú se toma de su primer `# Heading`, y su URL es `/wiki/<slug>`. Nombra los archivos en minúsculas y con guiones (`my-new-page.md`) para que el nombre coincida con el slug.

## Reglas de formato que importan en este sitio

El sitio de la wiki renderiza Markdown estándar, pero algunas cosas fallan con facilidad. Cada regla de abajo se comprobó contra el sitio en vivo.

**Imágenes**

- Pon las imágenes en la carpeta `assets/` de la raíz del repositorio y referéncialas con una ruta relativa **que incluya la extensión**: `![Steak Dinner](../../../assets/AllMeals/SteakDinner.png)`. Una ruta sin `.png` se ve como una imagen rota.
- Las rutas **distinguen mayúsculas**: `BlueBerry.png` y `Blueberry.png` son archivos distintos.
- Rellena siempre el texto alternativo entre corchetes. Es lo que muestran los lectores de pantalla y el hueco de una imagen rota.
- Los iconos de objetos y skins se pueden incrustar desde la API de búsqueda del propio sitio: `![Name](/api/lookup/skins/<skinId>/image)` o `![Name](/api/lookup/items/icon/<itemId>)`. Los IDs de skin se ven en la página de **[drops de objetos](/loot-tables)**.

**Enlaces entre páginas**

- Enlaza otras páginas de la wiki con una ruta absoluta: `[Skills](/wiki/skills)`. Los enlaces a títulos dentro de una página (`#section`) **no** funcionan, porque los títulos no reciben anclas.
- Las dos páginas de herramientas son `/loot-tables` (drops de objetos) y `/xp-calculator`.

**Avisos y secciones plegables**

- Usa citas en bloque para consejos y avisos, como en el resto de la wiki:

```markdown
> 💡 **Tip**
>
> Text of the tip.

> ⚠ **Important**
>
> Text of the warning.
```

- La sintaxis de alertas de GitHub `> [!NOTE]` **no** está soportada y se muestra como texto literal.
- Las secciones plegables usan `<details>` y `<summary>`. Deja una **línea en blanco** después de `</summary>` y no indentes el contenido. Si no, la primera línea de Markdown de dentro se muestra como texto sin formato:

```markdown
<details>
<summary><strong>Show more</strong></summary>

![Image](../../../assets/example.png)

</details>
```

**Tablas y vídeos**

- Deja una línea en blanco antes y después de cada tabla. Sin ella, la frase que va después de la tabla se traga en la última fila.
- Incrusta vídeos de YouTube con: `@[youtube](https://www.youtube.com/watch?v=VIDEO_ID){width=960 height=540}`

## Consejos de estilo

- Puedes encontrar una guía útil de markdown [aquí](https://www.markdownguide.org/cheat-sheet/).
- Usa un solo `# Title` al principio de cada página markdown y `##` / `###` para las secciones de abajo.
- Usa títulos y viñetas para que las páginas se lean bien.
- Mantén el contenido exacto y breve. Usa los nombres exactos del juego para objetos, misiones y habilidades.
- Prefiere describir una regla (por ejemplo "cada N semanas, el jueves a las 18:00 UTC") antes que una fecha suelta que se va a quedar vieja.
