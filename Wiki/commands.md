# Commands

Brits PvE Worlds adds many custom commands that make travelling, progressing, automation, and gameplay much easier.

## Quick Overview

- **Recommended For:** All Players
- **Main Goal:** Learn the most commonly used commands.
- **Tip:** Most commands can also be found using **`/info`**.

---

## Keybinds for Common Commands

Rust keybinds let you run chat commands from a key instead of opening chat and typing them every time. This is useful for commands you press constantly, such as returning to the HUB, opening quests, opening shops, buying raid content, or calling a bike.

Open the F1 console and use this format:

```text
bind key chat.say "/command"
```

For commands without spaces, you can also use the shorter form:

```text
bind key chat.say /command
```

Use quotes when the command includes spaces, such as `/home base`.

The bind should work immediately. For binds you want to keep, Facepunch recommends running:

```text
writecfg
```

To remove a bind later, run:

```text
bind key ""
```

The example keys below are chosen to avoid common default movement, combat, map, voice, inventory, reload, crouch, sprint, and hotbar binds. If a key is already used on your setup, change the key name before running the bind.

For home binds, replace `base` with your actual home name, such as `/home 1` or `/home main`.

| Use | Command | Suggested key | Bind example | Remove this bind |
|----------|----------|----------|----------|----------|
| Return to HUB | `/hub` | Numpad `+` | `bind numpadplus chat.say /hub` | `bind numpadplus ""` |
| Teleport home | `/home <name>` | Numpad `-` | `bind numpadminus chat.say "/home base"` | `bind numpadminus ""` |
| Open quests | `/q` | Numpad `9` | `bind numpad9 chat.say /q` | `bind numpad9 ""` |
| Open Virtual Quarries | `/vq` | Numpad `6` | `bind numpad6 chat.say /vq` | `bind numpad6 ""` |
| Buy a raid base | `/buyraid` | Numpad `7` | `bind numpad7 chat.say /buyraid` | `bind numpad7 ""` |
| Buy a dungeon | `/buydungeon` | Numpad `8` | `bind numpad8 chat.say /buydungeon` | `bind numpad8 ""` |
| Open shop / stock market | `/s` | Comma | `bind comma chat.say /s` | `bind comma ""` |
| Call a free bike | `/toolazytowalk` | Left bracket | `bind leftbracket chat.say /toolazytowalk` | `bind leftbracket ""` |
| Open Skill Tree | `/st` | Right bracket | `bind rightbracket chat.say /st` | `bind rightbracket ""` |
| Accept teleport request | `/tpa` | Period | `bind period chat.say /tpa` | `bind period ""` |

### Smaller Keyboard Examples

If you do not have a numpad, use bracket, punctuation, or other unused keys instead. Replace only the key name:

```text
bind leftbracket chat.say /hub
bind rightbracket chat.say "/home base"
bind comma chat.say /s
bind period chat.say /tpa
```

Avoid replacing important default Rust keys unless you are sure you do not use them. For example, binding `q` to `/q` can be convenient, but it may overwrite a normal Rust bind on many setups.

---

# Essential Commands

These are the commands every new player should know.

| Command | Description |
|----------|-------------|
| `/hub` | Teleport to the HUB |
| `/q` | Open the Quest Menu |
| `/s` | Open the Shop / Stock Market |
| `/st` | Open the Skill Tree |
| `/sell` | Sell resources for RP |
| `/vq` or `/qr` | Open Virtual Quarries |
| `/tod` | View the current time of day |
| `/wipe` | Shows the next wipe date |
| `/info` | Shows an informative window |

---

# Teleports

| Command | Description |
|----------|-------------|
| `/outpost` | Teleport to Outpost |
| `/bandit` | Teleport to Bandit Camp |
| `/tower1-6` | Teleport to Public Heli Towers |

---

# Home Commands

