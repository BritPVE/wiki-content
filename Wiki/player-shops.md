# Player Shops

Buy a real shop building on the map, fill it with your own items, and sell them to other players for **RP** while you're offline.

## 📋 TL;DR — The Whole System in 6 Lines

Too lazy to read? Read this, then stop.

| # | Do this | How |
|---|---|---|
| 1 | **Buy a shop** | Talk to the **shop vendor NPC**. Pick a shop. Confirm. |
| 2 | **Get your code** | It's in chat. Lost it? **`/shopcode`** |
| 3 | **Pay rent** | Press your shop's **tool cupboard** → **Extend** → **Confirm** |
| 4 | **Stock it** | Stand **behind** the vending machine and loot it like normal |
| 5 | **Set prices** | Look at the machine from the **front** → set Amount + Price → **List** |
| 6 | **Find shops** | **`/shopslist`** |

> ⚠ The One Rule That Matters
>
> **Rent runs out = your shop is demolished.**
> 
> **You get 5 hours cooldown**
>
> Your items are **never** deleted. Get them back with **`/redeem shop`**(Available only in hub).

---

# 1. What Are Shops and Why Bother?

A shop is a **real building on the map** that belongs to you on hub. Other players walk up to it and buy your stuff.

**What you can do:**

- ✅ Sell anything you can put in a vending machine — guns, meds, resources, food, farm goods
- ✅ Earn RP **while you're offline** — sales work 24/7, the RP lands instantly
- ✅ Name your shop and paint its signs (only you can)
- ✅ Show up on the in-game map and in **Rust+**, so buyers find you(also /shopslist available at all nodes)
- ✅ Get a private, locked building only you can enter

**What you should know before buying:**

- 🔒 **One shop per player.** Remove the old one before buying a new one.
- 🕐 **It's rented, not owned.** You pay RP per hour, forever.
- 📍 **You don't choose the location.** The server places it on a free plot.
- 🚫 **No refunds** if you remove it yourself.
- ⏳ **Lose a shop and you wait 5 hours** before you can buy another one.

> 💡 **Is it worth it?**
>
> A small shop costs **1,000 RP** and **500 RP/hour** in rent. One good sale usually pays for a whole day.

---

# 2. How to Buy a Shop

**The only way in is to talk to a shop vendor NPC.** Walk up to one and press **E**.

### Steps

1. Find a **shop vendor NPC** and press **E** to talk.
2. A menu opens with all available shops — picture, name, price.
3. Click a card. This does **not** buy anything yet — it opens a confirm window.
4. Read the price and rent, then press **Buy**.
5. Your shop is built on a free plot. Marker is placed on map for you. Your **4-digit lock code** is sent to you in chat.


### The Button Won't Let You Buy?

The button on each card tells you exactly why:

| Button says | What it means |
|---|---|
| `Buy Shop` | You're good. Click it. |
| `Not enough RP` | Go farm. |
| `No free plot` | Every spot for that shop size is taken. Come back later. |
| `Shop owned` | You already have a shop. One per player. |
| `Cooldown 4h 12m` | You lost a shop recently. The button counts down for you. |
| `Building...` | You already clicked. Give it a few seconds. |
| `Unavailable` | Server-side config problem — **tell an admin**. |

> 💡 **Your first hour of rent is free.** It's included with the purchase, so you have time to stock up before paying anything extra.

### ⏳ The 5 Hour Rebuy Cooldown

**Lose a shop and you can't buy another one for 5 hours.** No exceptions, no way to skip it.

It starts the moment you lose a shop — **for any reason**:

| How you lost it | Cooldown starts? |
|---|---|
| Rent ran out | ✅ Yes |
| You pressed **Remove shop** yourself | ✅ Yes |
| An admin deleted it | ✅ Yes |

**You don't have to count.** The shop card shows the exact time left, live, in the button: `Cooldown 4h 12m`. Talk to a vendor NPC any time to check it.

> 💡 **Why it exists**
>
> There are only so many plots. The cooldown stops people from grabbing a spot, dumping it, and instantly grabbing it back.

> ⚠ **Don't remove your shop to "move" it**
>
> You won't get a better plot — you'll get **5 hours with no shop**, no RP refund, and someone else may take the free spot while you wait. If your rent is running low, **extend it** instead.

If you lost your shop through a server issue or something that wasn't your fault, open a [support ticket](support-tickets) — an admin can clear the cooldown for you.

---

# 3. How to Pay / Extend Your Rent

**This is the section that saves your shop.** Do it before the timer hits zero.

### Steps

1. Walk to your shop and **press the tool cupboard** (E).
2. Your **owner panel** opens. The bar at the top is your remaining rent time.
3. Click the **Extend** dropdown at the bottom.
4. Pick **1h**, **6h**, **12h** or **24h** — each option shows its RP cost.
5. Press **Confirm**. Done.

### Rent Rules

| Rule | Detail |
|---|---|
| Included on purchase | **1 hour** free |
| Max you can prepay | **36 hours** ahead |
| Checked every | 60 seconds |
| Bar turns red | Under **20%** of your max time left |

