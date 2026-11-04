# Enes Duman Hair — Salon Prim Paneli

Çalışanlar, işlemler, çalışan bazlı prim oranları, müşteri kartları (boya formülü + notlar) ve geçmiş işlemler. Tek yönetici girişi, veriler Firebase Firestore'da.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın kendisi |
| `firebase-config.js` | Firebase bağlantı bilgileri (**doldurulacak**) |
| `seed.js` | İlk girişte otomatik yüklenen 32 işlem + 6 çalışan ve prim oranları |
| `firestore.rules` | Güvenlik kuralı: sadece yönetici e-postası okuyup yazabilir (**e-posta yazılacak**) |

## Kurulum (bir kerelik, ~10 dk)

### 1. Firebase projesi
1. https://console.firebase.google.com → **Proje ekle** → ad: `enes-duman-salon` (Analytics kapalı olabilir).
2. Sol menü **Build → Authentication → Başlayın → E-posta/Şifre**'yi etkinleştir.
3. **Users** sekmesi → **Kullanıcı ekle** → yöneticinin e-postası ve şifresi.
4. Authentication → **Settings → User actions** → **Enable create (sign-up)** kutusunun işaretini kaldır (dışarıdan hesap açılamasın).
5. **Authentication → Settings → Authorized domains** → **Add domain** → `dngmedia.github.io`.

### 2. Firestore veritabanı
1. Sol menü **Build → Firestore Database → Veritabanı oluştur** → konum `eur3 (europe-west)` → **Production mode**.
2. **Rules** sekmesine `firestore.rules` dosyasının içeriğini yapıştır, `YONETICI_EPOSTA@gmail.com` yerine 1. adımda eklediğin e-postayı yaz → **Yayınla**.
   - Birden fazla yönetici olacaksa: `['enes@gmail.com', 'diger@gmail.com']`

### 3. Bağlantı bilgileri
1. Firebase → ⚙️ **Proje ayarları → Genel** → aşağıda **Web uygulaması ekle (</>)** → takma ad ver → kaydet.
2. Çıkan `firebaseConfig` değerlerini GitHub'da `firebase-config.js` dosyasına yapıştır (kalem ikonu → düzenle → Commit).

### 4. Aç
`https://dngmedia.github.io/enes-duman-salon/` → yönetici e-postası ve şifresiyle giriş. İlk girişte işlemler ve çalışanlar otomatik yüklenir.

## Sekmeler
- **İşlem Kayıtları:** adisyon — müşteri (yoksa otomatik oluşur), çok satırlı işlem, her satıra usta/çırak, ödeme şekli (Nakit / Kart / Oluşum POS / IBAN), isteğe bağlı boya no / not.
- **Giderler:** tarih, gider kalemi (30 kalem, krediler dahil), tutar, not.
- **Kart KDV:** Kart ödemelerinde %20 KDV raporda düşülür; Raporlar sekmesinden "kart tutarının %20'si" ya da "KDV fiyata dahil (÷1,20)" seçilir.
- **Raporlar:** tarih aralığında gelir, gider, prim hakedişi, kâr/zarar; gün / hafta / ay kırılımı; ödeme şekline ve gider kalemine göre dağılım.
- **Çalışanlar · İşlemler · Müşteriler:** prim oranları, fiyatlar, boya formülü, notlar, geçmiş işlemler.

## Prim mantığı
- Her çalışanın her işlem için ayrı oranı var: **%** (ücretin yüzdesi) veya **₺** (sabit tutar).
- Bir işleme birden fazla kişi seçilebilir; ücret kişi sayısına bölünür, herkes kendi payından kendi oranıyla prim alır (10.000 ₺ / 2 usta → 5.000 ₺ × %10 = 500 ₺ her birine).
- Kayıt anındaki oran kayda yazılır; sonradan oran değişse de eski aylar bozulmaz.

Başlangıç oranları: Enes Duman ve Emre Sarıkaya tüm işlemlerden %10 · Çıraklar Nem Bakım ve Keratin-Kolajen-Bakım'dan %10 · Sevil manikür, pedikür, ağda, kirpik, bütün yüz, kaş-dudak üstü ve makyajdan %25.