| Command | Description |
|----------|-------------|
| `/home add <name>` | Create a Home |
| `/home <name>` | Teleport to a Home |
| `/home remove <name>` | Remove a Home |
| `/home list` | Show all Homes |
| `/home help` | Home command help |

---

# Player Teleports

| Command | Description |
|----------|-------------|
| `/tpr <player>` | Send teleport request |
| `/tpa` | Accept teleport |
| `/tpb` | Teleport back |
| `/tpc` | Cancel teleport |

---

# Skill Tree Commands

| Command | Description |
|----------|-------------|
| `/locatenodes` | Locate nearby nodes |
| `/track` | Tracking ability |
| `/setgenes` | Choose plant genes |
| `/forage` | Foraging ability |
| `/pouch` | Open pouch |
| `/teatime` | Tea ability |
| `/strike` | Airstrike ability |
| `/picklock` | Picklock ability |
| `/traps` | Trap ability |
| `/sonar` | Sonar ability |

---

# Shop Commands

| Command | Description |
|----------|-------------|
| `/s` | Shop / Stock Market |
| `/shop` | Shop |
| `/m` | Marketplace |
| `/redeem shop` | Redeem sold items |
| `/sell` | Sell resources |
| `/fmarket` | Farmers Market |

---

# Cooking

| Command | Description |
|----------|-------------|
| `/ibag` | Open Ingredients Bag |
| `/cook` | Open Cooking Menu |
| `/backpack` | Open Backpack |

---

# Raid Worlds

## Raidable Bases

| Command | Description |
|----------|-------------|
| `/buyraid` | Purchase a Raid Base |
| `/rb` | View Raid statistics |
| `/mybike` | Buys a 20 RP bike to travel faster |
| `/toolazytowalk` | Summon a free bike to travel faster |

> 💡 **Bike Tip**
>
> Most players use **`/toolazytowalk`** instead of **`/mybike`** because it summons a bike for free. It is longer to type, so it is a good command to keybind.

### Dungeons

| Command | Description |
|----------|-------------|
| `/buydungeon` | Purchase a Dungeon using Duct Tape |

---

# Vehicles

| Command | Description |
|----------|-------------|
| `/buy <vehicle>` | Purchase a vehicle |
| `/spawn <vehicle>` | Spawn a purchased vehicle |
| `/boatrecover` | Useful when your boat gets bugged / stuck, only works in deep sea |

> 💡 **Boat Recover Tip**
>
> If your boat gets stuck in the normal world, you can travel to the deep sea to use the command, the boat will spawn under you.

---

# Skin Commands

| Command | Description |
|----------|-------------|
| `/skinbox` | Skin a specific item |
| `/skin` | Skin your inventory |
| `/skincraft` | Default crafting skins |
| `/skinitem` | Skin placed items |
| `/skinrequest` | Request new skins |
| `/skinbase` | Skin all deployables |
| `/skini` | Skin the item you're looking at |

---

# Sharing & Permissions

| Command | Description |
|----------|-------------|
| `/share` | Share with everyone |
| `/share <player>` | Share with one player |
| `/unshare` | Remove all sharing |
| `/unshare <player>` | Remove one player |
| `/sharelist` | View shared players |
| `/shareclear` | Clear permissions |
| `/checkit` | Check loot protection |
| `/autoauthui` | Configure automatic authorization |

---

# Miscellaneous

| Command | Description |
|----------|-------------|
| `/bonus` | View gathering bonuses |
| `/remove` | Remove placed entities |
| `/limit` | Entity limits |
| `/jet` | Activate Jetpack |
| `/score` | XP leaderboard |
| `/top` | Open leaderboard |
| `/tc` | Count Tool Cupboards |
| `/stfix` | Fix Skill Tree issues |

---

## Continue Reading

Looking for more detailed guides?

Continue with the **Skills**, **Virtual Quarries**, **Food System**, and **Best RP Methods** pages to learn how these commands fit into progression.
