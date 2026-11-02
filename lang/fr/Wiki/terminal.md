# Terminal

![Terminal](../../../assets/Terminal/header.png)

Le Terminal est un objet de Prestige plaçable qui vous permet de centraliser le stockage de votre base, d'automatiser la production et de gérer les ressources depuis une seule interface.

Que vous organisiez votre butin ou que vous construisiez une usine entièrement automatisée, le Terminal est l'un des utilitaires les plus puissants de Brits PvE Worlds.

## Aperçu rapide

- **Condition :** débloquer l'avantage de Prestige **Terminal**. Voir **[Avantages de Prestige](/wiki/prestige-perks)**
- **Recommandé pour :** milieu à fin de partie
- **Objectif principal :** centraliser le stockage et automatiser la gestion des ressources.

| Mode | Idéal pour |
|------|----------|
| **Wireless Mode** | Accéder aux conteneurs de stockage proches par une seule interface. |
| **Cell Mode** | Un stockage massif de long terme avec des Storage Cells. |

---

## Obtenir le Terminal

Le Terminal se débloque en choisissant l'avantage de Prestige **Terminal**.

Une fois l'avantage choisi, vous pouvez obtenir l'objet Terminal de deux façons :

- Avec **`/kit`**
- En l'achetant via **`/s` → Prestige**

---

## Fonctions et utilisation
Le Terminal est conçu pour donner aux joueurs un contrôle complet sur les opérations de leur base, par une interface unique et simple. Surveillez les niveaux de ressources, gérez les systèmes connectés, automatisez les flux de production, et simplifiez la gestion quotidienne de la base sans passer sans cesse d'un conteneur de stockage à une machine.

Que vous soyez un joueur occasionnel qui veut une base plus organisée, ou un constructeur avancé qui crée un réseau de production entièrement automatisé, le Terminal fournit les outils nécessaires pour centraliser et simplifier la gestion des ressources. Sa conception modulaire et ses nombreuses fonctions en font un ajout précieux pour n'importe quelle base, quelle que soit sa taille ou votre façon de jouer.

---

### Exemples d'usages
- Gérer les ressources de plusieurs conteneurs de stockage par une seule interface.
- Créer un seul système de stockage centralisé.
- Déplacer automatiquement les ressources avec la tuyauterie industrielle.
- Construire des systèmes de production entièrement automatisés.
- Concevoir des réseaux logistiques avancés et des hubs de stockage.

---

### Fonctions clés
- Combine automatiquement les types d'objets identiques dans un seul emplacement d'inventaire. Il affiche la quantité totale disponible, tout en permettant des retraits d'une quantité précise.
- Prend en charge les modes Wireless et Cell. Il offre ainsi des options d'accès souples pour différentes installations de base.
- Fonctionne comme un objet en jeu plaçable et complet, plutôt que comme un simple menu d'interface. L'expérience est donc plus immersive.
- Entièrement compatible avec le système de tuyauterie industrielle de Rust. Il permet une automatisation et un transport des ressources sans accroc.
- Créez et gérez plusieurs cellules de stockage, avec quatre niveaux d'amélioration disponibles par défaut.
- Chaque cellule de stockage a sa propre capacité dédiée et ses propres limites de taille de pile. Le stockage peut donc s'étendre.
- Une gestion intelligente des objets empêche les conteneurs de dépasser leurs limites de stockage configurées. Les ressources restent ainsi organisées et bien réparties.

---

## Utiliser le Terminal

![Interface du Terminal](../../../assets/Terminal/usage.png)

---

### Récupérer / ramasser votre Terminal

Avant qu'un Terminal puisse être ramassé, le joueur doit avoir l'autorisation du Tool Cupboard.

Avec un Building Hammer équipé, visez la section du Terminal qui affiche l'invite Authorize. Appuyez sur R pour ouvrir les options disponibles et sélectionnez Turn. Le Terminal sera alors prêt à être récupéré.

