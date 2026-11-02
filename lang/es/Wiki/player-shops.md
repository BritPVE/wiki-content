# Tiendas de jugadores (Player Shops)

Compra un edificio de tienda real en el mapa, llénalo con tus objetos y véndelos a otros jugadores por **RP** mientras estás offline.

## En corto: todo el sistema en 6 líneas

¿Tienes prisa? Lee esta tabla y vuelve a los detalles cuando los necesites.

| # | Haz esto | Cómo |
|---|---|---|
| 1 | **Compra una tienda** | Habla con el **NPC vendedor de tiendas**. Elige una tienda. Confirma. |
| 2 | **Consigue tu código** | Está en el chat. ¿Lo perdiste? **`/shopcode`** |
| 3 | **Paga el alquiler** | Pulsa el **tool cupboard** de tu tienda → **Extend** → **Confirm** |
| 4 | **Llénala** | Ponte **detrás** de la vending machine y ábrela como siempre |
| 5 | **Pon precios** | Mira la máquina por **delante** → fija Amount + Price → **List** |
| 6 | **Encuentra tiendas** | **`/shopslist`** |

> ⚠ **La única regla que importa**
>
> **Si se acaba el alquiler, tu tienda se demuele**, y no puedes comprar otra durante **5 horas**.
>
> Tus objetos **nunca** se borran. Recupéralos con **`/redeem shop`** (solo funciona en el HUB).

---

## 1. Qué son las tiendas y por qué molestarse

Una tienda es un **edificio real en el HUB** que te pertenece. Otros jugadores se acercan y compran tus cosas.

**Qué puedes hacer:**

- ✅ Vender cualquier cosa que quepa en una vending machine: armas, medicinas, recursos, comida, productos de granja
- ✅ Ganar RP **mientras estás offline**: las ventas funcionan 24/7 y el RP llega al instante
- ✅ Poner nombre a tu tienda y pintar sus carteles (solo tú puedes)
- ✅ Aparecer en el mapa del juego, en **Rust+** y en **`/shopslist`** (que funciona desde cualquier mundo), para que los compradores te encuentren
- ✅ Tener un edificio privado y cerrado al que solo tú entras

**Qué debes saber antes de comprar:**

- 🔒 **Una tienda por jugador.** Quita la vieja antes de comprar una nueva (y ten en cuenta el enfriamiento de 5 horas de abajo).
- 🕐 **Se alquila, no se posee.** Pagas RP por hora, para siempre.
- 📍 **Tú no eliges el sitio.** El servidor la coloca en una parcela libre.
- 🚫 **No hay reembolso** si la quitas tú.
- ⏳ **Si pierdes una tienda, esperas 5 horas** antes de poder comprar otra.

> 💡 **¿Vale la pena?**
>
> Una tienda pequeña cuesta **1,000 RP** y **500 RP/hora** de alquiler. Una buena venta suele pagar un día entero.

---

## 2. Cómo comprar una tienda

**La única forma de entrar es hablar con un NPC vendedor de tiendas.** Acércate a uno y pulsa **E**.

### Pasos

1. Encuentra un **NPC vendedor de tiendas** y pulsa **E** para hablar.
2. Se abre un menú con todas las tiendas disponibles: imagen, nombre, precio.
3. Haz clic en una tarjeta. Esto **no** compra nada todavía: abre una ventana de confirmación.
4. Lee el precio y el alquiler, y pulsa **Buy**.
5. Tu tienda se construye en una parcela libre, se coloca un marcador en tu mapa y tu **código de cerradura de 4 dígitos** se te envía por el chat.


### ¿El botón no te deja comprar?

El botón de cada tarjeta te dice exactamente por qué:

| El botón dice | Qué significa |
|---|---|
| `Buy Shop` | Puedes. Haz clic. |
| `Not enough RP` | Ve a farmear. |
| `No free plot` | Todos los sitios de ese tamaño de tienda están ocupados. Vuelve más tarde. |
| `Shop owned` | Ya tienes una tienda. Una por jugador. |
| `Cooldown 4h 12m` | Perdiste una tienda hace poco. El botón cuenta el tiempo por ti. |
| `Building...` | Ya hiciste clic. Dale unos segundos. |
| `Unavailable` | Problema de configuración del servidor: **díselo a un admin**. |

> 💡 **Tu primera hora de alquiler es gratis.** Va incluida en la compra, así que tienes tiempo de llenar la tienda antes de pagar nada extra.

### El enfriamiento de 5 horas para volver a comprar

