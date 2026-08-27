const WHATSAPP_PHONE = "905449375935";
const WHATSAPP_MESSAGE = "Merhaba, Kale House Nar için rezervasyon hakkında bilgi almak istiyorum.";
const RESELIVA_BOOKING_URL = "https://www.reseliva.com/booknow/kale-house-nar/";
const cafeImages = [
  "media/cafe/cafe-1.jpg",
  "media/cafe/cafe-2.jpg",
  "media/cafe/cafe-3.jpg",
  "media/cafe/cafe-4.jpg",
  "media/cafe/cafe-5.jpg",
  "media/cafe/cafe-6.jpg",
  "media/cafe/cafe-7.jpg",
  "media/cafe/cafe-8.jpg",
  "media/cafe/cafe-9.jpg"
];
const galleryImages = [
  "media/exterior/exterior-1.jpg",
  "media/exterior/exterior-2.jpg",
  "media/exterior/exterior-3.jpg",
  "media/exterior/exterior-4.jpg",
  "media/exterior/exterior-5.jpg",
  "media/exterior/exterior-6.jpg",
  "media/exterior/exterior-7.jpg",
  "media/exterior/exterior-8.jpg",
  "media/exterior/exterior-9.jpg",
  "media/exterior/exterior-10.jpg",
  "media/exterior/exterior-11.jpg",
  "media/exterior/exterior-12.jpg",
  "media/exterior/exterior-13.jpg",
  "media/exterior/exterior-14.jpg",
  "media/exterior/exterior-15.jpg",
  "media/exterior/exterior-16.jpg",
  "media/exterior/exterior-17.jpg",
  "media/exterior/exterior-18.jpg",
  "media/exterior/exterior-19.jpg",
  "media/exterior/exterior-20.jpg",
  "media/exterior/exterior-21.jpg",
  "media/exterior/exterior-22.jpg",
  "media/exterior/exterior-23.jpg",
  "media/exterior/exterior-24.jpg",
  "media/exterior/exterior-25.jpg",
  "media/exterior/exterior-26.jpg"
];

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetInitialScroll() {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

resetInitialScroll();
window.addEventListener("load", () => {
  resetInitialScroll();
  window.setTimeout(resetInitialScroll, 80);
});

// ODA FOTOĞRAFLARI: Fotoğraf eklemek/değiştirmek için aşağıdaki image path alanlarını düzenleyin.
const rooms = [
  {
    id: 101,
    key: "room101",
    category: "jacuzzi",
    images: [
      "media/rooms-web/101/101-1.jpg",
      "media/rooms-web/101/101-2.jpg",
      "media/rooms-web/101/101-3.jpg",
      "media/rooms-web/101/101-4.jpg",
      "media/rooms-web/101/101-5.jpg",
      "media/rooms-web/101/101-6.jpg",
      "media/rooms-web/101/101-7.jpg",
      "media/rooms-web/101/101-8.jpg",
      "101/room101.jpeg"
    ],
    icons: ["king", "jacuzzi", "cave", "wifi", "breakfast", "bath"]
  },
  {
    id: 102,
    key: "room102",
    category: "standard",
    images: [
      "media/rooms-web/102/102-1.jpg",
      "media/rooms-web/102/102-2.jpg",
      "media/rooms-web/102/102-3.jpg",
      "images/102.jpeg",
      "images2/102.jpeg"
    ],
    icons: ["king", "ac", "cave", "wifi", "breakfast", "bath"]
  },
  {
    id: 103,
    key: "room103",
    category: "standard",
    images: [
      "media/rooms-web/103/103-1.jpg",
      "media/rooms-web/103/103-2.jpg",
      "images/103 NO.jpg",
      "images/103.jpeg",
      "103/WhatsApp Image 2025-08-29 at 01.22.33.jpeg"
    ],
    icons: ["king", "ac", "stoneCave", "wifi", "breakfast", "bath"]
  },
  {
    id: 104,
    key: "room104",
    category: "jacuzzi",
    images: [
      "media/rooms-web/104/104-1.jpg",
      "media/rooms-web/104/104-2.jpg",
      "media/rooms-web/104/104-3.jpg",
      "media/rooms-web/104/104-4.jpg",
      "images/104.jpeg",
      "104/WhatsApp Image 2025-08-29 at 01.13.44.jpeg"
    ],
    icons: ["king", "jacuzzi", "hammam", "cave", "wifi", "breakfast", "bath"]
  },
  {
    id: 105,
    key: "room105",
    category: "jacuzzi",
    images: [
      "media/rooms-web/105/105-1.jpg",
      "media/rooms-web/105/105-2.jpg",
      "media/rooms-web/105/105-3.jpg",
      "images/105 Nolu.jpg",
      "images/105.jpg",
      "105/WhatsApp Image 2025-08-29 at 01.22.30.jpeg"
    ],
    icons: ["king", "jacuzzi", "ac", "stoneCave", "wifi", "breakfast", "bath"]
  },
  {
    id: 106,
    key: "room106",
    category: "jacuzzi",
    images: [
      "media/rooms-web/106/106-1.jpg",
      "media/rooms-web/106/106-2.jpg",
      "media/rooms-web/106/106-3.jpg",
      "media/rooms-web/106/106-4.jpg",
      "media/rooms-web/106/106-5.jpg",
      "media/rooms-web/106/106-6.jpg",
      "media/rooms-web/106/106-7.jpg",
      "media/rooms-web/106/106-8.jpg",
      "media/rooms-web/106/106-9.jpg",
      "media/rooms-web/106/106-10.jpg",
      "media/rooms-web/106/106-11.jpg",
      "media/rooms-web/106/106-12.jpg",
      "media/rooms-web/106/106-13.jpg",
      "media/rooms-web/106/106-14.jpg",
      "media/rooms-web/106/106-15.jpg"
    ],
    icons: ["king", "jacuzzi", "cave", "wifi", "breakfast", "bath"]
  },
  {
    id: 107,
    key: "room107",
    category: "standard",
    images: [
      "media/rooms-web/107/107-1.jpg",
      "media/rooms-web/107/107-2.jpg",
      "media/rooms-web/107/107-3.jpg",
      "media/rooms-web/107/107-4.jpg",
      "media/rooms-web/107/107-5.jpg",
      "images/107.jpeg"
    ],
    icons: ["king", "hammam", "stone", "wifi", "breakfast", "bath"]
  },
  {
    id: 108,
    key: "room108",
    category: "standard",
    images: ["images/108.jpeg", "108/WhatsApp Image 2025-08-29 at 01.37.07 (1).jpeg", "108/WhatsApp Image 2025-08-29 at 01.37.08 (1).jpeg"],
    icons: ["king", "ac", "stone", "wifi", "breakfast", "bath"]
  }
];

const translations = {
  tr: {
    brandTag: "Cave Boutique Hotel",
    navAbout: "Hakkında",
    navMission: "Misyon / Vizyon",
    navRooms: "Odalar",
    navAmenities: "Olanaklar",
    navTours: "Turlar",
    navCafe: "Kafe",
    navGallery: "Galeri",
    navContact: "İletişim",
    heroEyebrow: "Kapadokya / Nar",
    heroTitle: "Kale House Nar",
    heroText: "Taşın sıcaklığı, kaya odaların sessizliği ve butik konforun premium hali.",
    heroRooms: "Odaları İncele",
    heroReserve: "WhatsApp Rezervasyon",
    bookingCheckin: "Giriş Tarihi",
    bookingCheckout: "Çıkış Tarihi",
    bookingAdults: "Yetişkin",
    bookingChildren: "Çocuk",
    bookingRoom: "Oda",
    bookingSearch: "Uygunluk Sor",
    stripCave: "Kaya Oda Konsepti",
    stripPet: "Hayvan Dostu",
    stripNar: "Nar, Nevşehir",
    stripBreakfast: "Kahvaltı",
    aboutEyebrow: "Otel Hakkında",
    aboutTitle: "Nar'ın taş dokusunda sakin ve seçkin bir konaklama.",
    aboutText: "Kale House Nar, Kapadokya'nın kaya mimarisinden ilham alan sıcak, butik ve premium bir otel deneyimi sunar. Jakuzili kaya odalar, taş odalar, Türk hamamı seçenekleri ve bahçe/teras atmosferiyle hem romantik hem huzurlu konaklamalar için tasarlandı.",
    missionEyebrow: "Misyonumuz / Vizyonumuz",
    missionTitle: "Emekle büyüyen bir aile hikayesi.",
    missionHeading: "Misyonumuz",
    missionText: "Kale House Nar, sıfırdan kendi emeğiyle bugün 8 özel odaya ulaşmış bir aile işletmesidir. Misyonumuz; her misafirimizi ev sıcaklığıyla karşılamak, Kapadokya'nın taş ve kaya ruhunu konforla buluşturmak ve konaklayan herkesin buradan memnun, huzurlu ve güzel anılarla ayrılmasını sağlamaktır.",
    visionHeading: "Vizyonumuz",
    visionText: "Vizyonumuz; Kale House Nar ailesi olarak misafir memnuniyetini daima merkezde tutarak daha büyük, daha güçlü ve daha seçkin bir konaklama markasına dönüşmektir. Bugüne kadar emekle attığımız adımları gelecekte daha büyük işlerle büyütmek, Nar ve Kapadokya ruhunu daha fazla misafire aynı samimiyetle sunmak istiyoruz.",
    whyEyebrow: "Neden Kale House Nar?",
    whyTitle: "Butik konforu aile sıcaklığıyla buluşturan taş otel.",
    whyFamilyTitle: "Aile İşletmesi",
    whyFamilyText: "Samimi, ilgili ve misafir memnuniyetini merkezine alan sıcak bir karşılama.",
    whyCaveTitle: "Kaya Oda Deneyimi",
    whyCaveText: "Kapadokya ruhunu taşıyan taş ve kaya dokulu özel oda atmosferi.",
    whyPetTitle: "Hayvan Dostu",
    whyPetText: "Evcil dostlarınızla daha rahat ve huzurlu konaklama imkanı.",
    whyLocationTitle: "Nar'da Sakin Konum",
    whyLocationText: "Nevşehir Merkez'e yakın, Kapadokya gezileri için dengeli ve sakin bir başlangıç noktası.",
    catEyebrow: "Oda Kategorileri",
    catTitle: "Kaya ruhuna göre seçin.",
    catJacuzzi: "Jakuzili Odalar",
    catJacuzziText: "Özel jakuzi, kaya atmosferi ve romantik detaylar.",
    catStandard: "Standart Odalar",
    catStandardText: "Sade, konforlu ve taş/kaya dokulu butik odalar.",
    roomsEyebrow: "Odalar",
    roomsTitle: "8 özel oda, tek Kale House Nar ruhu.",
    filterAll: "Tümü",
    filterJacuzzi: "Jakuzili Odalar",
    filterStandard: "Standart Odalar",
    videoEyebrow: "Drone Video",
    videoTitle: "Kapadokya'nın üstünden Kale House Nar'a bakış.",
    videoText: "Drone videonuzu bu alana ekleyerek otelin konumunu, bahçesini ve taş dokusunu ilk ekranda premium şekilde gösterebilirsiniz.",
    amenitiesEyebrow: "Otel Olanakları",
    amenitiesTitle: "Butik konforun sessiz lüksü.",
    toursEyebrow: "Kapadokya Turları",
    toursTitle: "Konaklamanızı Kapadokya deneyimine dönüştürün.",
    toursText: "Kale House Nar ekibiyle bölgenin en sevilen tur ve aktivite seçenekleri için bilgi alabilir, konaklamanıza uygun planlama yapabilirsiniz.",
    tourGreenTag: "Doğa & Vadi",
    tourGreenTitle: "Green Tour",
    tourGreenText: "Ihlara Vadisi, yeraltı şehirleri ve Kapadokya'nın doğal rotalarına sakin bir gezi.",
    tourRedTag: "Klasik Rota",
    tourRedTitle: "Red Tour",
    tourRedText: "Göreme, Uçhisar, Paşabağ ve çevresindeki ikonik Kapadokya durakları.",
    tourBalloonTag: "Gün Doğumu",
    tourBalloonTitle: "Balon Seyri",
    tourBalloonText: "Kapadokya balonlarını gün doğumunda izlemek isteyen misafirler için yönlendirme ve planlama.",
    tourHorseTag: "Vadilerde Gezi",
    tourHorseTitle: "At Binme",
    tourHorseText: "Kapadokya vadilerinde gün batımı veya gündüz saatlerinde keyifli at turu seçenekleri.",
    tourCamelTag: "Fotoğraf Rotası",
    tourCamelTitle: "Deve Binme",
    tourCamelText: "Kısa süreli, fotoğraf odaklı ve Kapadokya atmosferine uygun deve turu deneyimi.",
    tourNightTag: "Eğlence",
    tourNightTitle: "Türk Gecesi",
    tourNightText: "Yöresel gösteriler, müzik ve Kapadokya akşamı atmosferi için Türk gecesi organizasyonu.",
    tourTransferTag: "Ulaşım",
    tourTransferTitle: "Transferler",
    tourTransferText: "Havalimanı, otogar ve bölge içi ulaşım ihtiyaçları için transfer desteği.",
    tourPrivateTag: "Size Özel",
    tourPrivateTitle: "Özel Turlar",
    tourPrivateText: "Çiftler, aileler ve küçük gruplar için zamana ve beklentiye göre kişiselleştirilen rota planları.",
    toursButton: "Turlar için bilgi al",
    cafeEyebrow: "Kafe / Teras",
    cafeTitle: "Nar manzarasında sıcak bir mola.",
    cafeText: "Taş dokulu kafe alanımızda kahvaltı, kahve ve günün sakin anları için misafirlerimize huzurlu bir atmosfer sunuyoruz.",
    nearbyEyebrow: "Yakındaki Yerler",
    nearbyTitle: "Kapadokya rotanıza kolay başlangıç.",
    nearbyNevsehir: "Nevşehir Merkez",
    nearbyUchisar: "Uçhisar Kalesi",
    nearbyGoreme: "Göreme Açık Hava Müzesi",
    nearbyBalloons: "Balon kalkış noktaları",
    nearbyAvanos: "Avanos",
    nearbyUnderground: "Yeraltı şehirleri rotası",
    faqEyebrow: "Sık Sorulan Sorular",
    faqTitle: "Konaklama öncesi merak edilenler.",
    faqCheckTitle: "Giriş ve çıkış saatleri nedir?",
    faqCheckText: "Genel giriş saati 14:00, çıkış saati 12:00 olarak planlanır. Özel talepleriniz için önceden bizimle iletişime geçebilirsiniz.",
    faqPetTitle: "Evcil hayvan kabul ediliyor mu?",
    faqPetText: "Evet, Kale House Nar hayvan dostu bir oteldir. Konaklama öncesinde evcil dostunuz hakkında bilgi vermeniz yeterlidir.",
    faqBreakfastTitle: "Kahvaltı var mı?",
    faqBreakfastText: "Kahvaltı hizmetimiz bulunmaktadır. Detay ve saat bilgisi için rezervasyon sırasında bize yazabilirsiniz.",
    faqParkingTitle: "Otopark mevcut mu?",
    faqParkingText: "Misafirlerimiz için otopark imkanı bulunmaktadır.",
    faqJacuzziTitle: "Jakuzili odalar hangileri?",
    faqJacuzziText: "101, 104, 105 ve 106 numaralı odalar jakuzili oda kategorisindedir.",
    galleryEyebrow: "Galeri",
    galleryTitle: "Taş, kaya ve Nar'ın sıcak ışığı.",
    locationEyebrow: "Konum",
    locationTitle: "Nar, Nevşehir Merkez'de kolay ulaşım.",
    reviewsEyebrow: "Misafir Yorumları",
    reviewsText: "Google'da 189 yorumla yüksek misafir memnuniyeti. Temizlik, kahvaltı, hizmet ve aile işletmesi sıcaklığı en çok öne çıkan başlıklar arasında.",
    reviewsLink: "Google yorumlarını gör",
    instagramEyebrow: "Instagram",
    instagramTitle: "Kale House Nar'dan kareler.",
    instagramButton: "Instagram'da takip et",
    contactEyebrow: "İletişim / Rezervasyon",
    contactTitle: "Konaklamanız için bize yazın.",
    contactText: "Rezervasyon, oda uygunluğu ve özel talepleriniz için formu doldurabilir veya WhatsApp üzerinden hemen ulaşabilirsiniz.",
    formName: "Ad Soyad",
    formEmail: "E-posta",
    formPhone: "Telefon",
    formMessage: "Mesaj",
    formSend: "Gönder",
    footerText: "Kapadokya Nar'da premium kaya butik otel.",
    footerTop: "Yukarı çık",
    detail: "Detay",
    photos: "Fotoğraflar",
    modalReserve: "WhatsApp'tan Rezervasyon",
    detailClose: "Detayı Kapat",
    categories: { jacuzzi: "Jakuzili Odalar", standard: "Standart Odalar" },
    icons: {
      jacuzzi: "Jakuzi",
      cave: "Kaya Oda",
      stoneCave: "Kaya/Taş Oda",
      stone: "Taş Oda",
      wifi: "Wi-Fi",
      breakfast: "Kahvaltı",
      bath: "Banyo",
      ac: "Klima",
      hammam: "Türk Hamamı",
      parking: "Otopark",
      pet: "Hayvan Dostu",
      garden: "Bahçe / Teras",
      whatsapp: "WhatsApp Rezervasyon",
      king: "King Size Yatak"
    },
    room101: { name: "101 - Nar-ı Aşk", feature: "Jakuzili, Tam Kaya Oda" },
    room102: { name: "102 - Standart Cave Room", feature: "Standart, Klimalı, Tam Kaya Oda" },
    room103: { name: "103 - Aşk-ı Harem", feature: "Standart, Klimalı, Yarı Kaya - Yarı Taş Oda" },
    room104: { name: "104 - Kaya Sarnıç", feature: "Jakuzili ve Türk Hamamlı, Tam Kaya Oda" },
    room105: { name: "105 - Aşk-ı Seyran", feature: "Jakuzili, Klimalı, Yarı Kaya - Yarı Taş Oda" },
    room106: { name: "106 - Keyif", feature: "Jakuzili, Tam Kaya Oda" },
    room107: { name: "107 - Huzur", feature: "Standart, Türk Hamamlı, Taş Oda" },
    room108: { name: "108 - Umut", feature: "Standart, Klimalı, Taş Oda" }
  },
  en: {
    brandTag: "Cave Boutique Hotel",
    navAbout: "About",
    navMission: "Mission / Vision",
    navRooms: "Rooms",
    navAmenities: "Amenities",
    navTours: "Tours",
    navCafe: "Cafe",
    navGallery: "Gallery",
    navContact: "Contact",
    heroEyebrow: "Cappadocia / Nar",
    heroTitle: "Kale House Nar",
    heroText: "Warm stone textures, quiet cave rooms and a premium boutique stay.",
    heroRooms: "View Rooms",
    heroReserve: "WhatsApp Booking",
    bookingCheckin: "Check-in",
    bookingCheckout: "Check-out",
    bookingAdults: "Adults",
    bookingChildren: "Children",
    bookingRoom: "Room",
    bookingSearch: "Ask Availability",
    stripCave: "Cave Room Concept",
    stripPet: "Pet Friendly",
    stripNar: "Nar, Nevsehir",
    stripBreakfast: "Breakfast",
    aboutEyebrow: "About Hotel",
    aboutTitle: "A calm, refined stay in Nar's stone texture.",
    aboutText: "Kale House Nar offers a warm, boutique and premium hotel experience inspired by Cappadocia's cave architecture. Jacuzzi cave rooms, stone rooms, Turkish bath options and a garden/terrace atmosphere are designed for romantic and peaceful stays.",
    missionEyebrow: "Mission / Vision",
    missionTitle: "A family story grown through dedication.",
    missionHeading: "Our Mission",
    missionText: "Kale House Nar is a family-run hotel that started from zero and reached 8 special rooms through its own effort and dedication. Our mission is to welcome every guest with genuine warmth, combine the stone and cave spirit of Cappadocia with comfort, and make sure each stay ends with satisfaction, peace and beautiful memories.",
    visionHeading: "Our Vision",
    visionText: "Our vision as the Kale House Nar family is to keep guest satisfaction at the center while growing into a larger, stronger and more distinguished hospitality brand. We want to carry the steps we have built with hard work into greater projects and share the spirit of Nar and Cappadocia with more guests in the same sincere way.",
    whyEyebrow: "Why Kale House Nar?",
    whyTitle: "A stone hotel where boutique comfort meets family warmth.",
    whyFamilyTitle: "Family Business",
    whyFamilyText: "A sincere welcome centered on care, warmth and guest satisfaction.",
    whyCaveTitle: "Cave Room Experience",
    whyCaveText: "Special stone and cave rooms carrying the spirit of Cappadocia.",
    whyPetTitle: "Pet Friendly",
    whyPetText: "A calmer stay with your beloved pets.",
    whyLocationTitle: "Quiet Nar Location",
    whyLocationText: "Close to central Nevsehir and balanced for Cappadocia routes.",
    catEyebrow: "Room Categories",
    catTitle: "Choose by the spirit of stone.",
    catJacuzzi: "Jacuzzi Rooms",
    catJacuzziText: "Private jacuzzi, cave atmosphere and romantic details.",
    catStandard: "Standard Rooms",
    catStandardText: "Simple, comfortable boutique rooms with stone and cave textures.",
    roomsEyebrow: "Rooms",
    roomsTitle: "8 special rooms, one Kale House Nar spirit.",
    filterAll: "All",
    filterJacuzzi: "Jacuzzi Rooms",
    filterStandard: "Standard Rooms",
    videoEyebrow: "Drone Video",
    videoTitle: "A view of Kale House Nar from above Cappadocia.",
    videoText: "Add your drone video here to show the hotel's location, garden and stone texture in a premium way.",
    amenitiesEyebrow: "Hotel Amenities",
    amenitiesTitle: "Quiet luxury in boutique comfort.",
    toursEyebrow: "Cappadocia Tours",
    toursTitle: "Turn your stay into a Cappadocia experience.",
    toursText: "With the Kale House Nar team, you can get information about the region's favorite tours and activities and plan them around your stay.",
    tourGreenTag: "Nature & Valley",
    tourGreenTitle: "Green Tour",
    tourGreenText: "A calm route through Ihlara Valley, underground cities and Cappadocia's natural landscapes.",
    tourRedTag: "Classic Route",
    tourRedTitle: "Red Tour",
    tourRedText: "Iconic Cappadocia stops around Goreme, Uchisar, Pasabag and nearby valleys.",
    tourBalloonTag: "Sunrise",
    tourBalloonTitle: "Balloon Watching",
    tourBalloonText: "Guidance and planning for guests who want to watch Cappadocia balloons at sunrise.",
    tourHorseTag: "Valley Ride",
    tourHorseTitle: "Horse Riding",
    tourHorseText: "Pleasant horse riding options in Cappadocia valleys during the day or at sunset.",
    tourCamelTag: "Photo Route",
    tourCamelTitle: "Camel Riding",
    tourCamelText: "A short, photo-friendly camel ride experience that fits the Cappadocia atmosphere.",
    tourNightTag: "Entertainment",
    tourNightTitle: "Turkish Night",
    tourNightText: "Turkish night organization with local shows, music and the evening spirit of Cappadocia.",
    tourTransferTag: "Transport",
    tourTransferTitle: "Transfers",
    tourTransferText: "Transfer support for airport, bus station and local transportation needs.",
    tourPrivateTag: "Tailored",
    tourPrivateTitle: "Private Tours",
    tourPrivateText: "Personalized routes for couples, families and small groups according to timing and expectations.",
    toursButton: "Ask about tours",
    cafeEyebrow: "Cafe / Terrace",
    cafeTitle: "A warm pause with Nar views.",
    cafeText: "Our stone-textured cafe area offers a peaceful atmosphere for breakfast, coffee and the quiet moments of the day.",
    nearbyEyebrow: "Nearby Places",
    nearbyTitle: "An easy start to your Cappadocia route.",
    nearbyNevsehir: "Central Nevsehir",
    nearbyUchisar: "Uchisar Castle",
    nearbyGoreme: "Goreme Open Air Museum",
    nearbyBalloons: "Balloon take-off points",
    nearbyAvanos: "Avanos",
    nearbyUnderground: "Underground city route",
    faqEyebrow: "FAQ",
    faqTitle: "Things to know before your stay.",
    faqCheckTitle: "What are check-in and check-out times?",
    faqCheckText: "Check-in is generally 14:00 and check-out is 12:00. Please contact us in advance for special requests.",
    faqPetTitle: "Are pets accepted?",
    faqPetText: "Yes, Kale House Nar is pet friendly. Please inform us before your stay.",
    faqBreakfastTitle: "Is breakfast available?",
    faqBreakfastText: "Breakfast service is available. You can ask us for details during reservation.",
    faqParkingTitle: "Is parking available?",
    faqParkingText: "Parking is available for our guests.",
    faqJacuzziTitle: "Which rooms have jacuzzi?",
    faqJacuzziText: "Rooms 101, 104, 105 and 106 are in the jacuzzi room category.",
    galleryEyebrow: "Gallery",
    galleryTitle: "Stone, cave and the warm light of Nar.",
    locationEyebrow: "Location",
    locationTitle: "Easy access in Nar, central Nevsehir.",
    reviewsEyebrow: "Guest Reviews",
    reviewsText: "High guest satisfaction on Google with 189 reviews. Cleanliness, breakfast, service and family warmth stand out.",
    reviewsLink: "See Google reviews",
    instagramEyebrow: "Instagram",
    instagramTitle: "Moments from Kale House Nar.",
    instagramButton: "Follow on Instagram",
    contactEyebrow: "Contact / Booking",
    contactTitle: "Write to us for your stay.",
    contactText: "For bookings, room availability and special requests, fill out the form or reach us instantly on WhatsApp.",
    formName: "Full Name",
    formEmail: "Email",
    formPhone: "Phone",
    formMessage: "Message",
    formSend: "Send",
    footerText: "Premium cave boutique hotel in Cappadocia Nar.",
    footerTop: "Back to top",
    detail: "Details",
    photos: "Photos",
    modalReserve: "Book on WhatsApp",
    detailClose: "Close Details",
    categories: { jacuzzi: "Jacuzzi Rooms", standard: "Standard Rooms" },
    icons: {
      jacuzzi: "Jacuzzi",
      cave: "Cave Room",
      stoneCave: "Cave/Stone Room",
      stone: "Stone Room",
      wifi: "Wi-Fi",
      breakfast: "Breakfast",
      bath: "Bathroom",
      ac: "Air Conditioning",
      hammam: "Turkish Bath",
      parking: "Parking",
      pet: "Pet Friendly",
      garden: "Garden / Terrace",
      whatsapp: "WhatsApp Booking",
      king: "King Size Bed"
    },
    room101: { name: "101 - Nar-i Ask", feature: "Jacuzzi, Full Cave Room" },
    room102: { name: "102 - Standard Cave Room", feature: "Standard, Air-conditioned, Full Cave Room" },
    room103: { name: "103 - Ask-i Harem", feature: "Standard, Air-conditioned, Half Cave - Half Stone Room" },
    room104: { name: "104 - Kaya Sarnic", feature: "Jacuzzi and Turkish Bath, Full Cave Room" },
    room105: { name: "105 - Ask-i Seyran", feature: "Jacuzzi, Air-conditioned, Half Cave - Half Stone Room" },
    room106: { name: "106 - Keyif", feature: "Jacuzzi, Full Cave Room" },
    room107: { name: "107 - Huzur", feature: "Standard, Turkish Bath, Stone Room" },
    room108: { name: "108 - Umut", feature: "Standard, Air-conditioned, Stone Room" }
  },
  ru: {
    brandTag: "Пещерный бутик-отель",
    navAbout: "Об отеле",
    navMission: "Миссия / Видение",
    navRooms: "Номера",
    navAmenities: "Удобства",
    navCafe: "Кафе",
    navGallery: "Галерея",
    navContact: "Контакты",
    heroEyebrow: "Каппадокия / Нар",
    heroTitle: "Kale House Nar",
    heroText: "Тепло камня, тишина пещерных номеров и премиальный бутик-комфорт.",
    heroRooms: "Смотреть номера",
    heroReserve: "Бронь WhatsApp",
    bookingCheckin: "Заезд",
    bookingCheckout: "Выезд",
    bookingAdults: "Взрослые",
    bookingChildren: "Дети",
    bookingRoom: "Номер",
    bookingSearch: "Спросить наличие",
    stripCave: "Пещерные номера",
    stripPet: "Можно с животными",
    stripNar: "Нар, Невшехир",
    stripBreakfast: "Завтрак",
    aboutEyebrow: "Об отеле",
    aboutTitle: "Спокойный и изысканный отдых в каменной атмосфере Нара.",
    aboutText: "Kale House Nar предлагает теплый, бутик и премиальный опыт, вдохновленный пещерной архитектурой Каппадокии. Номера с джакузи, каменные комнаты, турецкая баня и сад/терраса подходят для романтического и спокойного отдыха.",
    missionEyebrow: "Миссия / Видение",
    missionTitle: "Семейная история, выросшая трудом.",
    missionHeading: "Наша миссия",
    missionText: "Kale House Nar — семейный отель, который начался с нуля и собственным трудом вырос до 8 особенных номеров. Наша миссия — встречать каждого гостя с домашним теплом, соединять дух камня и пещер Каппадокии с комфортом и дарить гостям спокойствие, удовольствие и красивые воспоминания.",
    visionHeading: "Наше видение",
    visionText: "Наше видение как семьи Kale House Nar — всегда держать удовлетворенность гостей в центре и развиваться в более крупный, сильный и избранный гостиничный бренд. Мы хотим продолжать путь, построенный трудом, идти к большим проектам и с той же искренностью знакомить больше гостей с духом Нара и Каппадокии.",
    whyEyebrow: "Почему Kale House Nar?",
    whyTitle: "Каменный отель, где бутик-комфорт встречается с семейным теплом.",
    whyFamilyTitle: "Семейный бизнес",
    whyFamilyText: "Искренний прием, забота и удовлетворенность гостей в центре.",
    whyCaveTitle: "Пещерные номера",
    whyCaveText: "Особая атмосфера камня и пещер с духом Каппадокии.",
    whyPetTitle: "Можно с животными",
    whyPetText: "Более спокойное проживание с вашими питомцами.",
    whyLocationTitle: "Тихий Нар",
    whyLocationText: "Близко к центру Невшехира и удобно для маршрутов по Каппадокии.",
    catEyebrow: "Категории номеров",
    catTitle: "Выберите атмосферу камня.",
    catJacuzzi: "Номера с джакузи",
    catJacuzziText: "Личное джакузи, пещерная атмосфера и романтичные детали.",
    catStandard: "Стандартные номера",
    catStandardText: "Комфортные бутик-номера с каменной и пещерной фактурой.",
    roomsEyebrow: "Номера",
    roomsTitle: "8 особенных номеров, один дух Kale House Nar.",
    filterAll: "Все",
    filterJacuzzi: "С джакузи",
    filterStandard: "Стандартные",
    videoEyebrow: "Дрон-видео",
    videoTitle: "Вид на Kale House Nar над Каппадокией.",
    videoText: "Добавьте сюда дрон-видео, чтобы показать локацию, сад и каменную фактуру отеля.",
    amenitiesEyebrow: "Удобства",
    amenitiesTitle: "Тихая роскошь бутик-комфорта.",
    cafeEyebrow: "Кафе / Терраса",
    cafeTitle: "Теплая пауза с видом на Нар.",
    cafeText: "Наше кафе с каменной атмосферой создано для завтрака, кофе и спокойных моментов дня.",
    nearbyEyebrow: "Рядом",
    nearbyTitle: "Удобное начало маршрута по Каппадокии.",
    nearbyNevsehir: "Центр Невшехира",
    nearbyUchisar: "Крепость Учхисар",
    nearbyGoreme: "Музей под открытым небом Гёреме",
    nearbyBalloons: "Точки запуска шаров",
    nearbyAvanos: "Аванос",
    nearbyUnderground: "Маршрут подземных городов",
    faqEyebrow: "Вопросы",
    faqTitle: "Что важно знать перед проживанием.",
    faqCheckTitle: "Время заезда и выезда?",
    faqCheckText: "Обычно заезд в 14:00, выезд в 12:00. Для особых запросов свяжитесь с нами заранее.",
    faqPetTitle: "Можно с питомцами?",
    faqPetText: "Да, Kale House Nar принимает гостей с питомцами. Сообщите нам заранее.",
    faqBreakfastTitle: "Есть завтрак?",
    faqBreakfastText: "Да, завтрак доступен. Детали можно уточнить при бронировании.",
    faqParkingTitle: "Есть парковка?",
    faqParkingText: "Для гостей есть парковка.",
    faqJacuzziTitle: "Какие номера с джакузи?",
    faqJacuzziText: "Номера 101, 104, 105 и 106 относятся к категории с джакузи.",
    galleryEyebrow: "Галерея",
    galleryTitle: "Камень, пещеры и теплый свет Нара.",
    locationEyebrow: "Локация",
    locationTitle: "Удобный доступ в Нар, центр Невшехира.",
    reviewsEyebrow: "Отзывы гостей",
    reviewsText: "Высокая удовлетворенность гостей в Google: 189 отзывов. Особенно отмечают чистоту, завтрак, сервис и семейное тепло.",
    reviewsLink: "Смотреть отзывы Google",
    instagramEyebrow: "Instagram",
    instagramTitle: "Кадры из Kale House Nar.",
    instagramButton: "Подписаться в Instagram",
    contactEyebrow: "Контакты / Бронирование",
    contactTitle: "Напишите нам о вашем проживании.",
    contactText: "Для бронирования, наличия номеров и особых запросов заполните форму или напишите в WhatsApp.",
    formName: "Имя и фамилия",
    formEmail: "Эл. почта",
    formPhone: "Телефон",
    formMessage: "Сообщение",
    formSend: "Отправить",
    footerText: "Премиальный пещерный бутик-отель в Нар, Каппадокия.",
    footerTop: "Наверх",
    detail: "Детали",
    photos: "Фото",
    modalReserve: "Бронь в WhatsApp",
    detailClose: "Закрыть детали",
    categories: { jacuzzi: "Номера с джакузи", standard: "Стандартные номера" },
    icons: {
      jacuzzi: "Джакузи",
      cave: "Пещерный номер",
      stoneCave: "Пещера/камень",
      stone: "Каменный номер",
      wifi: "Wi-Fi",
      breakfast: "Завтрак",
      bath: "Ванная",
      ac: "Кондиционер",
      hammam: "Турецкая баня",
      parking: "Парковка",
      pet: "Можно с животными",
      garden: "Сад / Терраса",
      whatsapp: "Бронь WhatsApp",
      king: "Кровать King Size"
    },
    room101: { name: "101 - Nar-i Ask", feature: "Джакузи, полностью пещерный номер" },
    room102: { name: "102 - Standard Cave Room", feature: "Стандарт, кондиционер, полностью пещерный номер" },
    room103: { name: "103 - Ask-i Harem", feature: "Стандарт, кондиционер, наполовину пещера - наполовину камень" },
    room104: { name: "104 - Kaya Sarnic", feature: "Джакузи и турецкая баня, полностью пещерный номер" },
    room105: { name: "105 - Ask-i Seyran", feature: "Джакузи, кондиционер, наполовину пещера - наполовину камень" },
    room106: { name: "106 - Keyif", feature: "Джакузи, полностью пещерный номер" },
    room107: { name: "107 - Huzur", feature: "Стандарт, турецкая баня, каменный номер" },
    room108: { name: "108 - Umut", feature: "Стандарт, кондиционер, каменный номер" }
  },
  de: {
    brandTag: "Cave Boutique Hotel",
    navAbout: "Über uns",
    navMission: "Mission / Vision",
    navRooms: "Zimmer",
    navAmenities: "Ausstattung",
    navTours: "Touren",
    navCafe: "Cafe",
    navGallery: "Galerie",
    navContact: "Kontakt",
    heroEyebrow: "Kappadokien / Nar",
    heroTitle: "Kale House Nar",
    heroText: "Warme Steintexturen, ruhige Höhlenzimmer und ein Premium-Boutique-Aufenthalt.",
    heroRooms: "Zimmer ansehen",
    heroReserve: "WhatsApp Buchung",
    bookingCheckin: "Anreise",
    bookingCheckout: "Abreise",
    bookingAdults: "Erwachsene",
    bookingChildren: "Kinder",
    bookingRoom: "Zimmer",
    bookingSearch: "Verfügbarkeit fragen",
    stripCave: "Höhlenzimmer-Konzept",
    stripPet: "Haustierfreundlich",
    stripNar: "Nar, Nevsehir",
    stripBreakfast: "Frühstück",
    aboutEyebrow: "Über das Hotel",
    aboutTitle: "Ein ruhiger, ausgewählter Aufenthalt in Nars Steinstruktur.",
    aboutText: "Kale House Nar bietet ein warmes, luxuriöses Boutique-Erlebnis, inspiriert von der Höhlenarchitektur Kappadokiens. Jacuzzi-Höhlenzimmer, Steinzimmer, türkische Badoptionen und Garten/Terrasse sind für romantische und erholsame Aufenthalte gestaltet.",
    missionEyebrow: "Mission / Vision",
    missionTitle: "Eine Familiengeschichte, die durch Arbeit gewachsen ist.",
    missionHeading: "Unsere Mission",
    missionText: "Kale House Nar ist ein Familienbetrieb, der bei null begonnen hat und mit eigener Arbeit auf 8 besondere Zimmer gewachsen ist. Unsere Mission ist es, jeden Gast mit familiärer Wärme zu empfangen, den Stein- und Höhlengeist Kappadokiens mit Komfort zu verbinden und jedem Gast einen zufriedenen, ruhigen Aufenthalt mit schönen Erinnerungen zu schenken.",
    visionHeading: "Unsere Vision",
    visionText: "Unsere Vision als Kale House Nar Familie ist es, die Zufriedenheit unserer Gäste dauerhaft in den Mittelpunkt zu stellen und zu einer größeren, stärkeren und ausgewählten Unterkunftsmarke zu wachsen. Die Schritte, die wir mit Arbeit aufgebaut haben, möchten wir in Zukunft mit größeren Projekten fortführen und den Geist von Nar und Kappadokien noch mehr Gästen mit derselben Herzlichkeit anbieten.",
    whyEyebrow: "Warum Kale House Nar?",
    whyTitle: "Ein Steinhotel, in dem Boutique-Komfort auf Familienwärme trifft.",
    whyFamilyTitle: "Familienbetrieb",
    whyFamilyText: "Ein herzlicher Empfang mit Fokus auf Aufmerksamkeit und Gästezufriedenheit.",
    whyCaveTitle: "Höhlenzimmer-Erlebnis",
    whyCaveText: "Besondere Stein- und Höhlenzimmer mit dem Geist Kappadokiens.",
    whyPetTitle: "Haustierfreundlich",
    whyPetText: "Ein entspannter Aufenthalt mit Ihren Haustieren.",
    whyLocationTitle: "Ruhige Lage in Nar",
    whyLocationText: "Nahe am Zentrum von Nevsehir und ideal für Kappadokien-Routen.",
    catEyebrow: "Zimmerkategorien",
    catTitle: "Wählen Sie nach dem Geist des Steins.",
    catJacuzzi: "Jacuzzi Zimmer",
    catJacuzziText: "Privater Jacuzzi, Höhlenatmosphäre und romantische Details.",
    catStandard: "Standardzimmer",
    catStandardText: "Schlichte, komfortable Boutique-Zimmer mit Stein- und Höhlentextur.",
    roomsEyebrow: "Zimmer",
    roomsTitle: "8 besondere Zimmer, ein Kale House Nar Geist.",
    filterAll: "Alle",
    filterJacuzzi: "Jacuzzi Zimmer",
    filterStandard: "Standardzimmer",
    videoEyebrow: "Drohnenvideo",
    videoTitle: "Ein Blick auf Kale House Nar über Kappadokien.",
    videoText: "Fügen Sie hier Ihr Drohnenvideo ein, um Lage, Garten und Steinstruktur des Hotels hochwertig zu zeigen.",
    amenitiesEyebrow: "Hotel Ausstattung",
    amenitiesTitle: "Stille Eleganz im Boutique-Komfort.",
    toursEyebrow: "Kappadokien Touren",
    toursTitle: "Verwandeln Sie Ihren Aufenthalt in ein Kappadokien-Erlebnis.",
    toursText: "Mit dem Kale House Nar Team erhalten Sie Informationen zu beliebten Touren und Aktivitäten der Region.",
    tourGreenTag: "Natur & Tal",
    tourGreenTitle: "Green Tour",
    tourGreenText: "Ihlara-Tal, unterirdische Städte und natürliche Routen Kappadokiens.",
    tourRedTag: "Klassische Route",
    tourRedTitle: "Red Tour",
    tourRedText: "Goreme, Uchisar, Pasabag und ikonische Stationen Kappadokiens.",
    tourBalloonTag: "Sonnenaufgang",
    tourBalloonTitle: "Ballonbeobachtung",
    tourBalloonText: "Planung für Gäste, die die Ballons Kappadokiens bei Sonnenaufgang beobachten möchten.",
    tourHorseTag: "Talritt",
    tourHorseTitle: "Reiten",
    tourHorseText: "Reitmöglichkeiten in den Tälern Kappadokiens bei Tag oder Sonnenuntergang.",
    tourCamelTag: "Fotoroute",
    tourCamelTitle: "Kamelreiten",
    tourCamelText: "Kurze, fotofreundliche Kamelritt-Erlebnisse in Kappadokien.",
    tourNightTag: "Unterhaltung",
    tourNightTitle: "Türkischer Abend",
    tourNightText: "Lokale Shows, Musik und die Abendatmosphäre Kappadokiens.",
    tourTransferTag: "Transport",
    tourTransferTitle: "Transfers",
    tourTransferText: "Transferhilfe für Flughafen, Busbahnhof und regionale Fahrten.",
    tourPrivateTag: "Individuell",
    tourPrivateTitle: "Private Touren",
    tourPrivateText: "Personalisierte Routen für Paare, Familien und kleine Gruppen.",
    toursButton: "Touren anfragen",
    cafeEyebrow: "Cafe / Terrasse",
    cafeTitle: "Eine warme Pause mit Blick auf Nar.",
    cafeText: "Unser Cafe mit Steinatmosphäre bietet einen ruhigen Ort für Frühstück, Kaffee und entspannte Momente des Tages.",
    nearbyEyebrow: "In der Nähe",
    nearbyTitle: "Ein einfacher Start für Ihre Kappadokien-Route.",
    nearbyNevsehir: "Zentrum Nevsehir",
    nearbyUchisar: "Burg Uchisar",
    nearbyGoreme: "Goreme Freilichtmuseum",
    nearbyBalloons: "Ballon-Startpunkte",
    nearbyAvanos: "Avanos",
    nearbyUnderground: "Route der unterirdischen Städte",
    faqEyebrow: "FAQ",
    faqTitle: "Wissenswertes vor Ihrem Aufenthalt.",
    faqCheckTitle: "Wann sind Check-in und Check-out?",
    faqCheckText: "Check-in ist normalerweise um 14:00, Check-out um 12:00. Für besondere Wünsche kontaktieren Sie uns bitte vorher.",
    faqPetTitle: "Sind Haustiere erlaubt?",
    faqPetText: "Ja, Kale House Nar ist haustierfreundlich. Bitte informieren Sie uns vor Ihrem Aufenthalt.",
    faqBreakfastTitle: "Gibt es Frühstück?",
    faqBreakfastText: "Frühstück ist verfügbar. Details können Sie bei der Reservierung erfragen.",
    faqParkingTitle: "Gibt es Parkplätze?",
    faqParkingText: "Parkplätze stehen unseren Gästen zur Verfügung.",
    faqJacuzziTitle: "Welche Zimmer haben Jacuzzi?",
    faqJacuzziText: "Die Zimmer 101, 104, 105 und 106 gehören zur Jacuzzi-Kategorie.",
    galleryEyebrow: "Galerie",
    galleryTitle: "Stein, Höhle und das warme Licht von Nar.",
    locationEyebrow: "Standort",
    locationTitle: "Gute Erreichbarkeit in Nar, Zentrum Nevsehir.",
    reviewsEyebrow: "Gästebewertungen",
    reviewsText: "Hohe Gästezufriedenheit bei Google mit 189 Bewertungen. Besonders hervorgehoben werden Sauberkeit, Frühstück, Service und familiäre Wärme.",
    reviewsLink: "Google Bewertungen ansehen",
    instagramEyebrow: "Instagram",
    instagramTitle: "Momente aus Kale House Nar.",
    instagramButton: "Auf Instagram folgen",
    contactEyebrow: "Kontakt / Buchung",
    contactTitle: "Schreiben Sie uns für Ihren Aufenthalt.",
    contactText: "Für Buchungen, Verfügbarkeit und Sonderwünsche füllen Sie das Formular aus oder kontaktieren Sie uns direkt per WhatsApp.",
    formName: "Vor- und Nachname",
    formEmail: "E-Mail",
    formPhone: "Telefon",
    formMessage: "Nachricht",
    formSend: "Senden",
    footerText: "Premium Höhlen-Boutique-Hotel in Kappadokien Nar.",
    footerTop: "Nach oben",
    detail: "Details",
    photos: "Fotos",
    modalReserve: "Über WhatsApp buchen",
    detailClose: "Details schließen",
    categories: { jacuzzi: "Jacuzzi Zimmer", standard: "Standardzimmer" },
    icons: {
      jacuzzi: "Jacuzzi",
      cave: "Höhlenzimmer",
      stoneCave: "Höhle/Stein",
      stone: "Steinzimmer",
      wifi: "Wi-Fi",
      breakfast: "Frühstück",
      bath: "Bad",
      ac: "Klimaanlage",
      hammam: "Türkisches Bad",
      parking: "Parkplatz",
      pet: "Haustierfreundlich",
      garden: "Garten / Terrasse",
      whatsapp: "WhatsApp Buchung",
      king: "King Size Bett"
    },
    room101: { name: "101 - Nar-i Ask", feature: "Jacuzzi, vollständiges Höhlenzimmer" },
    room102: { name: "102 - Standard Cave Room", feature: "Standard, klimatisiert, vollständiges Höhlenzimmer" },
    room103: { name: "103 - Ask-i Harem", feature: "Standard, klimatisiert, halb Höhle - halb Stein" },
    room104: { name: "104 - Kaya Sarnic", feature: "Jacuzzi und türkisches Bad, vollständiges Höhlenzimmer" },
    room105: { name: "105 - Ask-i Seyran", feature: "Jacuzzi, klimatisiert, halb Höhle - halb Stein" },
    room106: { name: "106 - Keyif", feature: "Jacuzzi, vollständiges Höhlenzimmer" },
    room107: { name: "107 - Huzur", feature: "Standard, türkisches Bad, Steinzimmer" },
    room108: { name: "108 - Umut", feature: "Standard, klimatisiert, Steinzimmer" }
  }
};

const amenityKeys = ["wifi", "breakfast", "parking", "pet", "garden", "jacuzzi", "hammam", "ac", "cave", "whatsapp"];
const iconSvg = {
  king: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11V7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5V11"/><path d="M4 11h16a2 2 0 0 1 2 2v5"/><path d="M2 18h20"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M7 11V9h10v2"/></svg>',
  jacuzzi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z"/><path d="M7 19l-1 2"/><path d="M18 19l1 2"/><path d="M8 7c0-2 2-2 2-4"/><path d="M13 7c0-2 2-2 2-4"/><path d="M6 14h.01"/><path d="M10 15h.01"/><path d="M14 14h.01"/><path d="M18 15h.01"/></svg>',
  cave: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20V9l4-5h10l4 5v11"/><path d="M8 20v-7a4 4 0 0 1 8 0v7"/><path d="M7 8h10"/><path d="M5 12h3"/><path d="M16 12h3"/></svg>',
  stoneCave: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20V9l4-5h10l4 5v11"/><path d="M8 20v-6a4 4 0 0 1 8 0v6"/><path d="M4 14h4"/><path d="M16 14h4"/><path d="M7 8h10"/><path d="M11 4v4"/><path d="M4 10h16"/></svg>',
  stone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5 9 4h7l4 4.5V18l-4 2H8l-4-3V8.5Z"/><path d="M9 4v6"/><path d="M16 4v6"/><path d="M4 10h16"/><path d="M8 20v-5"/><path d="M16 20v-5"/><path d="M4 15h16"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9a12 12 0 0 1 16 0"/><path d="M7.5 12.5a7 7 0 0 1 9 0"/><path d="M10.5 16a3 3 0 0 1 3 0"/><path d="M12 20h.01"/></svg>',
  breakfast: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h10v5a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V8Z"/><path d="M15 10h2.5a2.5 2.5 0 0 1 0 5H15"/><path d="M4 20h14"/><path d="M8 4v2"/><path d="M12 4v2"/></svg>',
  bath: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1Z"/><path d="M7 19l-1 2"/><path d="M18 19l1 2"/><path d="M7 11V6a3 3 0 0 1 6 0"/><path d="M12 6h3"/></svg>',
  ac: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 6.5l-4.4 4.8L22 13l-6.4 1.7L20 19.5l-6.2-1.7L12 24l-1.8-6.2L4 19.5l4.4-4.8L2 13l6.4-1.7L4 6.5l6.2 1.7L12 2Z"/><path d="M12 9v6"/><path d="M9 12h6"/></svg>',
  hammam: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V9a7 7 0 0 1 14 0v11"/><path d="M3 20h18"/><path d="M9 20v-5a3 3 0 0 1 6 0v5"/><path d="M8 6h8"/><path d="M10 10h4"/><path d="M7 3 5 1"/><path d="M17 3l2-2"/></svg>',
  parking: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 21V3h7a5 5 0 0 1 0 10H7"/><path d="M7 13h7"/></svg>',
  pet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20c-4-2.7-7-5.5-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 3.5-3 6.3-7 9Z"/><path d="M8 7.5c-.8-1.2-2.2-1.5-3-.6"/><path d="M16 7.5c.8-1.2 2.2-1.5 3-.6"/></svg>',
  garden: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21V10"/><path d="M12 10C9 6 6 5 3 6c1 4 4 6 9 4Z"/><path d="M12 12c4-4 7-5 9-3-1 4-4 5-9 3Z"/><path d="M5 21h14"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 6.2 15.5A8 8 0 1 1 9 18.2L5 19Z"/><path d="M9.5 8.5c.4 3 2 4.8 5 6"/><path d="M9.5 8.5 8.5 10c.4 1.2 1.2 2.4 2.3 3.4 1 .9 2.1 1.6 3.2 2l1.5-1"/></svg>'
};

let currentLang = "tr";
let activeFilter = "all";
let modalRoom = null;
let modalImageIndex = 0;
let lightboxImages = [];
let lightboxIndex = 0;

const roomsGrid = document.querySelector("#roomsGrid");
const amenitiesGrid = document.querySelector("#amenitiesGrid");
const galleryGrid = document.querySelector("#galleryGrid");
const roomModal = document.querySelector("#roomModal");
const lightbox = document.querySelector("#lightbox");
const languageSwitcher = document.querySelector(".language-switcher");
const langToggle = document.querySelector(".lang-toggle");
const selectedFlag = document.querySelector(".selected-flag");
const roomDetail = document.querySelector("#roomDetail");
const detailImage = document.querySelector("#detailImage");
const detailThumbs = document.querySelector("#detailThumbs");
let detailRoom = null;
let detailImageIndex = 0;

Object.assign(translations.ru, {
  navTours: "Туры",
  toursEyebrow: "Туры по Каппадокии",
  toursTitle: "Превратите проживание в впечатление от Каппадокии.",
  toursText: "Команда Kale House Nar поможет подобрать популярные туры и активности региона под ваш график проживания.",
  tourGreenTag: "Природа и долины",
  tourGreenTitle: "Green Tour",
  tourGreenText: "Спокойный маршрут по долине Ихлара, подземным городам и природным местам Каппадокии.",
  tourRedTag: "Классический маршрут",
  tourRedTitle: "Red Tour",
  tourRedText: "Гёреме, Учхисар, Пашабаг и знаковые остановки Каппадокии.",
  tourBalloonTag: "Рассвет",
  tourBalloonTitle: "Наблюдение за шарами",
  tourBalloonText: "Помощь в планировании для гостей, которые хотят увидеть воздушные шары Каппадокии на рассвете.",
  tourHorseTag: "Прогулка по долинам",
  tourHorseTitle: "Конная прогулка",
  tourHorseText: "Варианты конных прогулок по долинам Каппадокии днем или на закате.",
  tourCamelTag: "Фотопрогулка",
  tourCamelTitle: "Прогулка на верблюдах",
  tourCamelText: "Короткий и фотогеничный опыт прогулки на верблюдах в атмосфере Каппадокии.",
  tourNightTag: "Развлечения",
  tourNightTitle: "Турецкая ночь",
  tourNightText: "Местные шоу, музыка и вечерняя атмосфера Каппадокии.",
  tourTransferTag: "Транспорт",
  tourTransferTitle: "Трансферы",
  tourTransferText: "Поддержка трансферов из аэропорта, автовокзала и по региону.",
  tourPrivateTag: "Индивидуально",
  tourPrivateTitle: "Индивидуальные туры",
  tourPrivateText: "Персональные маршруты для пар, семей и небольших групп.",
  toursButton: "Узнать о турах"
});

function t(key) {
  return translations[currentLang][key] || translations.tr[key] || key;
}

function roomText(room) {
  return translations[currentLang][room.key] || translations.tr[room.key];
}

function whatsappUrl(extra = "") {
  const message = extra || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function formatReselivaDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function reselivaUrl(formData) {
  const params = new URLSearchParams({
    numRooms: formData.get("room") || "1",
    pCheckInDate: formatReselivaDate(formData.get("checkin")),
    pCheckOutDate: formatReselivaDate(formData.get("checkout")),
    numAdults: formData.get("adults") || "2",
    numChildren: formData.get("children") || "0",
    lang: currentLang,
    pCurrency: "EUR",
    pCode: ""
  });

  return `${RESELIVA_BOOKING_URL}?${params.toString()}`;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
  selectedFlag.className = `flag selected-flag flag-${currentLang}`;
  renderRooms();
  renderAmenities();
  renderGallery();
  if (detailRoom) renderRoomDetail(detailRoom.id, detailImageIndex, false);
}

function renderRooms() {
  const visibleRooms = rooms.filter((room) => activeFilter === "all" || room.category === activeFilter);
  roomsGrid.innerHTML = visibleRooms.map((room) => {
    const text = roomText(room);
    const category = translations[currentLang].categories[room.category];
    return `
      <article class="room-card" data-category="${room.category}">
        <button class="room-image-btn" type="button" data-room-id="${room.id}" data-action="photos">
          <img src="${room.images[0]}" alt="${text.name}" loading="lazy">
        </button>
        <div class="room-card-body">
          <p class="eyebrow">${category}</p>
          <h3>${text.name}</h3>
          <p>${text.feature}</p>
          <div class="icon-list">
            ${room.icons.slice(0, 5).map((icon) => iconPill(icon)).join("")}
          </div>
          <div class="room-actions">
            <button class="btn primary" type="button" data-room-id="${room.id}" data-action="detail">${t("detail")}</button>
            <button class="btn ghost dark" type="button" data-room-id="${room.id}" data-action="photos">${t("photos")}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function iconPill(icon) {
  return `<span class="icon-pill"><span class="icon-symbol">${iconSvg[icon] || ""}</span>${translations[currentLang].icons[icon]}</span>`;
}

function renderAmenities() {
  amenitiesGrid.innerHTML = amenityKeys.map((key) => `
    <div class="amenity-item">
      <span class="amenity-icon">${iconSvg[key] || ""}</span>
      <span>${translations[currentLang].icons[key]}</span>
    </div>
  `).join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryImages.map((src, index) => `
    <button class="gallery-item" type="button" data-gallery-index="${index}">
      <img src="${src}" alt="Kale House Nar galeri ${index + 1}" loading="lazy">
    </button>
  `).join("");
}

function galleryStep() {
  const item = galleryGrid.querySelector(".gallery-item");
  if (!item) return 320;
  const styles = window.getComputedStyle(galleryGrid);
  const gap = Number.parseFloat(styles.columnGap || styles.gap) || 18;
  return item.getBoundingClientRect().width + gap;
}

function scrollGallery(direction = 1) {
  const step = galleryStep();
  const maxScroll = galleryGrid.scrollWidth - galleryGrid.clientWidth - 4;
  if (direction > 0 && galleryGrid.scrollLeft >= maxScroll) {
    galleryGrid.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }
  if (direction < 0 && galleryGrid.scrollLeft <= 4) {
    galleryGrid.scrollTo({ left: galleryGrid.scrollWidth, behavior: "smooth" });
    return;
  }
  galleryGrid.scrollBy({ left: step * direction, behavior: "smooth" });
}

function setupGalleryCarousel() {
  let autoScroll = window.setInterval(() => scrollGallery(1), 3200);

  const pause = () => window.clearInterval(autoScroll);
  const resume = () => {
    window.clearInterval(autoScroll);
    autoScroll = window.setInterval(() => scrollGallery(1), 3200);
  };

  document.querySelector(".gallery-scroll-btn.prev")?.addEventListener("click", () => {
    pause();
    scrollGallery(-1);
    resume();
  });

  document.querySelector(".gallery-scroll-btn.next")?.addEventListener("click", () => {
    pause();
    scrollGallery(1);
    resume();
  });

  galleryGrid.addEventListener("mouseenter", pause);
  galleryGrid.addEventListener("mouseleave", resume);
  galleryGrid.addEventListener("touchstart", pause, { passive: true });
  galleryGrid.addEventListener("touchend", resume, { passive: true });
}

function renderRoomDetail(roomId, imageIndex = 0, shouldScroll = true) {
  const room = rooms.find((item) => item.id === Number(roomId));
  if (!room) return;
  detailRoom = room;
  detailImageIndex = imageIndex;
  const text = roomText(room);
  roomDetail.hidden = false;
  document.querySelector("#detailCategory").textContent = translations[currentLang].categories[room.category];
  document.querySelector("#detailTitle").textContent = text.name;
  document.querySelector("#detailFeature").textContent = text.feature;
  document.querySelector("#detailIcons").innerHTML = room.icons.map((icon) => iconPill(icon)).join("");
  document.querySelector("#detailWhatsapp").href = whatsappUrl(`${text.name} için rezervasyon hakkında bilgi almak istiyorum.`);
  detailImage.src = room.images[detailImageIndex];
  detailImage.alt = text.name;
  detailThumbs.innerHTML = room.images.map((src, index) => `
    <button class="room-detail-thumb ${index === detailImageIndex ? "active" : ""}" type="button" data-detail-image="${index}">
      <img src="${src}" alt="${text.name} fotoğraf ${index + 1}" loading="lazy">
    </button>
  `).join("");
  if (shouldScroll) {
    roomDetail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeRoomDetail() {
  roomDetail.hidden = true;
  detailRoom = null;
  detailImageIndex = 0;
}

function openRoom(roomId, startIndex = 0) {
  modalRoom = rooms.find((room) => room.id === Number(roomId));
  if (!modalRoom) return;
  modalImageIndex = startIndex;
  const text = roomText(modalRoom);
  document.querySelector("#modalCategory").textContent = translations[currentLang].categories[modalRoom.category];
  document.querySelector("#modalTitle").textContent = text.name;
  document.querySelector("#modalFeature").textContent = text.feature;
  document.querySelector("#modalIcons").innerHTML = modalRoom.icons.map((icon) => iconPill(icon)).join("");
  document.querySelector("#modalWhatsapp").href = whatsappUrl(`${text.name} için rezervasyon hakkında bilgi almak istiyorum.`);
  updateModalImage();
  roomModal.classList.add("open");
  roomModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function updateModalImage() {
  const image = document.querySelector("#modalImage");
  image.src = modalRoom.images[modalImageIndex];
  image.alt = roomText(modalRoom).name;
}

function changeModalImage(direction) {
  if (!modalRoom) return;
  modalImageIndex = (modalImageIndex + direction + modalRoom.images.length) % modalRoom.images.length;
  updateModalImage();
}

function closeRoomModal() {
  roomModal.classList.remove("open");
  roomModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;
  updateLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function updateLightbox() {
  const image = document.querySelector("#lightboxImage");
  image.src = lightboxImages[lightboxIndex];
  image.alt = `Kale House Nar fotoğraf ${lightboxIndex + 1}`;
}

function changeLightbox(direction) {
  lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelector(".nav-toggle").addEventListener("click", (event) => {
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  document.querySelector(".main-nav").classList.toggle("open");
  document.querySelector(".language-switcher").classList.toggle("open");
});

langToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = languageSwitcher.classList.toggle("dropdown-open");
  langToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    applyTranslations();
    languageSwitcher.classList.remove("dropdown-open");
    langToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!languageSwitcher.contains(event.target)) {
    languageSwitcher.classList.remove("dropdown-open");
    langToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderRooms();
  });
});

roomsGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-room-id]");
  if (!trigger) return;
  const room = rooms.find((item) => item.id === Number(trigger.dataset.roomId));
  if (trigger.dataset.action === "photos") {
    openLightbox(room.images, 0);
  } else {
    renderRoomDetail(trigger.dataset.roomId);
  }
});

detailThumbs.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-detail-image]");
  if (!trigger || !detailRoom) return;
  renderRoomDetail(detailRoom.id, Number(trigger.dataset.detailImage), false);
});

document.querySelector("#detailPhotoButton").addEventListener("click", () => {
  if (!detailRoom) return;
  openLightbox(detailRoom.images, detailImageIndex);
});

document.querySelector("#detailClose").addEventListener("click", closeRoomDetail);

document.querySelector("#bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  window.open(reselivaUrl(data), "_blank", "noopener");
});

galleryGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-gallery-index]");
  if (!trigger) return;
  openLightbox(galleryImages, Number(trigger.dataset.galleryIndex));
});

document.querySelectorAll("[data-cafe-index]").forEach((button) => {
  button.addEventListener("click", () => {
    openLightbox(cafeImages, Number(button.dataset.cafeIndex));
  });
});

roomModal.querySelector(".modal-close").addEventListener("click", closeRoomModal);
roomModal.querySelector(".prev").addEventListener("click", () => changeModalImage(-1));
roomModal.querySelector(".next").addEventListener("click", () => changeModalImage(1));
roomModal.addEventListener("click", (event) => {
  if (event.target === roomModal) closeRoomModal();
});

lightbox.querySelector(".modal-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".prev").addEventListener("click", () => changeLightbox(-1));
lightbox.querySelector(".next").addEventListener("click", () => changeLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeRoomModal();
    closeLightbox();
  }
  if (event.key === "ArrowLeft") {
    if (roomModal.classList.contains("open")) changeModalImage(-1);
    if (lightbox.classList.contains("open")) changeLightbox(-1);
  }
  if (event.key === "ArrowRight") {
    if (roomModal.classList.contains("open")) changeModalImage(1);
    if (lightbox.classList.contains("open")) changeLightbox(1);
  }
});

applyTranslations();
setupGalleryCarousel();
