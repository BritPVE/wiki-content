# Oyuncu Mağazaları (Player Shops)

Harita üzerinde gerçek bir dükkan binası kiralayın, içini kendi eşyalarınızla doldurun ve siz çevrimdışıyken (offline) bile diğer oyunculara **RP** karşılığında satış yapın!

## Özet: 6 Adımda Tüm Sistem

Aceleniz mi var? Şu tabloyu inceleyin, detaylar için aşağıya bakın:

| # | Yapılacak İşlem | Nasıl Yapılır? |
|---|---|---|
| 1 | **Dükkan Satın Al** | HUB'daki **Shop Vendor NPC** ile konuşun. Bir dükkan seçip onaylayın. |
| 2 | **Kilit Kodunu Al** | Sohbette yazar. Unuttuysanız: **`/shopcode`** |
| 3 | **Kira Öde** | Dükkandaki **Tool Cupboard (Dolap)** ile etkileşime geçin → **Extend** → **Confirm** |
| 4 | **Eşya Doldur** | Otomatın (Vending Machine) **arkasına** geçin ve normal bir sandık gibi doldurun |
| 5 | **Fiyat Belirle** | Otomata **önden** bakın → Adet ve RP Fiyatını girin → **List** butonuna basın |
| 6 | **Dükkanları Bul** | **`/shopslist`** |

> ⚠ **En Kritik Kural**
>
> **Kira süresi biterse dükkanınız anında yıkılır** ve **5 saat** boyunca yeni bir dükkan satın alamazsınız!
>
> Eşyalarınız **asla silinmez**. HUB içerisindeyken **`/redeem shop`** yazarak tüm eşyalarınızı eksiksiz geri alabilirsiniz.

---

## 1. Dükkanlar Nedir ve Neden Sahip Olmalısınız?

Bir mağaza, **HUB dünyasında yer alan ve tamamen size ait olan gerçek bir binadır**. Diğer oyuncular dükkanınıza yürüyerek gelir ve eşyalarınızı satın alır.

**Neler yapabilirsiniz?**

- ✅ Bir otomata koyulabilen her şeyi satın — silahlar, ilaçlar, kaynaklar, yemekler, tarım ürünleri...
- ✅ **Çevrimdışıyken bile RP kazanın** — Satışlar 7/24 aralıksız çalışır, RP anında hesabınıza yatar.
- ✅ Dükkanınıza isim verin ve tabelalarını dilediğiniz gibi boyayın (sadece siz yapabilirsiniz).
- ✅ Haritada, **Rust+** uygulamasında ve tüm dünyalardan çalışan **`/shopslist`** menüsünde görünür olun; böylece alıcılar sizi kolayca bulsun.
- ✅ Sadece sizin girebileceğiniz kilitli, özel bir binaya sahip olun.

**Satın almadan önce bilmeniz gerekenler:**

- 🔒 **Oyuncu başına en fazla 1 dükkan.** Yeni bir dükkan almadan önce eskisini kaldırmalısınız (ve 5 saatlik bekleme süresine dikkat etmelisiniz).
- 🕐 **Mülk değil, kiralamadır.** Sürekli olarak saatlik RP kirası ödersiniz.
- 📍 **Konumu siz seçemezsiniz.** Sistem boşta olan bir parsele dükkanınızı otomatik kurar.
- 🚫 Dükkanı kendiniz kaldırırsanız **RP iadesi yapılmaz**.
- ⏳ **Dükkanınızı kaybederseniz** yenisini alabilmek için **5 saat** beklemeniz gerekir.

> 💡 **Kiralamaya değer mi?**
>
> Küçük bir dükkan **1.000 RP** alış fiyatına ve saatlik **500 RP** kiraya sahiptir. Tek bir iyi satış genellikle tüm günün kirasını fazlasıyla çıkarır!

---

## 2. Nasıl Dükkan Satın Alınır?

**Dükkan almanın tek yolu bir Shop Vendor NPC ile konuşmaktır.** Birine yaklaşın ve **E** tuşuna basın.

### Adımlar

1. Bir **Shop Vendor NPC** bulun ve konuşmak için **E** tuşuna basın.
2. Mevcut tüm dükkan modellerini (resim, isim, fiyat) gösteren bir menü açılır.
3. Bir karta tıklayın. Bu işlem hemen satın almaz; bir onay penceresi açar.
4. Fiyatı ve saatlik kirayı inceleyin, ardından **Buy** butonuna basın.
5. Dükkanınız boş bir parsele inşa edilir, haritanıza bir işaretleyici (marker) koyulur ve **4 haneli şifreniz** sohbette size iletilir.

### Buton Satın Almaya İzin Vermiyor mu?

Kartın üzerindeki buton sebebi tam olarak yazar:

| Buton Metni | Anlamı |
|---|---|
| `Buy Shop` | Her şey hazır, tıklayıp satın alabilirsiniz. |
| `Not enough RP` | Yeterli RP'niz yok, gidip RP kasın. |
| `No free plot` | Bu dükkan boyutu için tüm parseller dolu. Daha sonra tekrar deneyin. |
| `Shop owned` | Zaten bir dükkanınız var (kişi başı limit 1). |
| `Cooldown 4h 12m` | Yakın zamanda bir dükkan kaybettiniz. Buton kalan süreyi geri sayar. |
| `Building...` | Zaten tıkladınız, inşa edilmesi birkaç saniye sürebilir. |
| `Unavailable` | Sunucu yapılandırma sorunu — **bir yetkiliye bildirin**. |

> 💡 **İlk 1 saatlik kira ücretsizdir.** Satın alma ücretine dahildir; böylece ekstra ödeme yapmadan önce dükkanınızı dolduracak vaktiniz olur.

