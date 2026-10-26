/**
 * ANGARA — Artisanal Charcoal Hearth & Heritage Spice Table
 * Frontend Interactivity & Bilingual Translation Logic
 */

// ================= I18N BILINGUAL TRANSLATIONS =================
const i18n = {
  id: {
    nav_reservations: "RESERVASI",
    nav_menus: "MENU",
    nav_press: "PRESS / RUANG PRIVAT",
    nav_story: "TENTANG KAMI",
    nav_full_menu: "DAFTAR HIDANGAN",
    story_lead: "ANGARA menghidangkan kekayaan kuliner warisan api dan rempah pedalaman yang belum banyak diceritakan.",
    story_body: "Terlalu lama khazanah kuliner anak benua diseragamkan ke dalam kuah kental manis yang kehilangan jiwanya. Kami menolak kompromi tersebut. Dari perapian tanah liat di pedalaman Bihar, aroma minyak moster dingin Benggala, hingga bara arang pesisir Malabar, kami menghidangkan resep pusaka yang diwariskan turun-temurun—dimasak perlahan dalam kuali tanah liat dan anglo arang membara.",
    story_tagline: "Karena cita rasa yang paling mendalam adalah kisah yang paling jarang diangkat ke permukaan.",
    heading_pdf_menus: "PDF Menus",
    label_food: "FOOD",
    label_beverage: "BEVERAGES",
    label_private_dining: "PRIVATE DINING",
    heading_menu: "Menu",
    menu_subtitle: "FOOD • KAPASITAS TERBATAS",
    category_food: "FOOD",
    sub_snacks: "SNACKS & SMALL PLATES",
    sub_angithi: "DARI BARA ANGLO (ANGITHI)",
    sub_handi: "KUALI DUM HANDI & GULAI PERAPAN",
    sub_breads: "ROTI TANDOR & NASI SAFRON",
    item1_name: "Kolhapuri Charred Wild Prawns",
    item1_desc: "Udang bakau liar segar dibakar di atas bara arang, dilumuri bumbu thecha cabai hijau, kelapa sangrai, dan bawang putih.",
    item2_name: "Smoked Beetroot & Goat Cheese Tikki",
    item2_desc: "Kroket bit asap renyah berisi keju kambing lembut, disajikan dengan chutney asam jawa dan yoghurt safron dingin.",
    item3_name: "Dahi Ragda Puri Crisp",
    item3_desc: "Puri gandum berongga diisi kari kacang ragda kuning, yoghurt manis dingin, delima segar, dan taburan sev.",
    item4_name: "Angara Murgh Mathania Tikka",
    item4_desc: "Paha ayam kampung dimarinasi 24 jam dengan cabai Mathania, minyak moster dingin, dan yoghurt, dibakar di tandoor.",
    item5_name: "Pahadi Smoked Lamb Chops",
    item5_desc: "Iga kambing muda dipanggang di atas bara arang kayu keras dengan rempah daun pegunungan, pala, dan minyak samin.",
    item6_name: "Tandoori Malai Paneer Skewers",
    item6_desc: "Keju paneer segar bertekstur lembut dimarinasi krim susu kental, kapulaga hijau, lada putih sangrai, dan paprika.",
    item_crab_name: "Tellicherry Black Pepper Mud Crab",
    item_crab_desc: "Kepiting bakau liar dimasak dalam santan kelapa peras dingin, lada hitam Tellicherry tumbuk, daun kari goreng, dan jeruk nipis bakar.",
    item7_name: "Royal Awadhi Dum Gosht Biryani",
    item7_desc: "Beras basmati matang dan daging kambing muda dimasak lambat 14 jam dalam handi tembaga bersegel dengan safron murni dan raita mint.",
    item8_name: "Champaran Ahuna Earthen Pot Mutton",
    item8_desc: "Resep legendaris desa Bihar: kambing, bawang putih utuh bakar, minyak moster mentah, dan ketumbar dalam kendi tanah liat tertutup.",
    item9_name: "Dal Angara Smoked Charcoal Ghee",
    item9_desc: "Lentil hitam urad dimasak lambat 24 jam dengan tomat ranum, mentega kultur, dan diasapi arang menyala (teknik dhungar).",
    item10_name: "Truffle & Confit Garlic Naan",
    item10_desc: "Roti naan beragi alami dipanggang di dinding tungku tanah liat, diolesi mentega bawang putih konfit dan minyak truffle hitam wangi.",
    item11_name: "Kashmiri Sheermal Saffron Flatbread",
    item11_desc: "Roti pipih festive diuleni susu hangat, diresapi seduhan safron pekat Kashmir dan sari bunga jeruk.",
    item_rice_name: "Aged Saffron Basmati Rice",
    item_rice_desc: "Nasi basmati butir panjang dikukus bersama kapulaga hijau utuh, cengkeh wangi, dan mentega safron keemasan.",
    heading_press: "Reviews & Press",
    press1_date: "CRITIC'S PICK • 2025",
    press1_quote: "“Salah satu santap malam paling berani, menggugah selera, dan sarat kejujuran rasa yang pernah hadir dalam kancah gastronomi kota.”",
    press2_date: "BEST NEW RESTAURANTS IN AMERICA",
    press2_quote: "“Sebuah perayaan rempah dan bara api yang tak terbantahkan. Menikmati masakan kuali tanah liat di sini adalah pengalaman magis.”",
    press3_date: "PETE WELLS' TOP 10 DISHES",
    press3_quote: "“Kepiting lada hitam Tellicherry dan biryani 14 jam dari Angara akan mereset cara pandang Anda terhadap keagungan masakan pedalaman.”",
    press4_date: "STANDOUT RESTAURANT OF THE YEAR",
    press4_quote: "“Mendobrak batas kenyamanan kuliner umum dengan hidangan yang sarat karakter, membakar rasa penasaran di setiap gigitan.”",
    press5_date: "★★★★★ MUST VISIT",
    press5_quote: "“Atmosfer yang hidup, harum asap kayu manis, dan sate iga kambing bakar arang terenak yang ada di kota.”",
    press6_date: "THE ABSOLUTE BEST OF NYC",
    press6_quote: "“Tanpa kepura-puraan. Murni penghormatan kepada tradisi dapur desa yang hampir terlupakan zaman.”",
    heading_make_res: "Make a Reservation",
    res_p1: "Reservasi untuk 1 hingga 6 tamu dibuka 30 hari sebelumnya melalui sistem reservasi daring kami.",
    res_p2: "Untuk perjamuan khusus, rombongan di atas 6 tamu, atau pemesanan ruang privat, silakan hubungi tim resepsi kami di dining@angararestaurant.com.",
    res_p3: "Harap perhatikan kebijakan pembatalan: pembatalan dalam waktu kurang dari 24 jam dapat dikenakan biaya reservasi.",
    btn_reserve_pill: "RESERVE A TABLE",
    btn_gift_card: "BUY A GIFT CARD",
    footer_dinein: "Dine-in & Pesan Antar",
    footer_hours1: "Selasa – Minggu: 17.00 – 22.30",
    footer_hours2: "Senin Tutup",
    footer_inquiries: "Pertanyaan Umum & Pers",
    footer_group: "Bagian dari Heritage Hearth Hospitality Group<br>Restoran Mitra: Masala Kothi • Malabar Club • Saffron House",
    footer_copy: "Hak Cipta © 2025–2026 ANGARA. Seluruh hak cipta dilindungi undang-undang.",
    res_modal_head: "Pesan Meja Anda",
    res_modal_desc: "Konfirmasi reservasi meja langsung tanpa biaya di muka.",
    field_guests: "Jumlah Tamu",
    field_date: "Tanggal Kunjungan",
    field_time: "Waktu Duduk",
    field_name: "Nama Lengkap *",
    field_phone: "Nomor WhatsApp / HP *",
    field_email: "Alamat Email *",
    field_notes: "Permintaan Khusus atau Alergi Makanan",
    btn_confirm_res: "KONFIRMASI RESERVASI",
    ticket_head: "Reservasi Dikonfirmasi!",
    ticket_desc: "Kami sangat menantikan kehadiran Anda di ANGARA.",
    ticket_note: "Detail reservasi telah dikirimkan ke WhatsApp & Email Anda.",
    btn_done: "SELESAI"
  },
  en: {
    nav_reservations: "RESERVATIONS",
    nav_menus: "MENUS",
    nav_press: "PRESS / PRIVATE DINING",
    nav_story: "OUR STORY",
    nav_full_menu: "THE MENU",
    story_lead: "ANGARA presents the untold culinary riches of provincial fires and heirloom spices.",
    story_body: "For too long, the subcontinent's culinary brilliance has been reduced to generic heavy gravies. We dismantle that myth. From the rustic earthen chulhas of Bihar and pungent mustard oil of Bengal to the searing charcoal coals of the Malabar coast, our kitchen brings back treasured heirloom recipes—slow-braised in clay handis and live sal-wood embers.",
    story_tagline: "Because the most powerful flavors are the ones that rarely get told.",
    heading_pdf_menus: "PDF Menus",
    label_food: "FOOD",
    label_beverage: "BEVERAGES",
    label_private_dining: "PRIVATE DINING",
    heading_menu: "Menu",
    menu_subtitle: "FOOD • LIMITED CAPACITY",
    category_food: "FOOD",
    sub_snacks: "SNACKS & SMALL PLATES",
    sub_angithi: "FROM THE ANGITHI (CHARCOAL)",
    sub_handi: "ROYAL DUM HANDI & SLOW BRAISES",
    sub_breads: "ARTISANAL BREADS & RICE",
    item1_name: "Kolhapuri Charred Wild Prawns",
    item1_desc: "Wild prawns seared on open coals with spicy green chili thecha, toasted coconut relish, and roasted garlic.",
    item2_name: "Smoked Beetroot & Goat Cheese Tikki",
    item2_desc: "Crispy smoked beetroot patties stuffed with creamy goat cheese, tamarind coulis, and chilled saffron dahi.",
    item3_name: "Dahi Ragda Puri Crisp",
    item3_desc: "Crisp semolina shells filled with warm spiced ragda yellow peas, sweet hung curd, pomegranates, and sev.",
    item4_name: "Angara Murgh Mathania Tikka",
    item4_desc: "Pasture chicken thighs steeped 24 hours in Mathania chilies, cold-pressed mustard oil, and hung curd, blistered in clay pit.",
    item5_name: "Pahadi Smoked Lamb Chops",
    item5_desc: "Prime grass-fed lamb ribs grilled over hardwood coals infused with wild mountain herbs, mace, and cultured ghee.",
    item6_name: "Tandoori Malai Paneer Skewers",
    item6_desc: "Fresh farm paneer marinated in clotted cream, crushed green cardamom, toasted white peppercorns, and charred peppers.",
    item_crab_name: "Tellicherry Black Pepper Mud Crab",
    item_crab_desc: "Mangrove crab braised in stone-ground coconut milk, cracked Tellicherry black pepper, sizzled curry leaves, and charred lime.",
    item7_name: "Royal Awadhi Dum Gosht Biryani",
    item7_desc: "Aged basmati and tender baby mutton slow-braised for 14 hours in sealed handi with royal saffron and smoked mint raita.",
    item8_name: "Champaran Ahuna Earthen Pot Mutton",
    item8_desc: "Heirloom Bihari village recipe: mutton, whole charred garlic bulbs, raw mustard oil, and coriander in sealed earthen pot.",
    item9_name: "Dal Angara Smoked Charcoal Ghee",
    item9_desc: "Black urad lentils slow-simmered for 24 hours with vine tomatoes, cultured butter, and infused with smoldering dhungar smoke.",
    item10_name: "Truffle & Confit Garlic Naan",
    item10_desc: "Wild-fermented sourdough naan baked on clay walls, brushed with roasted confit garlic and black truffle oil.",
    item11_name: "Kashmiri Sheermal Saffron Flatbread",
    item11_desc: "Warm milk-kneaded festive flatbread brushed with pure saffron infusion and wild orange blossom essence.",
    item_rice_name: "Aged Saffron Basmati Rice",
    item_rice_desc: "Steamed long-grain basmati with whole green cardamom, cloves, and golden saffron butter.",
    heading_press: "Reviews & Press",
    press1_date: "CRITIC'S PICK • 2025",
    press1_quote: "“One of the most thrilling, unapologetic, and honestly rooted meals to arrive on the city’s dining landscape.”",
    press2_date: "BEST NEW RESTAURANTS IN AMERICA",
    press2_quote: "“A triumph of primal fire and regional heritage. Dining from their sealed clay pots is pure culinary wizardry.”",
    press3_date: "PETE WELLS' TOP 10 DISHES",
    press3_quote: "“The Tellicherry pepper crab and 14-hour biryani at Angara will permanently reset your appreciation for provincial gastronomy.”",
    press4_date: "STANDOUT RESTAURANT OF THE YEAR",
    press4_quote: "“Shatters conventional curryhouse norms with dishes of fierce personality, sparking intrigue at every single bite.”",
    press5_date: "★★★★★ MUST VISIT",
    press5_quote: "“An electric room thick with the scent of smoked cinnamon and the single finest charcoal lamb chops anywhere.”",
    press6_date: "THE ABSOLUTE BEST OF NYC",
    press6_quote: "“Without artifice or pretension. A genuine celebration of village hearth cooking that time almost forgot.”",
    heading_make_res: "Make a Reservation",
    res_p1: "Reservations for parties of 1 to 6 guests are available 30 days in advance via our online booking engine.",
    res_p2: "For private dining room buyouts or large parties of 7 or more guests, please contact our events team at dining@angararestaurant.com.",
    res_p3: "Please note our cancellation policy: cancellations made within 24 hours of the reserved seating time are subject to a nominal fee.",
    btn_reserve_pill: "RESERVE A TABLE",
    btn_gift_card: "BUY A GIFT CARD",
    footer_dinein: "Dine-in & Curbside Pickup",
    footer_hours1: "Tuesday – Sunday: 5:00pm – 10:30pm",
    footer_hours2: "Closed on Mondays",
    footer_inquiries: "General & Press Inquiries",
    footer_group: "Part of Heritage Hearth Hospitality Group<br>Explore our sister tables: Masala Kothi • Malabar Club • Saffron House",
    footer_copy: "Copyright © 2025–2026 ANGARA. All Rights Reserved.",
    res_modal_head: "Book a Table",
    res_modal_desc: "Instant live confirmation for dining at Angara.",
    field_guests: "Party Size",
    field_date: "Dining Date",
    field_time: "Seating Time",
    field_name: "Full Name *",
    field_phone: "Phone / WhatsApp *",
    field_email: "Email *",
    field_notes: "Special Dietary Requirements / Seating Requests",
    btn_confirm_res: "CONFIRM RESERVATION",
    ticket_head: "Reservation Confirmed!",
    ticket_desc: "We look forward to hosting you at Angara.",
    ticket_note: "A confirmation copy has been sent to your WhatsApp and Email.",
    btn_done: "DONE"
  }
};