**Si pierdes una tienda, no puedes comprar otra durante 5 horas.** Sin excepciones y sin forma de saltártelo.

Empieza en el momento en que pierdes una tienda, **por cualquier motivo**:

| Cómo la perdiste | ¿Empieza el enfriamiento? |
|---|---|
| Se acabó el alquiler | ✅ Sí |
| Pulsaste **Remove shop** tú mismo | ✅ Sí |
| Un admin la borró | ✅ Sí |

**No tienes que contar tú.** La tarjeta de la tienda muestra el tiempo exacto que queda, en vivo, en el botón: `Cooldown 4h 12m`. Habla con un NPC vendedor cuando quieras para mirarlo.

> 💡 **Por qué existe**
>
> Solo hay un número limitado de parcelas. El enfriamiento evita que alguien ocupe un sitio, lo suelte y lo vuelva a coger al instante.

> ⚠ **No quites tu tienda para "moverla"**
>
> No vas a conseguir una parcela mejor. Vas a tener **5 horas sin tienda**, sin reembolso de RP, y puede que otra persona ocupe el sitio libre mientras esperas. Si te queda poco alquiler, **amplíalo**.

Si perdiste la tienda por un fallo del servidor o por algo que no fue culpa tuya, abre un [ticket de soporte](/wiki/support-tickets): un admin puede quitarte el enfriamiento.

---

## 3. Cómo pagar / ampliar el alquiler

**Esta es la sección que salva tu tienda.** Hazlo antes de que el temporizador llegue a cero.

### Pasos

1. Ve a tu tienda y **pulsa el tool cupboard** (E).
2. Se abre tu **panel de dueño**. La barra de arriba es el tiempo de alquiler que te queda.
3. Haz clic en el desplegable **Extend** de abajo.
4. Elige **1h**, **6h**, **12h** o **24h**. Cada opción muestra su coste en RP.
5. Pulsa **Confirm**. Listo.

### Reglas del alquiler

| Regla | Detalle |
|---|---|
| Incluido al comprar | **1 hora** gratis |
| Máximo que puedes pagar por adelantado | **36 horas** |
| Se comprueba cada | 60 segundos |
| La barra se pone roja | Por debajo del **20%** de tu tiempo máximo restante |

> ⚠ **Cuando el temporizador llega a cero**
>
> El edificio se demuele solo. Todo lo de dentro va a tu almacén de recuperación.
>
> Recupéralo con **`/redeem shop`**. Nunca se borra nada.

> 💡 **A prueba de olvidos**
>
> Entra, ve al cupboard y rellena hasta el **máximo de 36h**. Así solo tienes que pensar en el alquiler una vez al día.

**Impuesto de riqueza:** si tu saldo de RP es muy alto, las horas que pasan de las primeras 3 en una misma renovación cuestan un poco más. El panel muestra el total exacto antes de que confirmes, así que no te vas a llevar una sorpresa.

---

## 4. Cómo poner algo a la venta

Dos partes: **meter objetos** y luego **poner el precio**. Se hacen desde lados opuestos de la máquina.

### Paso 1: llena la máquina

Ponte **detrás** de la vending machine y ábrela como una normal. Mete tus objetos.

> 💡 El plugin **no** mueve objetos por ti. Si la máquina está vacía, no tienes nada que vender.

### Paso 2: pon el precio

Ponte **delante** de la máquina y ábrela. (O mírala y escribe **`/shopmanage`**.)

Verás cada objeto de dentro. Para cada uno:

| Campo | Qué hace |
|---|---|
| **Amount** | Cuántos objetos recibe el comprador en **una** compra. Por defecto 1. |
| **Price (RP)** | El precio de ese **lote entero**, no por objeto. |
| **List / Unlist** | Muestra u oculta el objeto a los clientes. |

Fija **Amount**, fija **Price** y pulsa **List item**. Ya está a la venta.

### Reglas

- 🚫 **Precio 0 = no está a la venta.** Nunca aparece para los compradores.
- 🔢 **Máximo 4 objetos listados por máquina.** Quita uno de la lista para hacer sitio.
- 📦 Un objeto agotado **sigue ocupando una ranura**: se muestra como *Out of stock*. Quítalo de la lista.
- 🩹 **Los objetos dañados y los nuevos son filas distintas.** Un arma al 72% y otra al 100% son dos anuncios con dos precios, marcados `[72%]`. La comida muestra `[80% fresh]`.
- 🍖 Los compradores siempre reciben el stack **menos fresco** de un lote, así que nunca reciben algo peor de lo anunciado.

### Poner nombres