### 5 Saatlik Yeniden Satın Alma Bekleme Süresi (Cooldown)

**Bir dükkanı kaybederseniz 5 saat boyunca yeni bir dükkan satın alamazsınız.** İstisnası yoktur, atlanamaz.

Dükkanı nasıl kaybettiğiniz fark etmeksizin başlar:

| Nasıl Kaybettiniz? | Cooldown Başlar mı? |
|---|---|
| Kira süresi doldu | ✅ Evet |
| Panodan **Remove shop** dediniz | ✅ Evet |
| Admin sildi | ✅ Evet |

> ⚠ **Dükkanın yerini beğenmeyip sakın "taşımak" için silmeyin!**
>
> Daha iyi bir parsele geçemezsiniz. Üstüne üstlük **5 saat dükkansız kalırsınız**, RP iadesi alamazsınız ve siz beklerken boşalan yeri başkası kapabilir. Kira bitiyorsa silmek yerine **süresini uzatın**.

Eğer sunucu hatasından kaynaklanan bir durum varsa [Destek Bileti](/wiki/tr/support-tickets) açabilirsiniz; yetkililer bekleme sürenizi sıfırlayabilir.

---

## 3. Kira Nasıl Ödenir / Uzatılır?

**Dükkanınızı kurtaracak olan bölüm burasıdır.** Sayaç sıfırlanmadan önce mutlaka yapın!

### Adımlar

1. Dükkanınıza gidin ve **Tool Cupboard (Dolap)** ile etkileşime geçin (**E**).
2. **Sahip Paneli (Owner Panel)** açılır. Üstteki çubuk kalan kira sürenizi gösterir.
3. Alttaki **Extend** açılır menüsüne tıklayın.
4. **1h**, **6h**, **12h** veya **24h** seçeneklerinden birini belirleyin (her biri RP maliyetini yazar).
5. **Confirm** butonuna basın. İşlem tamam!

### Kira Kuralları

| Kural | Detay |
|---|---|
| Satın alımda hediye | **1 saat** ücretsiz |
| Maksimum ön ödeme | En fazla **36 saat** ileriye dönük ödenebilir |
| Kontrol sıklığı | Her 60 saniyede bir kontrol edilir |
| Kırmızı uyarı | Kalan süre maksimum sürenin **%20'sinin** altına düşerse çubuk kırmızıya döner |

> ⚠ **Sayaç Sıfırlandığında**
>
> Bina otomatik olarak yıkılır. İçindeki tüm eşyalar güvenle `/redeem` deposuna aktarılır.
>
> HUB içerisindeyken **`/redeem shop`** yazarak hepsini geri alabilirsiniz. Hiçbir eşyanız asla silinmez.

---

## 4. Eşyalar Nasıl Satışa Çıkarılır?

İki adım vardır: **Eşyaları içine koyun**, sonra **fiyatını belirleyin**. Bu işlemler otomatın zıt yönlerinden yapılır!

### 1. Adım: Otomata Eşya Koyma

Otomatın (Vending Machine) **arkasına** geçin ve normal bir sandık gibi açın. Satmak istediğiniz eşyaları içine bırakın.

### 2. Adım: Fiyat Belirleme

Otomatın **önüne** geçin ve menüsünü açın (veya otomata bakıp **`/shopmanage`** yazın).

İçindeki tüm eşyaları göreceksiniz:

| Alan | Ne İşe Yarar? |
|---|---|
| **Amount** | Alıcının **tek bir satın alımda** kaç adet alacağı (varsayılan 1). |
| **Price (RP)** | Belirlediğiniz adet için **toplam** satış fiyatı (tane başı değil). |
| **List / Unlist** | Eşyayı müşterilere gösterir veya gizler. |

Adeti girin, RP fiyatını yazın, **List item** butonuna basın. Artık satışta!

### Kurallar

- 🚫 **Fiyat 0 = Satılık değil.** Müşterilere asla gösterilmez.
- 🔢 **Otomat başına en fazla 4 listelenmiş ürün.** Yeni bir ürün eklemek için eskilerden birini Unlist yapın.
- 📦 Stoğu tükenen ürünler hala bir slot kaplar (*Out of stock* yazar). Boşaltmak için Unlist yapın.
- 🩹 **Hasarlı ve sağlam eşyalar ayrı satırlarda görünür.** %72 canı olan bir silah ile %100 olan ayrı fiyatlandırılır.

---

## 5. Başka Bir Dükkandan Nasıl Alışveriş Yapılır?

En kolay kısım: **Sadece otomatı açın.**

1. Bir dükkan bulun — **`/shopslist`** yazın veya haritadaki dükkan simgelerine bakın.
2. Otomata yaklaşın ve **E** tuşuna basın.
3. Açılan pencerede eşya, stok ve **Buy — X RP** butonu yer alır.
4. **Buy** butonuna tıklayın. RP hesabınızdan düşer, eşyalar anında envanterinize gelir!

---

## 6. Oyuncu Komutları

`/shopslist` hariç tüm bu komutlar yalnızca HUB dünyasında çalışır:

| Komut | Açıklama |
|---|---|
| **`/shopslist`** | Ağdaki tüm dükkanları ve fiyat listelerini tarar |
| **`/shopmanage`** | Baktığınız otomatın fiyat düzenleme panelini açar |
| **`/shopcode`** | Dükkanınızın 4 haneli kilit şifresini sohbette gösterir |
| **`/whereismyshop`** | Haritanıza **MY SHOP** işaretleyicisini yeniden koyar |
| **`/redeem shop`** | Yıkılan dükkandan kurtarılan eşyalarınızı geri almanızı sağlar |
