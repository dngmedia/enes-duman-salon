// İlk girişte veritabanı boşsa bir kez yüklenir. Sonrasında panelden düzenlenir.
export const SEED_SERVICES = [
 {
  "id": "s01",
  "name": "Fön",
  "price": 0,
  "order": 1
 },
 {
  "id": "s02",
  "name": "Maşa",
  "price": 0,
  "order": 2
 },
 {
  "id": "s03",
  "name": "Saç Yıkama",
  "price": 0,
  "order": 3
 },
 {
  "id": "s04",
  "name": "Saç Kesim",
  "price": 0,
  "order": 4
 },
 {
  "id": "s05",
  "name": "Çıt Çıt Takma",
  "price": 0,
  "order": 5
 },
 {
  "id": "s06",
  "name": "Topuz",
  "price": 0,
  "order": 6
 },
 {
  "id": "s07",
  "name": "Topuz Aksesuar",
  "price": 0,
  "order": 7
 },
 {
  "id": "s08",
  "name": "Dip Boya",
  "price": 0,
  "order": 8
 },
 {
  "id": "s09",
  "name": "Bitkisel Dip Boya",
  "price": 0,
  "order": 9
 },
 {
  "id": "s10",
  "name": "Komple Boya",
  "price": 0,
  "order": 10
 },
 {
  "id": "s11",
  "name": "Bitkisel Komple Boya",
  "price": 0,
  "order": 11
 },
 {
  "id": "s12",
  "name": "Wimleks",
  "price": 0,
  "order": 12
 },
 {
  "id": "s13",
  "name": "Dip Açma",
  "price": 0,
  "order": 13
 },
 {
  "id": "s14",
  "name": "Silme Boyama",
  "price": 0,
  "order": 14
 },
 {
  "id": "s15",
  "name": "Paketli Açma",
  "price": 0,
  "order": 15
 },
 {
  "id": "s16",
  "name": "Röfle - Balyaj - Ombre",
  "price": 0,
  "order": 16
 },
 {
  "id": "s17",
  "name": "Perma",
  "price": 0,
  "order": 17
 },
 {
  "id": "s18",
  "name": "Nem Bakım",
  "price": 0,
  "order": 18
 },
 {
  "id": "s19",
  "name": "Keratin - Kolajen - Bakım",
  "price": 0,
  "order": 19
 },
 {
  "id": "s20",
  "name": "Kalıcı Fön",
  "price": 0,
  "order": 20
 },
 {
  "id": "s21",
  "name": "Saç Kaynak",
  "price": 0,
  "order": 21
 },
 {
  "id": "s22",
  "name": "Makyaj",
  "price": 0,
  "order": 22
 },
 {
  "id": "s23",
  "name": "Kaş - Dudak Üstü",
  "price": 0,
  "order": 23
 },
 {
  "id": "s24",
  "name": "Bütün Yüz",
  "price": 0,
  "order": 24
 },
 {
  "id": "s25",
  "name": "Kirpik Takma",
  "price": 0,
  "order": 25
 },
 {
  "id": "s26",
  "name": "Manikür",
  "price": 0,
  "order": 26
 },
 {
  "id": "s27",
  "name": "Pedikür",
  "price": 0,
  "order": 27
 },
 {
  "id": "s28",
  "name": "Ağda",
  "price": 0,
  "order": 28
 },
 {
  "id": "s29",
  "name": "Kına - Gelin",
  "price": 0,
  "order": 29
 },
 {
  "id": "s30",
  "name": "Nişan - Özel Gün",
  "price": 0,
  "order": 30
 },
 {
  "id": "s31",
  "name": "Kozmetik",
  "price": 0,
  "order": 31
 },
 {
  "id": "s99",
  "name": "Diğer (elle yazılır)",
  "price": 0,
  "order": 99,
  "custom": true
 }
];

export const SEED_EMPLOYEES = [
 {
  "phone": "",
  "active": true,
  "createdAt": "2026-11-01T15:10:00.000Z",
  "name": "Enes Duman (Usta)",
  "order": 1,
  "rates": {
   "s01": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s02": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s03": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s04": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s05": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s06": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s07": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s08": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s09": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s10": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s11": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s12": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s13": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s14": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s15": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s16": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s17": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s18": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s19": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s20": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s21": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s22": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s23": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s24": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s25": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s26": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s27": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s28": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s29": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s30": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s31": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s99": {
    "on": true,
    "type": "pct",
    "value": 10
   }
  },
  "id": "e1"
 },
 {
  "phone": "",
  "active": true,
  "createdAt": "2026-11-01T15:10:00.000Z",
  "name": "Emre Sarıkaya (Usta)",
  "order": 2,
  "rates": {
   "s01": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s02": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s03": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s04": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s05": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s06": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s07": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s08": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s09": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s10": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s11": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s12": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s13": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s14": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s15": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s16": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s17": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s18": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s19": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s20": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s21": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s22": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s23": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s24": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s25": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s26": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s27": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s28": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s29": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s30": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s31": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s99": {
    "on": true,
    "type": "pct",
    "value": 10
   }
  },
  "id": "e2"
 },
 {
  "phone": "",
  "active": true,
  "createdAt": "2026-11-01T15:10:00.000Z",
  "name": "Sedef (Çırak)",
  "order": 3,
  "rates": {
   "s18": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s19": {
    "on": true,
    "type": "pct",
    "value": 10
   }
  },
  "id": "e3"
 },
 {
  "phone": "",
  "active": true,
  "createdAt": "2026-11-01T15:10:00.000Z",
  "name": "Deniz (Çırak)",
  "order": 4,
  "rates": {
   "s18": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s19": {
    "on": true,
    "type": "pct",
    "value": 10
   }
  },
  "id": "e4"
 },
 {
  "phone": "",
  "active": true,
  "createdAt": "2026-11-01T15:10:00.000Z",
  "name": "Eslem (Çırak)",
  "order": 5,
  "rates": {
   "s18": {
    "on": true,
    "type": "pct",
    "value": 10
   },
   "s19": {
    "on": true,
    "type": "pct",
    "value": 10
   }
  },
  "id": "e5"
 },
 {
  "phone": "",
  "active": true,
  "createdAt": "2026-11-01T15:10:00.000Z",
  "name": "Sevil (Makeup)",
  "order": 6,
  "rates": {
   "s26": {
    "on": true,
    "type": "pct",
    "value": 25
   },
   "s27": {
    "on": true,
    "type": "pct",
    "value": 25
   },
   "s28": {
    "on": true,
    "type": "pct",
    "value": 25
   },
   "s25": {
    "on": true,
    "type": "pct",
    "value": 25
   },
   "s24": {
    "on": true,
    "type": "pct",
    "value": 25
   },
   "s23": {
    "on": true,
    "type": "pct",
    "value": 25
   },
   "s22": {
    "on": true,
    "type": "pct",
    "value": 25
   }
  },
  "id": "e6"
 }
];