- Cambia el nombre de la **tienda** desde el panel del tool cupboard.
- Cambia el nombre de cada **vending machine** en el editor de precios (`V1`, `V2`, … por defecto).
- En el mundo se muestran como `<nombre de la tienda> <nombre de la máquina>`.

> 💡 **Los nombres del mapa se cortan a 10 caracteres EN MAYÚSCULAS** (un límite de Rust). `Bob's Fine Guns` se queda en `BOB'S FINE`. Pon primero la palabra importante.

---

## 5. Cómo comprar en una tienda

La parte fácil. **Solo abre la vending machine.**

### Pasos

1. Encuentra una tienda: **`/shopslist`**, o busca los marcadores de tienda en tu mapa.
2. Acércate a la vending machine y pulsa **E**.
3. Te sale la ventana de la tienda: objeto, cantidad, stock que queda y un botón **Buy — X RP**.
4. Haz clic en **Buy**. El RP sale de tu saldo y los objetos llegan a tu inventario.

### Encontrar tiendas

- **`/shopslist`** abre un navegador con **todas las tiendas de la red**, incluidas las de otros servidores. Cada tarjeta muestra el nombre, el dueño, el número de objetos y el alquiler que queda.
- Haz clic en una tienda para ver su **lista de precios completa**, pero igual tienes que ir andando para comprar.
- Pulsa **Mark On Map** para fijarla en tu mapa. Púlsalo otra vez para quitar el pin (solo en el HUB).
- Las tiendas fijadas **no cuentan** para tu límite normal de 5 marcadores. Fija todas las que quieras.
- Las tiendas marcadas `On <server>` viven en otro servidor. Su lista de precios tiene un botón **Go To Hub** que te transfiere.
- Las máquinas de las tiendas también se anuncian en el **mapa del juego y en Rust+**, como las vending machines normales.

### Reglas

- 📏 Tienes que estar **a menos de 4 metros** de la máquina.
- 🚫 **No puedes comprar en tu propia tienda**.
- 🎒 **¿Inventario lleno?** Los objetos van al almacén de recuperación. Recógelos con **`/redeem shop`**. Te lo dicen en el chat.
- 💰 El RP va al dueño de la tienda **al instante**.

---

## 6. Comandos de jugador

Todos estos, menos `/shopslist`, solo funcionan en el HUB.

| Comando | Qué hace |
|---|---|
| **`/shopslist`** | Recorre todas las tiendas de la red y sus listas de precios |
| **`/shopmanage`** | Abre el editor de precios de la máquina que estás mirando |
| **`/shopcode`** | Muestra en el chat el código de cerradura de 4 dígitos de tu tienda |
| **`/whereismyshop`** | Vuelve a poner el marcador **MY SHOP** en tu mapa |
| **`/redeem shop`** | Recoge objetos que te devolvieron de una tienda eliminada |

---

## Bueno saberlo

- 🔐 La cerradura de código de tu tienda **no se puede forzar, abrir ni autorizar** por nadie. Solo tú entras.
- 🚪 Tu **tool cupboard es solo tuyo**: no puedes autorizar a amigos ni a compañeros de clan, aunque quieras. Dar el código no cambia eso.
- 🎨 Solo tú puedes **pintar o borrar los carteles** de tu tienda.
- 🗑️ **Remove shop** (en el panel del cupboard) la destruye a propósito. **Sin reembolso de RP**, y empieza el enfriamiento de **5 horas** para volver a comprar. Tu stock igual va a `/redeem shop`.
- 🚁 Los drones de reparto **no pueden** comprar en tiendas de jugadores.

---

## Problemas frecuentes

| Problema | Respuesta |
|---|---|
| "¡Mi tienda desapareció!" | Se acabó el alquiler. Tus objetos están a salvo: **`/redeem shop`**. |
| "Dice cooldown." | Perdiste una tienda en las últimas **5 horas**. El botón muestra el tiempo que queda. |
| "`/buyshop` no hace nada." | Ese comando no existe. **Habla con un NPC vendedor de tiendas.** |
| "Pagué y no recibí nada." | Las construcciones fallidas se reembolsan solas. Si no, abre un [ticket de soporte](/wiki/support-tickets). |
| "No puedo poner un precio." | Mira la máquina por **delante**, no por detrás. |
| "No puedo añadir un 5.º objeto." | Máximo 4 anuncios por máquina. Quita uno de la lista primero. |
| "Nadie encuentra mi tienda." | Cámbiale el nombre para que los primeros 10 caracteres se reconozcan. |