![Option de rotation sur le Terminal](../../../assets/Terminal/rotate.png)

---

### Passer d'un mode de fonctionnement à l'autre

Pour changer le mode de fonctionnement du Terminal, trouvez l'interrupteur sur le côté droit de l'ordinateur portable et interagissez avec lui. Chaque pression fait défiler les modes disponibles.

L'interrupteur est montré ci-dessous :

- Le voyant rouge est le Wireless Mode
- Le voyant vert est le Cell Mode

![Interrupteur de mode, voyant rouge](../../../assets/Terminal/cell1.png)
![Interrupteur de mode, voyant vert](../../../assets/Terminal/cell2.png)

---

### Utiliser le Wireless Mode

Commencer avec le Wireless Mode est simple.

D'abord, assurez-vous que le Terminal est réglé sur le Wireless Mode en utilisant l'interrupteur de mode situé sur le côté droit de l'ordinateur portable.

Une fois connecté au Terminal, trouvez le bouton de bascule à côté des boîtes de stockage affichées au centre de l'interface et activez-le. Cela permet au Terminal d'afficher le contenu de tous les conteneurs de stockage connectés à portée.

Après avoir activé la bascule, vous pourrez voir et gérer les ressources stockées dans les conteneurs proches directement par l'interface du Terminal. Vous avez ainsi un accès rapide et pratique à l'inventaire de votre base depuis un seul endroit.

---

### Que sont les Storage Cells et comment elles fonctionnent

Les Storage Cells sont conçues pour offrir nettement plus de capacité de stockage que les conteneurs standard, grâce à des mécaniques d'empilement améliorées.

Chaque Storage Cell a un nombre défini d'emplacements disponibles et une taille de pile maximale par emplacement. Contrairement aux conteneurs de stockage ordinaires, ces emplacements spéciaux permettent aux objets de s'empiler jusqu'à la limite configurée de la cellule.

Les Storage Cells stockent un type d'objet par emplacement.

Par exemple, une Storage Cell de niveau 1 peut contenir jusqu'à **5,000 Sulfur Ore** dans un seul emplacement. Les objets dont la durabilité diffère sont traités comme des objets uniques et occupent des emplacements séparés.

Si vous choisissez de ne stocker que du Sulfur Ore, chaque emplacement peut contenir jusqu'à 5,000 Sulfur. La cellule peut donc stocker un total de 40,000 Sulfur Ore.

Les Storage Cells de palier supérieur donnent des emplacements supplémentaires et de plus grandes capacités de pile. La quantité totale de ressources qui peut être stockée augmente donc fortement.

> ⚠ **Important**
>
> Les tailles de pile augmentées n'existent que tant que les objets restent dans une Storage Cell.
>
> Une fois retirés, ils reviennent immédiatement aux limites de pile normales de Rust.

---

### Utiliser le Cell Mode

#### Prérequis
- Pour utiliser le Cell Mode, vous devrez d'abord obtenir des Storage Cells. On les trouve dans le monde en butin, et en récompenses de diverses activités, dont les Bradleys, les Helis, les raids et d'autres événements de haute valeur.
- Une fois une Storage Cell obtenue, placez-la dans le compartiment Cell Storage dédié du Terminal, comme montré ci-dessous :

![Compartiment Cell Storage](../../../assets/Terminal/cellstorage.png)

#### Installation

Ensuite, passez le Terminal en Cell Mode avec le sélecteur de mode situé sur le côté droit de l'ordinateur portable.

#### Utiliser le Cell Mode

Après avoir ouvert l'interface du Terminal, vous pourrez voir toutes les Storage Cells installées, surveiller leur capacité disponible, parcourir les objets stockés, et transférer des ressources directement vers les cellules et depuis elles, par le Terminal.

### Guides vidéo

@[youtube](https://www.youtube.com/watch?v=4usFBBkQaSc){width=960 height=540}

@[youtube](https://www.youtube.com/watch?v=1NY6LnrJSNU){width=960 height=540}