let currentLanguage = 'id';

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileMenu();
  initReservationDate();
  initReservationModal();
  initPdfModal();
});

// ================= LANGUAGE TOGGLE =================
function initLanguage() {
  const toggleBtn = document.getElementById("langToggleBtn");
  const curLabel = document.getElementById("currentLangLabel");
  const tarLabel = document.getElementById("targetLangLabel");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
    curLabel.textContent = currentLanguage.toUpperCase();
    tarLabel.textContent = currentLanguage === 'id' ? 'EN' : 'ID';
    applyTranslations();
  });

  applyTranslations();
}

function applyTranslations() {
  const dict = i18n[currentLanguage];
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (dict[key]) {
      elem.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = currentLanguage;
}

// ================= MOBILE MENU =================
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileDrawer");
  const closeBtn = document.getElementById("mobileDrawerClose");
  const links = document.querySelectorAll(".mob-link");

  if (!btn || !drawer) return;

  btn.addEventListener("click", () => {
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
  });

  const closeMenu = () => {
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  links.forEach(l => l.addEventListener("click", closeMenu));
}

// ================= RESERVATION MODAL =================
function initReservationDate() {
  const dateInput = document.getElementById("resDate");
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }
}

function initReservationModal() {
  const reserveModal = document.getElementById("reserveModal");
  const ticketModal = document.getElementById("ticketModal");
  const openBtn = document.getElementById("resModalOpenBtn");
  const floatingBtn = document.getElementById("floatingBookBtn");
  const closeReserveBtn = document.getElementById("closeReserveModal");
  const closeTicketBtn = document.getElementById("closeTicketBtn");
  const form = document.getElementById("resForm");
  const giftCardBtn = document.getElementById("giftCardBtn");

  // Open modal
  const openModal = () => {
    reserveModal.classList.add("active");
    reserveModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    reserveModal.classList.remove("active");
    reserveModal.setAttribute("aria-hidden", "true");
    ticketModal.classList.remove("active");
    ticketModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (floatingBtn) floatingBtn.addEventListener("click", openModal);
  if (closeReserveBtn) closeReserveBtn.addEventListener("click", closeModal);
  if (closeTicketBtn) closeTicketBtn.addEventListener("click", closeModal);

  // Close on backdrop
  [reserveModal, ticketModal].forEach(m => {
    if (m) {
      m.addEventListener("click", (e) => {
        if (e.target === m) closeModal();
      });
    }
  });

  // Form Submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("guestName").value.trim();
      const guests = document.getElementById("partySize").value;
      const date = document.getElementById("resDate").value;
      const time = document.getElementById("resTime").value;

      if (!name) return;

      const code = "#ANG-" + Math.floor(10000 + Math.random() * 90000);
      document.getElementById("ticketCode").textContent = code;
      document.getElementById("ticketGuest").textContent = name;
      document.getElementById("ticketDetails").textContent = `${guests} Tamu / Guests • ${date} • ${time}`;

      reserveModal.classList.remove("active");
      ticketModal.classList.add("active");
      ticketModal.setAttribute("aria-hidden", "false");
      form.reset();
    });
  }

  // Gift Card button click
  if (giftCardBtn) {
    giftCardBtn.addEventListener("click", () => {
      alert(currentLanguage === 'id' 
        ? "Kartu Hadiah Angara: Silakan hubungi layanan tamu di dining@angararestaurant.com untuk voucher digital." 
        : "Angara Gift Card: Please contact our concierge at dining@angararestaurant.com for digital vouchers.");
    });
  }
}