> ⚠ **When the timer hits zero**
>
> The building is demolished automatically. Everything inside goes to your redeem storage.
>
> Get it back with **`/redeem shop`**. Nothing is ever deleted.

> 💡 **Lazy-proof it**
>
> Log in, walk to the cupboard, and top up to the **36h maximum**. Now you only have to think about rent once a day.

**Wealth tax:** if your RP balance is very high, hours past the first 3 in a single renewal cost slightly more. The panel shows the exact total before you confirm, so you'll never be surprised.

---

# 4. How to Put Something Up for Sale

Two parts: **put items in**, then **set the price**. They're done from opposite sides of the machine.

### Step 1 — Stock the Machine

Stand **behind** the vending machine and loot it like a normal one. Drop your items in.

> 💡 The plugin does **not** move items for you. If the machine is empty, you have nothing to sell.

### Step 2 — Set the Price

Stand in **front** of the machine and open it. (Or look at it and type **`/shopmanage`**.)

You'll see every item inside. For each one:

| Field | What it does |
|---|---|
| **Amount** | How many items the buyer gets in **one** purchase. Default 1. |
| **Price (RP)** | The price for that **whole batch** — not per item. |
| **List / Unlist** | Shows or hides the item from customers. |

3. Set **Amount**, set **Price**, press **List item**. It's now for sale.

### Rules

- 🚫 **Price 0 = not for sale.** It will never show up for buyers.
- 🔢 **Max 4 listed items per machine.** Unlist something to make room.
- 📦 A sold-out item **still uses a slot** — it shows as *Out of stock*. Unlist it.
- 🩹 **Damaged and fresh items are separate rows.** A gun at 72% and one at 100% are two listings with two prices, tagged `[72%]`. Food shows `[80% fresh]`.
- 🍖 Buyers always get the **least fresh** stack in a lot — so they never get worse than advertised.

### Naming Things

- Rename the **shop** from the tool cupboard panel.
- Rename each **vending machine** in the price editor (`V1`, `V2`, … by default).
- In the world they show as `<Shop name> <Machine name>`.

> 💡 **Map names are cut to 10 UPPERCASE characters** — that's a Rust limit. `Bob's Fine Guns` becomes `BOB'S FINE`. Put the important word first.

---

# 5. How to Buy From a Shop

The easy part. **Just open the vending machine.**

### Steps

1. Find a shop — **`/shopslist`**, or look for the shop markers on your map.
2. Walk up to the vending machine and press **E**.
3. You get the shop window: item, amount, stock left, and a **Buy — X RP** button.
4. Click **Buy**. RP leaves your balance, items land in your inventory.

### Finding Shops

- **`/shopslist`** opens a browser with **every shop on the network**, including shops on other servers. Each card shows the name, owner, item count and rent left.
- Click a shop to see its **full price list** — but you still have to walk there to buy.
- Press **Mark On Map** to pin it on your map. Press again to unpin(only on hub).
- Pinned shops **don't count** against your normal 5-marker limit. Pin as many as you like.
- Shops marked `On <server>` live on another server — their price list has a **Go To Hub** button that transfers you.
- Shop machines also broadcast on the **in-game map and Rust+**, like normal vending machines.

### Rules

- 📏 You must be **within 4 metres** of the machine.
- 🚫 You **cannot buy from your own shop**.
- 🎒 **Inventory full?** Items go to redeem storage — get them with **`/redeem shop`**. You're told in chat.
- 💰 The RP goes to the shop owner **instantly**.

---

# 6. Player Commands(All except /shopslist available only in hub)

| Command | What it does |
|---|---|
| **`/shopslist`** | Browse every shop on the network + their price lists |
| **`/shopmanage`** | Open the price editor for the machine you're looking at |
| **`/shopcode`** | Show your shop's 4-digit lock code in chat |
| **`/whereismyshop`** | Put the **MY SHOP** marker back on your map |
| **`/redeem shop`** | Collect items returned to you from a removed shop |

---

## Good to Know

- 🔐 Your shop's code lock **cannot be picked, unlocked or authorised on** by anyone. Only you get in.
- 🚪 Your **tool cupboard is yours alone** — you can't authorise friends or clanmates on it, even if you want to. Giving out the code doesn't change that.
- 🎨 Only you can **paint or erase the signs** on your shop.
- 🗑️ **Remove shop** (in the cupboard panel) destroys it on purpose. **No RP refund**, and it starts the **5 hour** rebuy cooldown. Your stock still goes to `/redeem shop`.
- 🚁 Delivery drones **cannot** buy from player shops.

---

## Troubleshooting

| Problem | Answer |
|---|---|
| "My shop disappeared!" | Rent ran out. Your items are safe — **`/redeem shop`**. |
| "It says cooldown." | You lost a shop in the last **5 hours**. The button shows the time left. |
| "`/buyshop` does nothing." | That command doesn't exist. **Talk to a shop vendor NPC.** |
| "I paid and got nothing." | Failed builds refund automatically. If not, open a [support ticket](support-tickets). |
| "I can't set a price." | Look at the machine from the **front**, not the back. |
| "I can't add a 5th item." | 4 listings per machine max. Unlist one first. |
| "Nobody can find my shop." | Rename it so the first 10 characters are recognisable. |