// ================= PDF MENU MODAL VIEWER =================
function initPdfModal() {
  const modal = document.getElementById("pdfModal");
  const closeBtn = document.getElementById("closePdfModal");
  const downloadBtn = document.getElementById("simPdfDownloadBtn");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      alert(currentLanguage === 'id' 
        ? "Mengunduh Buku Menu Angara (Format PDF Resolusi Tinggi)..." 
        : "Downloading Angara Menu Archives (High Resolution PDF)...");
    });
  }
}

window.openPdfModal = function(type) {
  const modal = document.getElementById("pdfModal");
  const title = document.getElementById("pdfViewerTitle");
  const body = document.getElementById("pdfViewerBody");

  if (type === 'food') {
    title.textContent = currentLanguage === 'id' ? "Buku Menu Dapur Utama & Handi (PDF)" : "The Hearth Kitchen & Handi Feasts (PDF)";
    body.innerHTML = `
      <div style="font-family: var(--font-serif-menu); line-height: 1.8; color: #FFF; padding: 1rem 0;">
        <h4 style="font-size: 1.25rem; letter-spacing: 0.1em; color: var(--c-gold); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem; margin-bottom: 1rem;">VOLUME I: HEIRLOOM DISHES</h4>
        <p><strong>Kolhapuri Charred Wild Prawns</strong> ..................................... 165</p>
        <p><strong>Pahadi Smoked Lamb Chops</strong> ......................................... 285</p>
        <p><strong>Tellicherry Black Pepper Mud Crab</strong> ................................. 385</p>
        <p><strong>Royal Awadhi Dum Gosht Biryani (14-Hour)</strong> ................. 260</p>
        <p><strong>Champaran Ahuna Earthen Pot Mutton</strong> .......................... 245</p>
        <p><strong>Dal Angara Smoked Charcoal Ghee</strong> ................................. 135</p>
        <p><strong>Truffle & Confit Garlic Naan</strong> ............................................ 65</p>
      </div>
    `;
  } else if (type === 'beverage') {
    title.textContent = currentLanguage === 'id' ? "Buku Racikan Minuman & Spirits (PDF)" : "Botanical Elixirs & Heritage Spirits (PDF)";
    body.innerHTML = `
      <div style="font-family: var(--font-serif-menu); line-height: 1.8; color: #FFF; padding: 1rem 0;">
        <h4 style="font-size: 1.25rem; letter-spacing: 0.1em; color: var(--c-gold); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem; margin-bottom: 1rem;">VOLUME II: THE SPICE APOTHECARY</h4>
        <p><strong>Smoked Cinnamon Single Malt Old Fashioned</strong> ................. 185</p>
        <p><strong>Saffron Royal Botanist Spritz</strong> ............................................. 175</p>
        <p><strong>Jamun & Roasted Cumin Cooler (Zero-Proof)</strong> ........................ 85</p>
        <p><strong>Darjeeling Smoked Tea Infusion</strong> ........................................... 65</p>
      </div>
    `;
  } else {
    title.textContent = currentLanguage === 'id' ? "Buku Jamuan Privat & Meja Koki (PDF)" : "Private Dining & Tasting Feasts (PDF)";
    body.innerHTML = `
      <div style="font-family: var(--font-serif-menu); line-height: 1.8; color: #FFF; padding: 1rem 0;">
        <h4 style="font-size: 1.25rem; letter-spacing: 0.1em; color: var(--c-gold); border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem; margin-bottom: 1rem;">VOLUME III: THE MAHARAJA EXPERIENCE</h4>
        <p><strong>The 7-Course Provincial Degustation</strong> .............................. 850 / person</p>
        <p style="font-size: 0.95rem; opacity: 0.85; margin-bottom: 1rem;">A progressive culinary voyage through Awadh, Malabar, Kashmir, and Bihar.</p>
        <p><strong>Exclusive Chamber Buyout (Up to 24 Guests)</strong></p>
        <p style="font-size: 0.95rem; opacity: 0.85;">Dedicated sommelier, live charcoal presentation, and bespoke menu.</p>
      </div>
    `;
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

// ================= DISH QUICK VIEW MODAL =================
window.openDishQuickView = function(dishKey) {
  const modal = document.getElementById("dishModal");
  const img = document.getElementById("dishQuickImg");
  const name = document.getElementById("dishQuickName");
  const region = document.getElementById("dishQuickRegion");
  const desc = document.getElementById("dishQuickDesc");
  const ingredients = document.getElementById("dishQuickIngredients");
  const price = document.getElementById("dishQuickPrice");
  const closeBtn = document.getElementById("closeDishModal");

  const dishes = {
    "dish-1": {
      name: "Kolhapuri Charred Wild Prawns",
      region: "Kolhapur, Maharashtra",
      price: "165",
      img: "images/signature_crab_handi.jpg",
      desc_id: "Udang bakau liar segar dibakar di atas bara arang, dilumuri bumbu thecha cabai hijau, kelapa sangrai, dan bawang putih.",
      desc_en: "Wild prawns seared on open coals with spicy green chili thecha, toasted coconut relish, and roasted garlic.",
      ingredients: "Wild King Prawns, Green Chili Thecha, Stone-pressed Sesame, Roasted Garlic"
    },
    "dish-2": {
      name: "Smoked Beetroot & Goat Cheese Tikki",
      region: "Shekhawati, Rajasthan",
      price: "125",
      img: "images/food_menu_card.jpg",
      desc_id: "Kroket bit asap renyah berisi keju kambing lembut, disajikan dengan chutney asam jawa dan yoghurt safron dingin.",
      desc_en: "Crispy smoked beetroot patties stuffed with creamy goat cheese, tamarind coulis, and chilled saffron dahi.",
      ingredients: "Smoked Beetroot, Goat Cheese, Tamarind Coulis, Saffron Dahi"
    },
    "dish-3": {
      name: "Dahi Ragda Puri Crisp",
      region: "Old Delhi Streets",
      price: "95",
      img: "images/food_menu_card.jpg",
      desc_id: "Puri gandum berongga diisi kari kacang ragda kuning, yoghurt manis dingin, delima segar, dan taburan sev.",
      desc_en: "Crisp semolina shells filled with warm spiced ragda yellow peas, sweet hung curd, pomegranates, and sev.",
      ingredients: "Crisp Semolina Shells, Ragda Yellow Peas, Sweet Curd, Pomegranate Pearls"
    },
    "dish-4": {
      name: "Angara Murgh Mathania Tikka",
      region: "Amritsar, Punjab",
      price: "175",
      img: "images/food_menu_card.jpg",
      desc_id: "Paha ayam kampung dimarinasi 24 jam dengan cabai Mathania, minyak moster dingin, dan yoghurt, dibakar di tandoor.",
      desc_en: "Pasture chicken thighs steeped 24 hours in Mathania chilies, cold-pressed mustard oil, and hung curd, blistered in clay pit.",
      ingredients: "Organic Chicken, Mathania Chilies, Cold-pressed Mustard Oil, Greek Curd"
    },
    "dish-5": {
      name: "Pahadi Smoked Lamb Chops",
      region: "Kumaon Highlands",
      price: "285",
      img: "images/food_menu_card.jpg",
      desc_id: "Iga kambing muda dipanggang di atas bara arang kayu keras dengan rempah daun pegunungan, pala, dan minyak samin.",
      desc_en: "Prime grass-fed lamb ribs grilled over hardwood coals infused with wild mountain herbs, mace, and cultured ghee.",
      ingredients: "Grass-Fed Lamb Ribs, Himalayan Mountain Herbs, Mace, Cultured Ghee"
    },
    "dish-6": {
      name: "Tandoori Malai Paneer Skewers",
      region: "Multan Provincial",
      price: "155",
      img: "images/food_menu_card.jpg",
      desc_id: "Keju paneer segar bertekstur lembut dimarinasi krim susu kental, kapulaga hijau, lada putih sangrai, dan paprika.",
      desc_en: "Fresh farm paneer marinated in clotted cream, crushed green cardamom, toasted white peppercorns, and charred peppers.",
      ingredients: "Fresh Farm Paneer, Clotted Cream, Cardamom, White Peppercorns"
    },
    "dish-crab": {
      name: "Tellicherry Black Pepper Mud Crab",
      region: "Tellicherry, Malabar Coast",
      price: "385",
      img: "images/signature_crab_handi.jpg",
      desc_id: "Kepiting bakau liar dimasak dalam santan kelapa peras dingin, lada hitam Tellicherry tumbuk, daun kari goreng, dan jeruk nipis bakar.",
      desc_en: "Mangrove crab braised in stone-ground coconut milk, cracked Tellicherry black pepper, sizzled curry leaves, and charred lime.",
      ingredients: "Wild Mangrove Crab, Tellicherry Black Peppercorns, Coconut Milk, Curry Leaves, Charred Lime"
    },
    "dish-7": {
      name: "Royal Awadhi Dum Gosht Biryani",
      region: "Lucknow, Awadh",
      price: "260",
      img: "images/hero_angara_feast.jpg",
      desc_id: "Beras basmati matang dan daging kambing muda dimasak lambat 14 jam dalam handi tembaga bersegel dengan safron murni dan raita mint.",
      desc_en: "Aged basmati and tender baby mutton slow-braised for 14 hours in sealed handi with royal saffron and smoked mint raita.",
      ingredients: "Aged Basmati, Baby Mutton Shank, Pure Saffron Strands, Rose Essence, Ghee"
    },
    "dish-8": {
      name: "Champaran Ahuna Earthen Pot Mutton",
      region: "Champaran, Bihar",
      price: "245",
      img: "images/food_menu_card.jpg",
      desc_id: "Resep legendaris desa Bihar: kambing, bawang putih utuh bakar, minyak moster mentah, dan ketumbar dalam kendi tanah liat tertutup.",
      desc_en: "Heirloom Bihari village recipe: mutton, whole charred garlic bulbs, raw mustard oil, and coriander in sealed earthen pot.",
      ingredients: "Heritage Mutton, Whole Charred Garlic, Cold-pressed Mustard Oil, Coarse Coriander"
    },
    "dish-9": {
      name: "Dal Angara Smoked Charcoal Ghee",
      region: "Punjab Hearth",
      price: "135",
      img: "images/food_menu_card.jpg",
      desc_id: "Lentil hitam urad dimasak lambat 24 jam dengan tomat ranum, mentega kultur, dan diasapi arang menyala (teknik dhungar).",
      desc_en: "Black urad lentils slow-simmered for 24 hours with vine tomatoes, cultured butter, and infused with smoldering dhungar smoke.",
      ingredients: "Whole Urad Lentils, Cultured Butter, Vine Tomatoes, Dhungar Live Charcoal Smoke"
    },
    "dish-10": {
      name: "Truffle & Confit Garlic Naan",
      region: "Modern Hearth",
      price: "65",
      img: "images/food_menu_card.jpg",
      desc_id: "Roti naan beragi alami dipanggang di dinding tungku tanah liat, diolesi mentega bawang putih konfit dan minyak truffle hitam wangi.",
      desc_en: "Wild-fermented sourdough naan baked on clay walls, brushed with roasted confit garlic and black truffle oil.",
      ingredients: "Sourdough Wheat, Confit Garlic Butter, Black Truffle Oil, Sea Salt"
    },
    "dish-11": {
      name: "Kashmiri Sheermal Saffron Flatbread",
      region: "Kashmir Valley",
      price: "70",
      img: "images/food_menu_card.jpg",
      desc_id: "Roti pipih festive diuleni susu hangat, diresapi seduhan safron pekat Kashmir dan sari bunga jeruk.",
      desc_en: "Warm milk-kneaded festive flatbread brushed with pure saffron infusion and wild orange blossom essence.",
      ingredients: "Whole Milk, Kashmiri Saffron, Orange Blossom Water, Clarified Ghee"
    },
    "dish-rice": {
      name: "Aged Saffron Basmati Rice",
      region: "Punjab Royal Table",
      price: "55",
      img: "images/hero_angara_feast.jpg",
      desc_id: "Nasi basmati butir panjang dikukus bersama kapulaga hijau utuh, cengkeh wangi, dan mentega safron keemasan.",
      desc_en: "Steamed long-grain basmati with whole green cardamom, cloves, and golden saffron butter.",
      ingredients: "Aged Basmati Rice, Green Cardamom, Cloves, Saffron Ghee"
    }
  };

  const item = dishes[dishKey];
  if (!item || !modal) return;

  img.src = item.img;
  name.textContent = item.name;
  region.textContent = item.region;
  desc.textContent = currentLanguage === 'id' ? item.desc_id : item.desc_en;
  ingredients.textContent = "Ingredients: " + item.ingredients;
  price.textContent = item.price;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  };
};
