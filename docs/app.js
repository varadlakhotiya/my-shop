/* ══════════════════════════════════════════════
   🏪 STORE CONFIGURATION — EDIT THIS SECTION
   ══════════════════════════════════════════════
   Change the values below to match your store details.
   These are used throughout the website automatically.
   ══════════════════════════════════════════════ */

const API = '';   // Same origin — server must be running via: node server.js
const FIREBASE_DB = "https://my-shop-orders-a863e-default-rtdb.firebaseio.com";
const STORE_CONFIG = {
    // ── Basic Info ──
    name_mr:       'गजानन ट्रेडिंग कंपनी',
    name_en:       'Gajanan Trading Co.',
    tagline_mr:    'ताजा किराणा, विश्वासू सेवा — मंठ्यात तुमच्या दारी',
    tagline_en:    'Fresh groceries & trusted service, delivered to your door in Mantha',
    area_mr:       'मंठा आणि परिसर',
    area_en:       'Mantha & Surrounding Areas',
    since_year:    2010,        // Year shop started
    phone:         '9999999999', // Your contact number
    whatsapp:      '9999999999', // WhatsApp number
    address_mr:    'मुख्य बाजारपेठ, मंठा, जिल्हा जालना',
    address_en:    'Main Market, Mantha, Dist. Jalna, Maharashtra',

    // ── Google Maps ──
    // To get your embed link: go to Google Maps → search your shop → Share → Embed a map → copy src URL
    map_embed_src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30188.1!2d76.47!3d19.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd01800000000%3A0x0!2sMantha%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000',

    // ── Shop Timings ──
    timings: [
        { day_mr: 'सोमवार – शनिवार', day_en: 'Monday – Saturday', time: '8:00 AM – 9:00 PM' },
        { day_mr: 'रविवार',           day_en: 'Sunday',             time: '8:00 AM – 2:00 PM' },
    ],

    // ── Why Choose Us Points ──
    why_us: [
        { icon:'🏆', mr:'१५+ वर्षांचा विश्वास',        en:'15+ Years of Trust' },
        { icon:'🌿', mr:'दररोज ताजा माल',              en:'Fresh Daily Stock' },
        { icon:'💰', mr:'सर्वोत्तम स्थानिक किंमती',    en:'Best Local Prices' },
        { icon:'🚚', mr:'जलद होम डिलिव्हरी',           en:'Fast Home Delivery' },
        { icon:'✅', mr:'खात्रीशीर ब्रांडेड उत्पादने', en:'Genuine Branded Products' },
        { icon:'📱', mr:'ऑनलाइन ऑर्डरची सुविधा',      en:'Easy Online Ordering' },
    ],

    // ── Brands ──
    brands: [
        { name:'सुहाना',     name_en:'Suhana',        emoji:'🌶️', badge:'Authorized Distributor' },
        { name:'प्रवीण',     name_en:'Pravin',         emoji:'🧂', badge:'Authorized Retailer' },
        { name:'अमृत मसाला', name_en:'Amrut Masala',  emoji:'🫙', badge:'Official Stockist' },
        { name:'टाटा',       name_en:'Tata',           emoji:'🍵', badge:'Authorized Dealer' },
        { name:'अ‍ॅग्रोमार्क', name_en:'Agromark',    emoji:'🌾', badge:'Wholesale Partner' },
        { name:'आशीर्वाद',   name_en:'Aashirvaad',    emoji:'🌾', badge:'Authorized Retailer' },
    ],

    // ── Testimonials ──
    testimonials: [
        {
            name_mr: 'सुरेश पाटील', name_en: 'Suresh Patil',
            role_mr: 'नियमित ग्राहक, मंठा', role_en: 'Regular Customer, Mantha',
            text_mr: 'गजानन ट्रेडिंगमध्ये नेहमी ताजा माल असतो आणि किंमत देखील योग्य असते. खूप वर्षांपासून येथूनच खरेदी करतो.',
            text_en: 'Always fresh stock and fair prices. Been shopping here for years — never disappointed!',
            stars: 5
        },
        {
            name_mr: 'मीरा देशमुख', name_en: 'Meera Deshmukh',
            role_mr: 'किराणा दुकानदार, मंठा', role_en: 'Retailer, Mantha',
            text_mr: 'थोक माल वेळेवर येतो, दर्जा उत्तम असतो. व्यवसायासाठी सर्वोत्तम पुरवठादार.',
            text_en: 'Timely bulk supply with excellent quality. Best wholesale partner for our business.',
            stars: 5
        },
        {
            name_mr: 'रमेश जाधव', name_en: 'Ramesh Jadhav',
            role_mr: 'हॉटेल मालक, मंठा', role_en: 'Hotel Owner, Mantha',
            text_mr: 'मसाले आणि डाळींचा दर्जा खूपच चांगला. ऑनलाइन ऑर्डरची सुविधा खूप सोयीची आहे.',
            text_en: 'Excellent quality spices and pulses. The online ordering feature is very convenient.',
            stars: 5
        },
    ],

    // ── Wholesale / Bulk Info ──
    wholesale: {
        min_order_mr:   '₹५,000 पासून घाऊक ऑर्डर',
        min_order_en:   'Bulk orders starting from ₹5,000',
        discount_mr:    'घाऊक खरेदीवर विशेष सवलत',
        discount_en:    'Special discounts on wholesale purchase',
        delivery_mr:    'मंठा आणि आजूबाजूच्या परिसरात डिलिव्हरी',
        delivery_en:    'Delivery across Mantha and nearby areas',
    }
};



let categories   = [];
let allProducts  = [];
let cart = JSON.parse(localStorage.getItem('gtc_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('gtc_wishlist') || '[]'); // Feature 3: Wishlist
let currentProduct = null;
let selectedQty    = null;
let verifiedPhone  = null; // Feature 1: OTP — store verified phone number

let lastPlacedOrder = null; // Feature 5 — store order for print

const CAT_ICONS = {
    1:'🌾', 2:'🌾', 3:'🫘', 4:'🫙', 5:'🌶️',
    6:'🧂', 7:'🍬', 8:'🥜', 9:'🙏', 10:'☕',
    11:'🧁', 12:'🥫', 13:'🍪', 14:'🪔', 15:'🧹', 16:'🧴'
};

// Feature 2: Collection time slots
const PICKUP_SLOTS = [
    { id: 's1', label: '9:00 AM – 11:00 AM',  mr: 'सकाळी ९ – ११' },
    { id: 's2', label: '11:00 AM – 1:00 PM',   mr: 'सकाळी ११ – दुपारी १' },
    { id: 's3', label: '2:00 PM – 4:00 PM',    mr: 'दुपारी २ – ४' },
    { id: 's4', label: '4:00 PM – 6:00 PM',    mr: 'संध्याकाळी ४ – ६' },
    { id: 's5', label: '6:00 PM – 8:00 PM',    mr: 'संध्याकाळी ६ – ८' },
];

// === SAFETY: Force-close any stray modals/overlays ===
function forceCloseAllModals() {
  try {
    // remove modal-open body state
    document.body.classList.remove('modal-open');

    // hide common modal/backdrop classes used in your markup
    document.querySelectorAll('.modal-backdrop, .modal, .overlay, .backdrop, .modal-box').forEach(el => {
      // remove any 'open' class and force-hide
      el.classList.remove('open');
      el.style.display = 'none';
      el.style.visibility = 'hidden';
      el.style.opacity = '0';
    });

    // call close handlers if they exist (safe-guard)
    ['closeOtpModal','closeCheckout','closeProductModal','closeSuccess','closeWishlist','closeSectionPopup','closeCart'].forEach(fnName => {
      if (typeof window[fnName] === 'function') {
        try { window[fnName](); } catch(e) { /* ignore */ }
      }
    });

    console.info('forceCloseAllModals: all modal/backdrops hidden');
  } catch (e) {
    console.warn('forceCloseAllModals error', e);
  }
}



/* ══════════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', async () => {
    // Wire up modal close-on-backdrop
    document.getElementById('product-modal').addEventListener('click', function(e) {
        if (e.target === this) closeProductModal();
    });
    document.getElementById('checkout-modal').addEventListener('click', function(e) {
        if (e.target === this) closeCheckout();
    });
    document.getElementById('success-modal').addEventListener('click', function(e) {
        if (e.target === this) closeSuccess();
    });
    document.getElementById('otp-modal').addEventListener('click', function(e) {
        if (e.target === this) closeOtpModal();
    });
    document.getElementById('wishlist-modal').addEventListener('click', function(e) {
        if (e.target === this) closeWishlist();
    });
    // Section popup — close on backdrop
    const sectionPopup = document.getElementById('section-popup-modal');
    if (sectionPopup) {
        sectionPopup.addEventListener('click', function(e) {
            if (e.target === this) closeSectionPopup();
        });
    }

    // Keyboard arrow navigation for gallery carousel
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('section-popup-modal');
        if (!modal || !modal.classList.contains('open')) return;
        if (!document.getElementById('gc-track')) return; // only when gallery is open
        if (e.key === 'ArrowLeft')  gallerySlide(-1);
        if (e.key === 'ArrowRight') gallerySlide(1);
    });

    // OTP input — auto-submit on 6 digits
    const otpInput = document.getElementById('otp-input');
    if (otpInput) {
        otpInput.addEventListener('input', () => {
            if (otpInput.value.length === 6) verifyOtp();
        });
    }

    // Static mode — load everything from products.json (no server needed)
    await loadProducts();       // loads & transforms products.json
    loadCategoriesFromProducts(); // derives category list from loaded products
    renderCategoryGrid();
    renderSidebar();
    updateCartUI();
    updateWishlistBadge();
    renderHomePageSections();

    document.getElementById('search-input')
        .addEventListener('input', debounce(onSearch, 350));
});



function showFatalError(title, html) {
    const main = document.getElementById('home-view') || document.body;
    main.innerHTML = `
        <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:12px;
                    padding:32px;border-left:5px solid #d32f2f;box-shadow:0 4px 20px rgba(0,0,0,0.1)">
            <h2 style="color:#d32f2f;margin-bottom:16px;font-size:22px">${title}</h2>
            <div style="color:#333;font-size:15px;line-height:1.8">${html}</div>
        </div>`;
}

async function apiFetch(endpoint) {
    const res  = await fetch(API + endpoint);
    const json = await res.json();
    if (!json.success) throw new Error(json.message || 'Server error');
    return json;
}

async function loadCategories() {
    try {
        const data = await apiFetch('/api/categories');
        categories = data.categories;
    } catch (e) {
        showToast('Error loading categories: ' + e.message, 'error');
    }
}

/* ── Broad-category → numeric ID map (used for sidebar icons) ── */
const BROAD_CAT_IDS = {
    "Rice & Grains":       1,
    "Flours":              2,
    "Pulses & Legumes":    3,
    "Oils & Ghee":         4,
    "Whole Spices":        5,
    "Ground Spices":       6,
    "Salt, Sugar":         7,
    "Dry Fruits":          8,
    "Fasting":             9,
    "Beverages":           10,
    "Baking & Condiments": 11,
    "Papad, Pickles":      12,
    "Snacks & Sweets":     13,
    "Pooja Needs":         14,
    "Household":           15,
    "Personal Care":       16,
};

const BROAD_CAT_MARATHI = {
    "Rice & Grains":       "तांदूळ व धान्य",
    "Flours":              "पीठ",
    "Pulses & Legumes":    "डाळी व कडधान्य",
    "Oils & Ghee":         "तेल व तूप",
    "Whole Spices":        "साबुत मसाले",
    "Ground Spices":       "दळलेले मसाले",
    "Salt, Sugar":         "मीठ, साखर",
    "Dry Fruits":          "सुका मेवा",
    "Fasting":             "उपवास",
    "Beverages":           "पेय",
    "Baking & Condiments": "बेकिंग व सॉस",
    "Papad, Pickles":      "पापड, लोणचे",
    "Snacks & Sweets":     "स्नॅक्स व मिठाई",
    "Pooja Needs":         "पूजा साहित्य",
    "Household":           "घरगुती",
    "Personal Care":       "वैयक्तिक काळजी",
};

function parsePriceUnit(str) {
    if (!str) return { price: 0, unit: "piece" };
    const cleaned = str.replace(/₹/g, "").replace(/\s/g, "");
    const match   = cleaned.match(/^([\d.]+)\/(.+)$/);
    if (match) return { price: parseFloat(match[1]), unit: match[2] };
    const numOnly = cleaned.match(/^([\d.]+)$/);
    if (numOnly) return { price: parseFloat(numOnly[1]), unit: "piece" };
    return { price: 0, unit: "piece" };
}

function defaultQtyOptions(unit) {
    const u = (unit || "").toLowerCase();
    if (u === "kg")                         return [0.5, 1, 2, 5, 10];
    if (u === "g")                          return [100, 250, 500, 1000];
    if (["litre","ltr","l"].includes(u))  return [0.5, 1, 2, 5];
    if (u === "ml")                         return [100, 250, 500, 1000];
    return [1, 2, 5, 10];
}

async function loadProducts() {
    try {
        const res = await fetch("products.json");
        const raw = await res.json();
        allProducts = raw.map((p, idx) => {
            const { price, unit } = parsePriceUnit(p["Approx. Price & Unit"]);
            const broadCat = (p["Category"] || "").trim();
            const catId    = BROAD_CAT_IDS[broadCat] || 99;
            return {
                id:             p["Id"] || (idx + 1),
                name:           (p["category_english"] || p["Sub-Category"] || "").trim(),
                name_marathi:   (p["category_marathi"] || "").trim() || null,
                sub_category:   (p["Sub-Category"] || "").trim(),
                category_id:    catId,
                category_name:  broadCat,
                brand_english:  (p["Brand Name (EN)"] || "").trim() || null,
                brand_marathi:  (p["Brand Name (MR)"] || "").trim() || null,
                price_per_unit: price,
                unit:           unit,
                unit_options:   defaultQtyOptions(unit),
                allow_custom:   true,
                in_stock:       (p["Stock"] || "").toLowerCase() !== "out of stock",
                image:          (p["Image Link"] || "").trim() || null,
            };
        });
    } catch (err) {
        console.error("Failed to load products.json", err);
        allProducts = [];
    }
}

function loadCategoriesFromProducts() {
    const seen = new Set();
    categories = [];
    for (const p of allProducts) {
        if (!seen.has(p.category_id)) {
            seen.add(p.category_id);
            categories.push({
                id:           p.category_id,
                name_english: p.category_name,
                name_marathi: BROAD_CAT_MARATHI[p.category_name] || p.category_name,
            });
        }
    }
    categories.sort((a, b) => a.id - b.id);
}

/* ══════════════════════════════════════════════
   RENDER — CATEGORIES
   ══════════════════════════════════════════════ */
function renderCategoryGrid() {
    const grid = document.getElementById('category-grid');
    if (!grid) return;
    grid.innerHTML = categories.map(cat => `
        <div class="cat-card" onclick="showCategory(${cat.id})">
            <span class="cat-card-icon">${CAT_ICONS[cat.id] || '📦'}</span>
            <div class="cat-card-name-mar">${cat.name_marathi}</div>
            <div class="cat-card-name-eng">${cat.name_english}</div>
        </div>
    `).join('');
}

function renderSidebar() {
    const container = document.getElementById('sidebar-categories');
    if (!container) return;
    container.innerHTML = categories.map(cat => `
        <div class="cat-item" id="sidebar-cat-${cat.id}" onclick="showCategory(${cat.id})">
            <span class="cat-icon">${CAT_ICONS[cat.id] || '📦'}</span>
            <span class="cat-name">
                <span>${cat.name_english}</span>
                <span class="cat-name-mar">${cat.name_marathi}</span>
            </span>
        </div>
    `).join('');
}

/* ══════════════════════════════════════════════
   SHOW CATEGORY / HOME
   ══════════════════════════════════════════════ */
function showCategory(catId) {
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;
    const products = allProducts.filter(p => p.category_id === catId);
    document.getElementById('home-view').style.display     = 'none';
    document.getElementById('products-view').style.display = 'block';
    document.getElementById('products-view-title').textContent =
        `${CAT_ICONS[catId] || '📦'} ${cat.name_english} — ${cat.name_marathi}`;
    renderProducts(products);
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    const el = document.getElementById(`sidebar-cat-${catId}`);
    if (el) { el.classList.add('active'); el.scrollIntoView({ block: 'nearest' }); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    document.getElementById('home-view').style.display     = 'block';
    document.getElementById('products-view').style.display = 'none';
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    const banner = document.getElementById('search-results-banner');
    if (banner) banner.classList.add('hidden');
    const si = document.getElementById('search-input');
    if (si) si.value = '';
    renderCategoryGrid();
}

/* ══════════════════════════════════════════════
   RENDER — PRODUCTS  (with wishlist heart button)
   ══════════════════════════════════════════════ */
function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    if (!products || products.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#9e9e9e">
                <div style="font-size:48px;margin-bottom:12px">🔍</div>
                <p>कोणतेही उत्पादन आढळले नाही (No products found)</p>
            </div>`;
        return;
    }

    grid.innerHTML = products.map(p => {
        const hasRealImage = p.image && p.image !== 'link_to_img' && p.image.startsWith('http');
        const imgHtml = hasRealImage
            ? `<img src="${p.image}" alt="${p.name}"
                    onerror="this.parentElement.innerHTML='<span style=font-size:52px>${CAT_ICONS[p.category_id]||'📦'}</span>'">`
            : `<span style="font-size:52px">${CAT_ICONS[p.category_id] || '📦'}</span>`;

        const stockHtml = p.in_stock
            ? `<span class="product-stock-in">✅ उपलब्ध</span>`
            : `<span class="product-stock-out">❌ संपला</span>`;

        const brandHtml = p.brand_marathi
            ? `<div class="product-brand">${p.brand_marathi}${p.brand_english ? ' · ' + p.brand_english : ''}</div>`
            : '';

        const displayName = p.name_marathi
            ? `<div class="product-name-marathi">${p.name_marathi}</div>
               <div class="product-name-english">${p.name}</div>`
            : `<div class="product-name-marathi">${p.name}</div>`;

        // Feature 3: Wishlist heart button
        const isWishlisted = wishlist.some(w => w.id === p.id);
        const heartClass    = isWishlisted ? 'wish-btn wishlisted' : 'wish-btn';

        return `
            <div class="product-card">
                <div class="product-img">
                    ${imgHtml}
                    <button class="${heartClass}" onclick="toggleWishlist(${p.id})" title="Wishlist">
                        ${isWishlisted ? '❤️' : '🤍'}
                    </button>
                </div>
                <div class="product-body">
                    ${displayName}
                    ${p.sub_category ? `<div class="product-category">${p.sub_category}</div>` : ''}
                    ${brandHtml}
                    <div class="product-price">₹${p.price_per_unit.toFixed(2)} / ${p.unit}</div>
                    ${stockHtml}
                </div>
                <button class="add-btn"
                    onclick="openProductModal(${p.id})"
                    ${p.in_stock ? '' : 'disabled'}>
                    ${p.in_stock ? '🛒 कार्ट मध्ये टाका' : 'Out of Stock'}
                </button>
            </div>
        `;
    }).join('');
}

function getCategoryEmoji(catId) { return CAT_ICONS[catId] || '📦'; }

/* ══════════════════════════════════════════════
   SEARCH
   ══════════════════════════════════════════════ */
function onSearch() {
    const q      = document.getElementById('search-input').value.trim().toLowerCase();
    const banner = document.getElementById('search-results-banner');
    if (!q) { goHome(); return; }
    const results = allProducts.filter(p =>
        (p.name          || '').toLowerCase().includes(q) ||
        (p.name_marathi  || '').toLowerCase().includes(q) ||
        (p.sub_category  || '').toLowerCase().includes(q) ||
        (p.brand_english || '').toLowerCase().includes(q) ||
        (p.brand_marathi || '').toLowerCase().includes(q)
    );
    document.getElementById('home-view').style.display     = 'none';
    document.getElementById('products-view').style.display = 'block';
    document.getElementById('products-view-title').textContent =
        `🔍 "${q}" — ${results.length} results`;
    if (banner) {
        banner.textContent = `"${q}" साठी ${results.length} परिणाम सापडले`;
        banner.classList.remove('hidden');
    }
    renderProducts(results);
}

function debounce(fn, delay) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

/* ══════════════════════════════════════════════
   PRODUCT MODAL
   ══════════════════════════════════════════════ */
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    currentProduct = product;
    selectedQty    = null;
    document.getElementById('modal-emoji').textContent = getCategoryEmoji(product.category_id);
    document.getElementById('modal-name').textContent = product.name_marathi
        ? `${product.name_marathi} (${product.name})`
        : product.name;
    document.getElementById('modal-desc').textContent = product.brand_marathi
        ? `${product.brand_marathi} • ${product.brand_english}`
        : (product.sub_category || '');
    document.getElementById('modal-price').textContent =
        `₹${product.price_per_unit.toFixed(2)} / ${product.unit}`;
    document.getElementById('custom-unit-label').textContent = product.unit;
    const unitLabel = {
        kg:'किलोग्राम (kg)', litre:'लिटर (litre)', ltr:'लिटर (ltr)',
        l:'लिटर (l)', g:'ग्राम (g)', ml:'मिली (ml)',
        piece:'नग (pieces)', pcs:'नग (pcs)', packet:'पाकीट (packets)',
        pack:'पाकीट (packs)', bar:'बार', roll:'रोल', pair:'जोडी (pairs)',
        bottle:'बाटली', box:'बॉक्स', can:'डबा'
    }[product.unit] || product.unit;
    document.getElementById('qty-label').textContent = `प्रमाण निवडा — Select ${unitLabel}`;
    renderQtyOptions(product);
    const customSection = document.getElementById('custom-qty-section');
    if (customSection) customSection.style.display = product.allow_custom ? 'block' : 'none';
    const customInput = document.getElementById('custom-qty-input');
    if (customInput) customInput.value = '';
    updatePriceSummary();
    document.getElementById('product-modal').classList.add('open');
}

function renderQtyOptions(product) {
    const container = document.getElementById('qty-options');
    if (!container) return;
    container.innerHTML = product.unit_options.map(qty => `
        <button class="qty-opt-btn" onclick="selectQty(${qty})" data-qty="${qty}">
            ${qty} ${product.unit}
        </button>
    `).join('');
}

function selectQty(qty) {
    selectedQty = qty;
    document.querySelectorAll('.qty-opt-btn').forEach(btn => {
        btn.classList.toggle('selected', parseFloat(btn.dataset.qty) === qty);
    });
    const ci = document.getElementById('custom-qty-input');
    if (ci) ci.value = '';
    updatePriceSummary();
}

function onCustomQtyChange() {
    const val = parseFloat(document.getElementById('custom-qty-input').value);
    if (!isNaN(val) && val > 0) {
        selectedQty = val;
        document.querySelectorAll('.qty-opt-btn').forEach(b => b.classList.remove('selected'));
    } else {
        selectedQty = null;
    }
    updatePriceSummary();
}

function updatePriceSummary() {
    const summaryEl  = document.getElementById('price-summary');
    const summaryTxt = document.getElementById('qty-summary-text');
    if (!summaryEl || !summaryTxt) return;
    if (!currentProduct || !selectedQty || selectedQty <= 0) {
        summaryEl.textContent  = '₹0.00';
        summaryTxt.textContent = 'वर प्रमाण निवडा / Select a quantity above';
        return;
    }
    const total = currentProduct.price_per_unit * selectedQty;
    summaryEl.textContent  = `₹${total.toFixed(2)}`;
    summaryTxt.textContent = `₹${currentProduct.price_per_unit.toFixed(2)} × ${selectedQty} ${currentProduct.unit}`;
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('open');
    currentProduct = null;
    selectedQty    = null;
}

/* ══════════════════════════════════════════════
   ADD TO CART
   ══════════════════════════════════════════════ */
function addCurrentToCart() {
    if (!currentProduct) return;
    const ci = document.getElementById('custom-qty-input');
    if (ci) {
        const customVal = parseFloat(ci.value);
        if (!isNaN(customVal) && customVal > 0) selectedQty = customVal;
    }
    if (!selectedQty || selectedQty <= 0) {
        showToast('कृपया प्रमाण निवडा! (Please select a quantity)', 'error');
        return;
    }
    const itemTotal = currentProduct.price_per_unit * selectedQty;
    const cartItem  = {
        cart_id:       `${currentProduct.id}_${Date.now()}`,
        product_id:    currentProduct.id,
        excelRowIndex: currentProduct.excelRowIndex,
        name:          currentProduct.name,
        name_marathi:  currentProduct.name_marathi,
        category_id:   currentProduct.category_id,
        quantity:      selectedQty,
        unit:          currentProduct.unit,
        price_per_unit:currentProduct.price_per_unit,
        item_total:    parseFloat(itemTotal.toFixed(2))
    };
    cart.push(cartItem);
    saveCart();
    updateCartUI();
    closeProductModal();
    showToast(`✅ ${currentProduct.name_marathi || currentProduct.name} कार्ट मध्ये टाकला!`, 'success');
}

/* ══════════════════════════════════════════════
   CART
   ══════════════════════════════════════════════ */
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    const isOpen  = sidebar.classList.contains('open');
    sidebar.classList.toggle('open', !isOpen);
    overlay.classList.toggle('open', !isOpen);
}

function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
}

function removeCartItem(cartId) {
    cart = cart.filter(i => i.cart_id !== cartId);
    saveCart();
    updateCartUI();
    showToast('वस्तू काढली गेली (Item removed)');
}

function clearCart() {
    if (!confirm('कार्ट साफ करायचे का? (Clear all items from cart?)')) return;
    cart = [];
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('gtc_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = cart.length;
    const total = cart.reduce((s, i) => s + i.item_total, 0);
    const badge = document.getElementById('cart-count');
    if (badge) badge.textContent = count;
    const countLabel = document.getElementById('cart-items-count');
    if (countLabel) countLabel.textContent = `${count} item${count !== 1 ? 's' : ''}`;
    const listEl   = document.getElementById('cart-items-list');
    const footerEl = document.getElementById('cart-footer');
    if (!listEl) return;
    if (count === 0) {
        listEl.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>तुमचे कार्ट रिकामे आहे</p>
                <p style="margin-top:6px;font-size:13px;color:#9e9e9e">Browse categories and add items!</p>
            </div>`;
        if (footerEl) footerEl.style.display = 'none';
        return;
    }
    listEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span class="cart-item-emoji">${getCategoryEmoji(item.category_id)}</span>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name_marathi || item.name}</div>
                <div class="cart-item-detail">
                    ${item.quantity} ${item.unit} × ₹${item.price_per_unit.toFixed(2)}
                </div>
                <div class="cart-item-total">₹${item.item_total.toFixed(2)}</div>
            </div>
            <button class="cart-item-remove" onclick="removeCartItem('${item.cart_id}')">✕</button>
        </div>
    `).join('');
    const subEl = document.getElementById('cart-subtotal');
    const totEl = document.getElementById('cart-total');
    if (subEl) subEl.textContent = `₹${total.toFixed(2)}`;
    if (totEl) totEl.textContent = `₹${total.toFixed(2)}`;
    if (footerEl) footerEl.style.display = 'block';
}

/* ══════════════════════════════════════════════
   FEATURE 1 — OTP VERIFICATION FLOW
   ══════════════════════════════════════════════ */

// Called when user clicks "Checkout" button in cart
function openCheckout() {
    if (cart.length === 0) {
        showToast('कार्ट रिकामे आहे! (Cart is empty!)', 'error');
        return;
    }

    // ── FEATURE 2: Minimum Order Amount Check ──
    const cartTotal = cart.reduce((s, i) => s + i.item_total, 0);
    if (cartTotal < MIN_ORDER_AMOUNT) {
        showToast(`किमान ऑर्डर ₹${MIN_ORDER_AMOUNT} असणे आवश्यक आहे! (Minimum order is ₹${MIN_ORDER_AMOUNT}. Current: ₹${cartTotal.toFixed(2)})`, 'error');
        return;
    }

    closeCart();

    // If phone is already verified in this session, skip OTP and go straight to checkout form
    if (verifiedPhone) {
        showCheckoutForm();
    } else {
        openOtpModal();
    }
}

function openOtpModal() {
    // Reset OTP modal to Step 1
    showOtpStep(1);
    const phoneInput = document.getElementById('otp-phone');
    if (phoneInput) phoneInput.value = '';
    const otpInput = document.getElementById('otp-input');
    if (otpInput) otpInput.value = '';
    clearOtpError();
    document.getElementById('otp-modal').classList.add('open');
}

function closeOtpModal() {
    document.getElementById('otp-modal').classList.remove('open');
}

function showOtpStep(step) {
    document.getElementById('otp-step-1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('otp-step-2').style.display = step === 2 ? 'block' : 'none';
}

function setOtpError(msg) {
    const el = document.getElementById('otp-error');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function clearOtpError() {
    const el = document.getElementById('otp-error');
    if (el) { el.textContent = ''; el.style.display = 'none'; }
}

let otpCountdownTimer = null;

async function sendOtp() {
    clearOtpError();
    const phone = document.getElementById('otp-phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
        setOtpError('कृपया 10 अंकी मोबाइल नंबर टाका! (Enter 10-digit number)');
        return;
    }

    const btn = document.getElementById('btn-send-otp');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
        const res  = await fetch('/api/otp/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });
        const data = await res.json();

        if (!data.success) {
            setOtpError(data.message);
            btn.disabled = false;
            btn.textContent = 'OTP पाठवा (Send OTP)';
            return;
        }

        // Show step 2
        showOtpStep(2);
        document.getElementById('otp-sent-phone').textContent = phone;

        // ⚠️ DEV MODE: show OTP in a toast so you can test without SMS.
        //    Remove this block in production after integrating real SMS.
        if (data.dev_otp) {
            showToast(`🔑 Dev OTP: ${data.dev_otp}`, 'success');
        }

        // Start 30-second resend countdown
        startResendCountdown();

    } catch (e) {
        setOtpError('सर्व्हर त्रुटी (Server error): ' + e.message);
        btn.disabled = false;
        btn.textContent = 'OTP पाठवा (Send OTP)';
    }
}

function startResendCountdown() {
    const resendBtn = document.getElementById('btn-resend-otp');
    if (!resendBtn) return;
    let seconds = 30;
    resendBtn.disabled = true;
    resendBtn.textContent = `Resend in ${seconds}s`;
    if (otpCountdownTimer) clearInterval(otpCountdownTimer);
    otpCountdownTimer = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            clearInterval(otpCountdownTimer);
            resendBtn.disabled = false;
            resendBtn.textContent = 'OTP पुन्हा पाठवा (Resend OTP)';
        } else {
            resendBtn.textContent = `Resend in ${seconds}s`;
        }
    }, 1000);
}

async function resendOtp() {
    showOtpStep(1);
    clearOtpError();
}

async function verifyOtp() {
    clearOtpError();
    const phone = document.getElementById('otp-phone').value.trim();
    const otp   = document.getElementById('otp-input').value.trim();

    if (otp.length !== 6) {
        setOtpError('कृपया 6 अंकी OTP टाका (Enter 6-digit OTP)');
        return;
    }

    const btn = document.getElementById('btn-verify-otp');
    if (btn) { btn.disabled = true; btn.textContent = 'Verifying...'; }

    try {
        const res  = await fetch('/api/otp/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, otp })
        });
        const data = await res.json();

        if (!data.success) {
            setOtpError(data.message);
            if (btn) { btn.disabled = false; btn.textContent = 'OTP तपासा (Verify OTP)'; }
            const otpInput = document.getElementById('otp-input');
            if (otpInput) { otpInput.value = ''; otpInput.focus(); }
            return;
        }

        // OTP verified!
        verifiedPhone = phone;
        if (otpCountdownTimer) clearInterval(otpCountdownTimer);
        closeOtpModal();
        showToast('✅ मोबाइल क्रमांक तपासला! (Phone verified!)', 'success');
        showCheckoutForm();

    } catch (e) {
        setOtpError('सर्व्हर त्रुटी (Server error): ' + e.message);
        if (btn) { btn.disabled = false; btn.textContent = 'OTP तपासा (Verify OTP)'; }
    }
}

/* ══════════════════════════════════════════════
   CHECKOUT FORM (shown after OTP verified)
   ══════════════════════════════════════════════ */
function showCheckoutForm() {
    const total = cart.reduce((s, i) => s + i.item_total, 0);
    document.getElementById('checkout-summary').innerHTML = `
        <h4 style="margin-bottom:10px">📋 Order Summary (${cart.length} items)</h4>
        ${cart.map(item => `
            <div class="osm-row">
                <span>${item.name_marathi || item.name} (${item.quantity} ${item.unit})</span>
                <span>₹${item.item_total.toFixed(2)}</span>
            </div>
        `).join('')}
        <div class="osm-row bold">
            <span>एकूण (Total)</span>
            <span>₹${total.toFixed(2)}</span>
        </div>
    `;

    // Pre-fill verified phone
    const phoneField = document.getElementById('c-phone');
    if (phoneField && verifiedPhone) {
        phoneField.value    = verifiedPhone;
        phoneField.readOnly = true;
        phoneField.style.background = '#f0fdf4';
    }

    // Feature 2: Render pickup slot options
    renderPickupSlots();

    document.getElementById('checkout-modal').classList.add('open');
}

// Feature 2: Render time slot picker
function renderPickupSlots() {
    const container = document.getElementById('pickup-slots-container');
    if (!container) return;
    container.innerHTML = PICKUP_SLOTS.map(slot => `
        <label class="slot-option" for="slot-${slot.id}">
            <input type="radio" name="pickup_slot" id="slot-${slot.id}" value="${slot.label}">
            <span class="slot-label">
                <span class="slot-time">${slot.label}</span>
                <span class="slot-mr">${slot.mr}</span>
            </span>
        </label>
    `).join('');
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('open');
}

async function placeOrder() {
    const name    = document.getElementById('c-name').value.trim();
    const phone   = document.getElementById('c-phone').value.trim();
    const address = document.getElementById('c-address').value.trim();
    const notes   = document.getElementById('c-notes').value.trim();

    if (!name)  { showToast('कृपया नाव टाका!', 'error'); return; }
    if (!phone || !/^\d{10}$/.test(phone)) { showToast('कृपया 10 अंकी मोबाइल नंबर टाका!', 'error'); return; }

    // Feature 2: Get selected pickup slot
    const slotRadio = document.querySelector('input[name="pickup_slot"]:checked');
    if (!slotRadio) {
        showToast('कृपया वेळ निवडा! (Please select a pickup time slot)', 'error');
        return;
    }
    const pickup_slot = slotRadio.value;

    try {
        // Build order object we'll send to Firebase
        const order = {
            customer: { name, phone, address, notes, pickup_slot },
            cart,
            created_at: new Date().toISOString(),
            status: 'pending' // you can change status naming as needed
        };
        try {
            // POST to Firebase Realtime DB
            const res = await fetch(`${FIREBASE_DB}/orders.json`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            });
            const fbData = await res.json();
            // Firebase returns an object like: { "name": "-MPxyz..." } where name is the generated key
            if (!fbData || !fbData.name) throw new Error('Failed to save order to Firebase');
            // Create a savedOrder object similar to what your app expects
            // Generate an order_number — here we use a simple timestamp-based one (customize as you like)
            const orderNumber = 'ORD' + Date.now().toString().slice(-8);
            const savedOrder = Object.assign({}, order, {
                id: fbData.name,
                order_number: orderNumber
            });
            lastPlacedOrder = savedOrder;              // Feature 5 — remember for print
            saveOrderForBuyAgain(savedOrder);          // Save for Buy Again
            document.getElementById('success-order-no').textContent =
            `ऑर्डर नं. / Order #: ${savedOrder.order_number}`;
            document.getElementById('success-pickup-slot').textContent =
            `🕐 Pickup: ${pickup_slot}`;
        } catch (e) {
            throw e; // let outer catch handle showing toast
        }
        closeCheckout();
        document.getElementById('success-modal').classList.add('open');
        cart = [];
        saveCart();
        updateCartUI();
        ['c-name', 'c-address', 'c-notes'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        // Reset phone field
        const phoneField = document.getElementById('c-phone');
        if (phoneField) { phoneField.value = ''; phoneField.readOnly = false; phoneField.style.background = ''; }
        // Clear verified phone for next order
        verifiedPhone = null;

    } catch (err) {
        showToast('ऑर्डर देण्यात अयशस्वी: ' + err.message, 'error');
    }
}

function closeSuccess() {
    document.getElementById('success-modal').classList.remove('open');
}

/* ══════════════════════════════════════════════
   FEATURE 3 — WISHLIST / FAVORITES
   ══════════════════════════════════════════════ */

function toggleWishlist(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const idx = wishlist.findIndex(w => w.id === productId);
    if (idx === -1) {
        // Add to wishlist
        wishlist.push({
            id:           product.id,
            name:         product.name,
            name_marathi: product.name_marathi,
            category_id:  product.category_id,
            price_per_unit: product.price_per_unit,
            unit:         product.unit,
            in_stock:     product.in_stock
        });
        showToast(`❤️ ${product.name_marathi || product.name} आवडींमध्ये जोडला!`, 'success');
    } else {
        // Remove from wishlist
        wishlist.splice(idx, 1);
        showToast(`🤍 आवडींमधून काढला (Removed from wishlist)`);
    }

    saveWishlist();
    updateWishlistBadge();

    // Refresh current product grid to update heart icons
    const grid = document.getElementById('product-grid');
    if (grid && grid.children.length > 0) {
        // Re-render current view by finding which products are displayed
        const currentTitle = document.getElementById('products-view-title');
        if (currentTitle) {
            // Just update the specific button without full re-render
            const btn = grid.querySelector(`.wish-btn[onclick="toggleWishlist(${productId})"]`);
            if (btn) {
                const isNowWishlisted = wishlist.some(w => w.id === productId);
                btn.className = isNowWishlisted ? 'wish-btn wishlisted' : 'wish-btn';
                btn.textContent = isNowWishlisted ? '❤️' : '🤍';
            }
        }
    }
}

function saveWishlist() {
    localStorage.setItem('gtc_wishlist', JSON.stringify(wishlist));
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-count');
    if (badge) badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
}

function openWishlist() {
    renderWishlistPanel();
    document.getElementById('wishlist-modal').classList.add('open');
}

function closeWishlist() {
    document.getElementById('wishlist-modal').classList.remove('open');
}

function renderWishlistPanel() {
    const container = document.getElementById('wishlist-items');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="wishlist-empty">
                <div style="font-size:48px;margin-bottom:12px">🤍</div>
                <p>तुमची आवड यादी रिकामी आहे</p>
                <p style="margin-top:8px;font-size:13px;color:#9e9e9e">
                    Products वर ❤️ दाबा आणि येथे जतन करा
                </p>
            </div>`;
        return;
    }

    container.innerHTML = wishlist.map(item => {
        const inCart = cart.some(c => c.product_id === item.id);
        return `
            <div class="wishlist-item">
                <span class="wishlist-emoji">${getCategoryEmoji(item.category_id)}</span>
                <div class="wishlist-info">
                    <div class="wishlist-name">${item.name_marathi || item.name}</div>
                    <div class="wishlist-price">₹${item.price_per_unit.toFixed(2)} / ${item.unit}</div>
                    ${item.in_stock
                        ? `<span class="product-stock-in" style="font-size:11px">✅ उपलब्ध</span>`
                        : `<span class="product-stock-out" style="font-size:11px">❌ संपला</span>`}
                </div>
                <div class="wishlist-actions">
                    <button class="wish-add-btn" onclick="addWishlistToCart(${item.id})" ${item.in_stock ? '' : 'disabled'}>
                        🛒 Add
                    </button>
                    <button class="wish-remove-btn" onclick="removeFromWishlist(${item.id})">✕</button>
                </div>
            </div>
        `;
    }).join('');
}

function addWishlistToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product || !product.in_stock) return;
    closeWishlist();
    openProductModal(productId);
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(w => w.id !== productId);
    saveWishlist();
    updateWishlistBadge();
    renderWishlistPanel();
    // Update heart in product grid if visible
    const grid = document.getElementById('product-grid');
    if (grid) {
        const btn = grid.querySelector(`.wish-btn[onclick="toggleWishlist(${productId})"]`);
        if (btn) { btn.className = 'wish-btn'; btn.textContent = '🤍'; }
    }
}

/* ══════════════════════════════════════════════
   HOME PAGE SECTIONS — MASTER RENDER
   ══════════════════════════════════════════════ */
function renderHomePageSections() {
    renderHero();
    renderBuyAgain();
    // These 6 sections are now shown via popup buttons in the right sidebar
    // Pre-render them into hidden containers so popup can grab content quickly
    renderPopularProducts();
    renderWhyChooseUs();
    renderAboutStore();
    renderBrands();
    renderTestimonials();
    renderGallery();
    // Hide them from main view
    ['popular-section','why-us-section','about-section','brands-section','testimonials-section','gallery-section'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    renderStoreLocation();
    renderFooter();
}

/* ── HERO BANNER (replaces old static HTML) ── */
function renderHero() {
    const el = document.getElementById('hero-section');
    if (!el) return;
    el.innerHTML = `
        <div class="hero-top">
            <div class="hero-badge">✨ मंठ्यातील विश्वासू किराणा • Trusted Grocer in Mantha</div>
            <h1 class="hero-title">
                <span class="hero-mr">${STORE_CONFIG.name_mr}</span>
                <span class="hero-en">${STORE_CONFIG.name_en}</span>
            </h1>
            <p class="hero-tagline-mr">🌿 ${STORE_CONFIG.tagline_mr}</p>
            <p class="hero-tagline-en">${STORE_CONFIG.tagline_en}</p>
            <div class="hero-cta-row">
                <button class="hero-btn-primary" onclick="document.getElementById('category-grid').scrollIntoView({behavior:'smooth'})">
                    🛒 खरेदी सुरू करा &nbsp;<span style="font-size:13px;opacity:.85">Start Shopping</span>
                </button>
                <a href="wholesale.html" class="hero-btn-secondary">
                    📦 घाऊक ऑर्डर &nbsp;<span style="font-size:13px;opacity:.85">Wholesale</span>
                </a>
            </div>
            <div class="hero-stats">
                <div class="hero-stat"><strong>२००+</strong><span>उत्पादने<br><small>Products</small></span></div>
                <div class="hero-stat"><strong>${new Date().getFullYear() - STORE_CONFIG.since_year}+</strong><span>वर्षे सेवा<br><small>Years</small></span></div>
                <div class="hero-stat"><strong>१०००+</strong><span>खूष ग्राहक<br><small>Happy Customers</small></span></div>
            </div>
        </div>
        <div class="hero-visual">
            <div class="hero-emoji-grid">
                <span>🌾</span><span>🫘</span><span>🧂</span>
                <span>🫙</span><span>🌶️</span><span>🥜</span>
                <span>☕</span><span>🍬</span><span>🧴</span>
            </div>
        </div>`;
}

/* ── BUY AGAIN ── */
function renderBuyAgain() {
    const el = document.getElementById('buy-again-section');
    if (!el) return;
    const orders = JSON.parse(localStorage.getItem('gtc_recent_orders') || '[]');
    if (!orders.length) { el.style.display = 'none'; return; }
    const seen = new Set();
    const items = [];
    orders.forEach(o => (o.cart||[]).forEach(item => {
        if (!seen.has(item.product_id)) {
            seen.add(item.product_id);
            const live = allProducts.find(p => p.id === item.product_id);
            if (live && live.in_stock) items.push(live);
        }
    }));
    if (!items.length) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    el.innerHTML = `
        <div class="section-head">
            <div class="section-head-text">
                <div class="section-title-mr">🔁 पुन्हा खरेदी करा</div>
                <div class="section-title-en">Buy Again — Recently Ordered Items</div>
            </div>
        </div>
        <div class="hscroll-track">
            ${items.slice(0,10).map(p => `
            <div class="hscroll-card" onclick="openProductModal(${p.id})">
                <div class="hscroll-emoji">${CAT_ICONS[p.category_id]||'📦'}</div>
                <div class="hscroll-name-mr">${p.name_marathi||p.name}</div>
                <div class="hscroll-name-en">${p.name_marathi?p.name:''}</div>
                <div class="hscroll-price">₹${p.price_per_unit.toFixed(0)}/${p.unit}</div>
                <button class="hscroll-add-btn">🛒 कार्ट मध्ये टाका</button>
            </div>`).join('')}
        </div>`;
}

/* ── POPULAR PRODUCTS (top 10 by price desc as a proxy for popular) ── */
function renderPopularProducts() {
    const el = document.getElementById('popular-section');
    if (!el) return;
    if (!allProducts.length) { el.style.display='none'; return; }
    // Pick a spread across categories
    const catIds = [...new Set(allProducts.map(p=>p.category_id))].slice(0,8);
    const picks = catIds.map(cid => {
        const inCat = allProducts.filter(p=>p.category_id===cid && p.in_stock);
        return inCat[Math.floor(Math.random()*Math.min(3,inCat.length))] || inCat[0];
    }).filter(Boolean).slice(0,10);

    el.innerHTML = `
        <div class="section-head">
            <div class="section-head-text">
                <div class="section-title-mr">⭐ लोकप्रिय उत्पादने</div>
                <div class="section-title-en">Popular Products — Top Picks from Our Store</div>
            </div>
            <button class="section-see-all" onclick="goHome();document.getElementById('category-grid').scrollIntoView({behavior:'smooth'})">सर्व पाहा →</button>
        </div>
        <div class="hscroll-track">
            ${picks.map(p => `
            <div class="hscroll-card" onclick="openProductModal(${p.id})">
                <div class="hscroll-emoji">${CAT_ICONS[p.category_id]||'📦'}</div>
                <div class="hscroll-name-mr">${p.name_marathi||p.name}</div>
                <div class="hscroll-name-en">${p.name_marathi?p.name:''}</div>
                <div class="hscroll-price">₹${p.price_per_unit.toFixed(0)}/${p.unit}</div>
                <button class="hscroll-add-btn">🛒 कार्ट मध्ये टाका</button>
            </div>`).join('')}
        </div>`;
}

/* ── WHY CHOOSE US ── */
function renderWhyChooseUs() {
    const el = document.getElementById('why-us-section');
    if (!el) return;
    el.innerHTML = `
        <div class="section-head centered">
            <div class="section-title-mr">🌟 आम्हालाच का निवडायचे?</div>
            <div class="section-title-en">Why Choose Gajanan Trading Co.?</div>
        </div>
        <div class="why-grid">
            ${STORE_CONFIG.why_us.map(w=>`
            <div class="why-card">
                <div class="why-icon">${w.icon}</div>
                <div class="why-mr">${w.mr}</div>
                <div class="why-en">${w.en}</div>
            </div>`).join('')}
        </div>`;
}

/* ── ABOUT STORE ── */
function renderAboutStore() {
    const el = document.getElementById('about-section');
    if (!el) return;
    const years = new Date().getFullYear() - STORE_CONFIG.since_year;
    el.innerHTML = `
        <div class="about-grid">
            <div class="about-photos">
                <div class="about-photo-grid">
                    <div class="about-photo ap1"><span>🏪</span><div class="ap-label-mr">आमचे दुकान</div><div class="ap-label-en">Our Store</div></div>
                    <div class="about-photo ap2"><span>📦</span><div class="ap-label-mr">गोदाम</div><div class="ap-label-en">Warehouse</div></div>
                    <div class="about-photo ap3"><span>🚚</span><div class="ap-label-mr">डिलिव्हरी</div><div class="ap-label-en">Delivery</div></div>
                    <div class="about-photo ap4"><span>🤝</span><div class="ap-label-mr">ग्राहक सेवा</div><div class="ap-label-en">Customer Care</div></div>
                </div>
                <p class="about-photo-note">📸 आपले फोटो येथे जोडा — Replace these with your real store photos</p>
            </div>
            <div class="about-content">
                <div class="about-badge">🏅 कौटुंबिक व्यवसाय • Family Business since ${STORE_CONFIG.since_year}</div>
                <h2 class="about-title-mr">आमच्याबद्दल</h2>
                <h3 class="about-title-en">About Our Store</h3>
                <p class="about-desc-mr">सन ${STORE_CONFIG.since_year} पासून ${STORE_CONFIG.area_mr}मध्ये आम्ही दर्जेदार किराणा माल पुरवत आहोत. गजानन ट्रेडिंग कंपनी हा एक कौटुंबिक व्यवसाय आहे जो ${years} वर्षांपासून आपल्या ग्राहकांचा विश्वास जपत आला आहे.</p>
                <p class="about-desc-en">Since ${STORE_CONFIG.since_year}, we have been serving ${STORE_CONFIG.area_en} with quality groceries. A family-run business built on trust, fair pricing, and fresh daily stock for over ${years} years.</p>
                <div class="about-facts">
                    <div class="about-fact">
                        <span class="fact-icon">📅</span>
                        <div><div class="fact-mr">${STORE_CONFIG.since_year} पासून</div><div class="fact-en">Est. ${STORE_CONFIG.since_year}</div></div>
                    </div>
                    <div class="about-fact">
                        <span class="fact-icon">📍</span>
                        <div><div class="fact-mr">${STORE_CONFIG.area_mr}</div><div class="fact-en">${STORE_CONFIG.area_en}</div></div>
                    </div>
                    <div class="about-fact">
                        <span class="fact-icon">👨‍👩‍👧‍👦</span>
                        <div><div class="fact-mr">कौटुंबिक व्यवसाय</div><div class="fact-en">Family Business</div></div>
                    </div>
                    <div class="about-fact">
                        <span class="fact-icon">📱</span>
                        <div><div class="fact-mr">${STORE_CONFIG.phone}</div><div class="fact-en">Call / WhatsApp</div></div>
                    </div>
                </div>
                <a href="tel:${STORE_CONFIG.phone}" class="about-cta-btn">📞 आत्ता संपर्क करा &nbsp;<small>Call Now</small></a>
            </div>
        </div>`;
}

/* ── BRANDS ── */
function renderBrands() {
    const el = document.getElementById('brands-section');
    if (!el) return;
    el.innerHTML = `
        <div class="section-head centered">
            <div class="section-title-mr">🏅 आम्ही विकत असलेले ब्रँड्स</div>
            <div class="section-title-en">Brands We Deal In — Authorized Distributor</div>
        </div>
        <div class="brands-grid">
            ${STORE_CONFIG.brands.map(b=>`
            <div class="brand-card">
                <div class="brand-emoji">${b.emoji}</div>
                <div class="brand-name-mr">${b.name}</div>
                <div class="brand-name-en">${b.name_en}</div>
                <div class="brand-badge">${b.badge}</div>
            </div>`).join('')}
        </div>
        <div class="brands-cta">
            <p class="brands-cta-mr">📦 घाऊक पुरवठ्यासाठी संपर्क करा</p>
            <p class="brands-cta-en">Interested in bulk supply? Contact us today!</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:16px">
                <a href="tel:${STORE_CONFIG.phone}" class="brands-contact-btn">📞 ${STORE_CONFIG.phone}</a>
                <a href="wholesale.html" class="brands-contact-btn secondary">📦 घाऊक ऑर्डर पेज पाहा</a>
            </div>
        </div>`;
}

/* ── TESTIMONIALS ── */
function renderTestimonials() {
    const el = document.getElementById('testimonials-section');
    if (!el) return;
    const stars = n => '⭐'.repeat(n);
    el.innerHTML = `
        <div class="section-head centered">
            <div class="section-title-mr">💬 ग्राहकांचे अनुभव</div>
            <div class="section-title-en">What Our Customers Say — Testimonials</div>
        </div>
        <div class="testi-grid">
            ${STORE_CONFIG.testimonials.map(t=>`
            <div class="testi-card">
                <div class="testi-stars">${stars(t.stars)}</div>
                <p class="testi-text-mr">"${t.text_mr}"</p>
                <p class="testi-text-en">"${t.text_en}"</p>
                <div class="testi-author">
                    <div class="testi-avatar">${t.name_mr.charAt(0)}</div>
                    <div>
                        <div class="testi-name-mr">${t.name_mr}</div>
                        <div class="testi-role">${t.role_mr} • ${t.role_en}</div>
                    </div>
                </div>
            </div>`).join('')}
        </div>`;
}

/* ── GALLERY ── */
const GALLERY_ITEMS = [
    { emoji:'🏪', mr:'दुकान',        en:'Store Front',        bg:'#e8f5e9,#c8e6c9' },
    { emoji:'📦', mr:'गोदाम',        en:'Warehouse & Stock',  bg:'#e3f2fd,#bbdefb' },
    { emoji:'🌾', mr:'धान्य साठा',   en:'Grain Stock',        bg:'#fff8e1,#ffe082' },
    { emoji:'🫙', mr:'मसाला विभाग',  en:'Spices Section',     bg:'#fce4ec,#f48fb1' },
    { emoji:'🚚', mr:'डिलिव्हरी',    en:'Delivery Vehicle',   bg:'#e8eaf6,#9fa8da' },
    { emoji:'🤝', mr:'ग्राहक सेवा',  en:'Customer Service',   bg:'#f3e5f5,#ce93d8' },
];

function renderGallery() {
    const el = document.getElementById('gallery-section');
    if (!el) return;
    // Hidden section stores carousel data — popup will build the real carousel
    el.innerHTML = `<div class="gallery-data" data-count="${GALLERY_ITEMS.length}"></div>`;
    GALLERY_ITEMS.forEach((item, i) => {
        const d = document.createElement('div');
        d.className = 'gallery-data-item';
        d.dataset.emoji = item.emoji;
        d.dataset.mr    = item.mr;
        d.dataset.en    = item.en;
        d.dataset.bg    = item.bg;
        el.querySelector('.gallery-data').appendChild(d);
    });
}

function buildGalleryCarousel() {
    const items = GALLERY_ITEMS;
    return `
        <div class="section-head centered" style="margin-bottom:20px">
            <div class="section-title-mr">📸 आमची गॅलरी</div>
            <div class="section-title-en">Our Gallery — Store, Warehouse &amp; Team</div>
        </div>

        <div class="gc-wrap">
            <!-- Main slide -->
            <div class="gc-stage">
                <button class="gc-arrow gc-prev" onclick="gallerySlide(-1)" title="Previous">&#8249;</button>
                <div class="gc-slides-viewport">
                    <div class="gc-slides-track" id="gc-track">
                        ${items.map((item, i) => `
                        <div class="gc-slide" data-index="${i}">
                            <div class="gc-slide-inner" style="background:linear-gradient(135deg,${item.bg})">
                                <span class="gc-slide-emoji">${item.emoji}</span>
                                <div class="gc-slide-label-mr">${item.mr}</div>
                                <div class="gc-slide-label-en">${item.en}</div>
                                <div class="gc-slide-hint">📷 फोटो जोडा · Add your photo here</div>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>
                <button class="gc-arrow gc-next" onclick="gallerySlide(1)" title="Next">&#8250;</button>
            </div>

            <!-- Counter -->
            <div class="gc-counter">
                <span id="gc-current">1</span> / <span>${items.length}</span>
            </div>

            <!-- Dot indicators -->
            <div class="gc-dots" id="gc-dots">
                ${items.map((_, i) => `<button class="gc-dot${i===0?' active':''}" onclick="galleryGoTo(${i})"></button>`).join('')}
            </div>

            <!-- Thumbnail strip -->
            <div class="gc-thumbs" id="gc-thumbs">
                ${items.map((item, i) => `
                <div class="gc-thumb${i===0?' active':''}" onclick="galleryGoTo(${i})" style="background:linear-gradient(135deg,${item.bg})">
                    <span>${item.emoji}</span>
                    <div class="gc-thumb-label">${item.mr}</div>
                </div>`).join('')}
            </div>

            <p style="text-align:center;font-size:11px;color:#9e9e9e;margin-top:14px">
                💡 या placeholder boxes मध्ये तुमचे स्वतःचे फोटो जोडण्यासाठी developer ला सांगा
            </p>
        </div>
    `;
}

let gcCurrentIndex = 0;

function initGalleryCarousel() {
    gcCurrentIndex = 0;
    galleryGoTo(0);
}

function galleryGoTo(index) {
    const total = GALLERY_ITEMS.length;
    gcCurrentIndex = (index + total) % total;
    const track = document.getElementById('gc-track');
    if (!track) return;
    track.style.transform = `translateX(-${gcCurrentIndex * 100}%)`;

    // Update counter
    const counter = document.getElementById('gc-current');
    if (counter) counter.textContent = gcCurrentIndex + 1;

    // Update dots
    document.querySelectorAll('.gc-dot').forEach((d, i) => {
        d.classList.toggle('active', i === gcCurrentIndex);
    });

    // Update thumbs
    document.querySelectorAll('.gc-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === gcCurrentIndex);
        if (i === gcCurrentIndex) t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
}

function gallerySlide(dir) {
    galleryGoTo(gcCurrentIndex + dir);
}

/* ── STORE LOCATION ── */
function renderStoreLocation() {
    const el = document.getElementById('location-section');
    if (!el) return;
    el.innerHTML = `
        <div class="section-head centered">
            <div class="section-title-mr">📍 आमचे दुकान कुठे आहे?</div>
            <div class="section-title-en">Find Our Store — Location & Contact</div>
        </div>
        <div class="location-grid">
            <div class="location-map">
                <iframe
                    src="${STORE_CONFIG.map_embed_src}"
                    width="100%" height="320" style="border:0;border-radius:12px;" allowfullscreen
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div class="location-info">
                <div class="loc-card">
                    <span class="loc-icon">📍</span>
                    <div>
                        <div class="loc-label-mr">पत्ता</div>
                        <div class="loc-label-en">Address</div>
                        <div class="loc-value-mr">${STORE_CONFIG.address_mr}</div>
                        <div class="loc-value-en">${STORE_CONFIG.address_en}</div>
                    </div>
                </div>
                <div class="loc-card">
                    <span class="loc-icon">📱</span>
                    <div>
                        <div class="loc-label-mr">संपर्क क्रमांक</div>
                        <div class="loc-label-en">Contact Number</div>
                        <div class="loc-value-mr">${STORE_CONFIG.phone}</div>
                    </div>
                </div>
                <div class="loc-card">
                    <span class="loc-icon">🕐</span>
                    <div>
                        <div class="loc-label-mr">वेळ</div>
                        <div class="loc-label-en">Store Timings</div>
                        ${STORE_CONFIG.timings.map(t=>`
                            <div style="margin-top:6px">
                                <div class="loc-value-mr">${t.day_mr} — ${t.time}</div>
                                <div class="loc-value-en">${t.day_en} — ${t.time}</div>
                            </div>`).join('')}
                    </div>
                </div>
                <div class="loc-buttons">
                    <a href="https://www.google.com/maps/search/Mantha+Maharashtra" target="_blank" class="loc-btn primary">
                        🗺️ Google Maps वर पाहा<br><small>View on Google Maps</small>
                    </a>
                    <a href="tel:${STORE_CONFIG.phone}" class="loc-btn secondary">
                        📞 आत्ता फोन करा<br><small>Call Now</small>
                    </a>
                    <a href="https://wa.me/91${STORE_CONFIG.whatsapp}" target="_blank" class="loc-btn whatsapp">
                        💬 WhatsApp करा<br><small>Chat on WhatsApp</small>
                    </a>
                </div>
            </div>
        </div>`;
}

/* ── FOOTER ── */
function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
        <div class="footer-inner">
            <div class="footer-col">
                <div class="footer-logo">🛒 ${STORE_CONFIG.name_mr}</div>
                <div class="footer-logo-en">${STORE_CONFIG.name_en}</div>
                <p class="footer-desc-mr">मंठ्यातील विश्वासू किराणा दुकान</p>
                <p class="footer-desc-en">Your trusted grocery partner in Mantha since ${STORE_CONFIG.since_year}</p>
            </div>
            <div class="footer-col">
                <div class="footer-col-title-mr">द्रुत दुवे</div>
                <div class="footer-col-title-en">Quick Links</div>
                <a onclick="document.getElementById('category-grid').scrollIntoView({behavior:'smooth'})">🛒 खरेदी सुरू करा</a>
                <a href="wholesale.html">📦 घाऊक ऑर्डर</a>
                <a onclick="openOrderHistory()">📋 माझे ऑर्डर</a>
                <a onclick="openWishlist()">❤️ माझी आवड यादी</a>
            </div>
            <div class="footer-col">
                <div class="footer-col-title-mr">संपर्क</div>
                <div class="footer-col-title-en">Contact Us</div>
                <p>📍 ${STORE_CONFIG.address_mr}</p>
                <p>📱 <a href="tel:${STORE_CONFIG.phone}">${STORE_CONFIG.phone}</a></p>
                <p>💬 <a href="https://wa.me/91${STORE_CONFIG.whatsapp}">WhatsApp करा</a></p>
            </div>
            <div class="footer-col">
                <div class="footer-col-title-mr">वेळ</div>
                <div class="footer-col-title-en">Store Hours</div>
                ${STORE_CONFIG.timings.map(t=>`<p>${t.day_mr}: ${t.time}</p>`).join('')}
            </div>
        </div>
        <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} ${STORE_CONFIG.name_en} • ${STORE_CONFIG.area_en} • All Rights Reserved</p>
        </div>`;
}

/* Store last placed orders in localStorage for Buy Again */
function saveOrderForBuyAgain(order) {
    const existing = JSON.parse(localStorage.getItem('gtc_recent_orders') || '[]');
    existing.unshift(order);
    localStorage.setItem('gtc_recent_orders', JSON.stringify(existing.slice(0,5))); // keep last 5
}

/* ══════════════════════════════════════════════
   FEATURE 1 — ORDER HISTORY (by phone number)
   ══════════════════════════════════════════════ */
const MIN_ORDER_AMOUNT = 200; // ← Change this to any amount you want (Feature 2)

function openOrderHistory() {
    const modal = document.getElementById('order-history-modal');
    if (!modal) return;
    document.getElementById('oh-phone').value   = '';
    document.getElementById('oh-results').innerHTML = '';
    document.getElementById('oh-error').style.display = 'none';
    modal.classList.add('open');
    modal.addEventListener('click', function backdrop(e) {
        if (e.target === modal) { closeOrderHistory(); modal.removeEventListener('click', backdrop); }
    });
}

function closeOrderHistory() {
    const modal = document.getElementById('order-history-modal');
    if (modal) modal.classList.remove('open');
}

async function searchOrderHistory() {
    const phone   = document.getElementById('oh-phone').value.trim();
    const errEl   = document.getElementById('oh-error');
    const results = document.getElementById('oh-results');
    errEl.style.display = 'none';
    if (!/^\d{10}$/.test(phone)) {
        errEl.textContent = 'कृपया 10 अंकी मोबाइल नंबर टाका!';
        errEl.style.display = 'block';
        return;
    }
    results.innerHTML = '<div style="text-align:center;padding:24px;color:#9e9e9e">Loading...</div>';
    try {
        const res  = await fetch(`/api/orders/by-phone/${phone}`);
        const data = await res.json();
        if (!data.success) throw new Error(data.message);
        if (data.orders.length === 0) {
            results.innerHTML = `<div style="text-align:center;padding:32px;color:#9e9e9e">
                <div style="font-size:40px;margin-bottom:10px">🔍</div>
                <p>या नंबरवर कोणतेही ऑर्डर आढळले नाहीत</p>
                <p style="font-size:12px;margin-top:6px">No orders found for this number</p>
            </div>`;
            return;
        }
        const statusColor = { pending:'#e65100', confirmed:'#2e7d32', delivered:'#1565c0', cancelled:'#c62828' };
        const statusBg    = { pending:'#fff3e0', confirmed:'#e8f5e9', delivered:'#e3f2fd', cancelled:'#fce4ec' };
        results.innerHTML = data.orders.map(o => {
            const date = new Date(o.date).toLocaleString('en-IN', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
            const sc   = o.status || 'pending';
            return `
            <div style="border:1px solid #e0e0e0;border-radius:10px;padding:14px;margin-bottom:12px;background:#fff">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px">
                    <div>
                        <div style="font-weight:700;font-size:14px;color:#1b5e20">${o.order_number}</div>
                        <div style="font-size:12px;color:#9e9e9e;margin-top:2px">${date}</div>
                        ${o.customer?.pickup_slot ? `<div style="font-size:12px;color:#388e3c;margin-top:4px">🕐 ${o.customer.pickup_slot}</div>` : ''}
                    </div>
                    <div style="text-align:right">
                        <span style="background:${statusBg[sc]};color:${statusColor[sc]};padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600">${sc}</span>
                        <div style="font-weight:700;font-size:16px;color:#212121;margin-top:4px">₹${(o.total||0).toFixed(2)}</div>
                    </div>
                </div>
                <div style="margin-top:10px;padding-top:10px;border-top:1px solid #f0f0f0">
                    ${(o.cart||[]).map(item => `
                        <div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;color:#555">
                            <span>${item.name_marathi||item.name} (${item.quantity} ${item.unit})</span>
                            <span>₹${item.item_total.toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <button onclick="printCustomerBill(${JSON.stringify(o).replace(/"/g,'&quot;')})"
                        style="margin-top:10px;width:100%;background:#f0fdf4;border:1px solid #c8e6c9;color:#1b5e20;border-radius:8px;padding:8px;font-size:13px;cursor:pointer;font-weight:600">
                    🖨️ बिल प्रिंट करा (Print Bill)
                </button>
            </div>`;
        }).join('');
    } catch (e) {
        results.innerHTML = `<div style="text-align:center;padding:24px;color:#d32f2f">Error: ${e.message}</div>`;
    }
}

/* ══════════════════════════════════════════════
   FEATURE 5 — PRINT BILL / INVOICE (Customer)
   ══════════════════════════════════════════════ */
function printCustomerBill(order) {
    const date = new Date(order.date).toLocaleString('en-IN', {
        day:'2-digit', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit'
    });
    const itemRows = (order.cart || []).map(item => `
        <tr>
            <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0">${item.name_marathi || item.name}<br><span style="font-size:11px;color:#888">${item.name_marathi ? item.name : ''}</span></td>
            <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;text-align:center">${item.quantity} ${item.unit}</td>
            <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;text-align:right">₹${item.price_per_unit.toFixed(2)}</td>
            <td style="padding:8px 6px;border-bottom:1px solid #f0f0f0;text-align:right;font-weight:600">₹${item.item_total.toFixed(2)}</td>
        </tr>`).join('');

    const win = window.open('', '_blank', 'width=700,height=900');
    win.document.write(`<!DOCTYPE html><html><head><title>Bill — ${order.order_number}</title>
    <meta charset="UTF-8">
    <style>
        body{font-family:'Segoe UI',Arial,sans-serif;margin:0;padding:24px;color:#212121;max-width:680px;margin:0 auto}
        .header{background:#1b5e20;color:#fff;padding:20px 24px;border-radius:10px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:flex-start}
        .shop-name{font-size:22px;font-weight:800}
        .shop-sub{font-size:12px;opacity:0.8;margin-top:4px}
        .bill-no{text-align:right}
        .bill-no .num{font-size:16px;font-weight:700}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px}
        .info-box{background:#f9f9f9;border-radius:8px;padding:12px 14px}
        .info-label{font-size:11px;color:#888;margin-bottom:4px;text-transform:uppercase}
        .info-value{font-size:14px;font-weight:600}
        table{width:100%;border-collapse:collapse;margin-bottom:16px}
        thead{background:#f4f6f4}
        th{padding:10px 6px;text-align:left;font-size:12px;color:#555;font-weight:600;border-bottom:2px solid #e0e0e0}
        th:nth-child(2){text-align:center} th:nth-child(3),th:nth-child(4){text-align:right}
        .total-row{background:#e8f5e9;font-weight:700;font-size:16px}
        .total-row td{padding:12px 6px}
        .footer{text-align:center;margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;font-size:12px;color:#888}
        @media print{body{padding:0}.no-print{display:none}}
    </style></head><body>
    <div class="header">
        <div>
            <div class="shop-name">🛒 Gajanan Trading Co.</div>
            <div class="shop-sub">गजानन ट्रेडिंग कंपनी • मंठा</div>
        </div>
        <div class="bill-no">
            <div style="font-size:11px;opacity:0.8">ORDER BILL</div>
            <div class="num">${order.order_number}</div>
            <div style="font-size:11px;opacity:0.8;margin-top:4px">${date}</div>
        </div>
    </div>
    <div class="info-grid">
        <div class="info-box">
            <div class="info-label">Customer Name</div>
            <div class="info-value">${order.customer?.name || '—'}</div>
            <div style="font-size:13px;color:#555;margin-top:4px">📱 ${order.customer?.phone || ''}</div>
            ${order.customer?.address ? `<div style="font-size:12px;color:#777;margin-top:2px">📍 ${order.customer.address}</div>` : ''}
        </div>
        <div class="info-box">
            <div class="info-label">Pickup Slot</div>
            <div class="info-value">${order.customer?.pickup_slot || 'Not specified'}</div>
            <div style="margin-top:8px"><div class="info-label">Order Status</div>
            <div class="info-value" style="color:#2e7d32">${(order.status||'pending').toUpperCase()}</div></div>
        </div>
    </div>
    <table>
        <thead><tr>
            <th>Item / वस्तू</th><th style="text-align:center">Qty</th>
            <th style="text-align:right">Rate</th><th style="text-align:right">Amount</th>
        </tr></thead>
        <tbody>
            ${itemRows}
            <tr class="total-row">
                <td colspan="3">एकूण (Total)</td>
                <td style="text-align:right">₹${(order.total||0).toFixed(2)}</td>
            </tr>
        </tbody>
    </table>
    ${order.customer?.notes ? `<div style="background:#fff8e1;border-left:4px solid #f57c00;padding:10px 14px;border-radius:6px;font-size:13px;margin-bottom:16px"><strong>📝 Notes:</strong> ${order.customer.notes}</div>` : ''}
    <div class="footer">
        <p>धन्यवाद! आपल्या खरेदीबद्दल आभारी आहोत।</p>
        <p style="margin-top:4px">Thank you for shopping with Gajanan Trading Co.</p>
    </div>
    <div class="no-print" style="text-align:center;margin-top:20px">
        <button onclick="window.print()" style="background:#1b5e20;color:#fff;border:none;padding:12px 30px;border-radius:8px;font-size:16px;cursor:pointer">🖨️ Print</button>
        <button onclick="window.close()" style="background:#f0f0f0;color:#333;border:none;padding:12px 24px;border-radius:8px;font-size:16px;cursor:pointer;margin-left:10px">✕ Close</button>
    </div>
    </body></html>`);
    win.document.close();
    setTimeout(() => win.print(), 400);
}

/* ══════════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════════ */
function showToast(message, type = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3100);
}

/* ══════════════════════════════════════════════
   SECTION POPUP — Right sidebar buttons
   ══════════════════════════════════════════════ */
function openSectionPopup(key) {
    const modal   = document.getElementById('section-popup-modal');
    const content = document.getElementById('section-popup-content');
    if (!modal || !content) return;

    const sourceIds = {
        popular:      'popular-section',
        why:          'why-us-section',
        about:        'about-section',
        brands:       'brands-section',
        testimonials: 'testimonials-section',
        gallery:      'gallery-section',
    };

    if (key === 'gallery') {
        // Gallery gets a live-built carousel, not the hidden section's content
        content.innerHTML = buildGalleryCarousel();
        initGalleryCarousel();
    } else {
        const sourceEl = document.getElementById(sourceIds[key]);
        content.innerHTML = sourceEl ? sourceEl.innerHTML : '<p>Content not found.</p>';
    }

    // Highlight active button — both desktop sidebar and mobile bar
    document.querySelectorAll('.info-sidebar-btn, .mob-info-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.info-sidebar-btn[onclick="openSectionPopup('${key}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
    const activeMobBtn = document.querySelector(`.mob-info-btn[onclick="openSectionPopup('${key}')"]`);
    if (activeMobBtn) activeMobBtn.classList.add('active');

    modal.classList.add('open');
    modal.onclick = function(e) { if (e.target === modal) closeSectionPopup(); };
}

function closeSectionPopup() {
    const modal = document.getElementById('section-popup-modal');
    if (modal) modal.classList.remove('open');
    document.querySelectorAll('.info-sidebar-btn, .mob-info-btn').forEach(b => b.classList.remove('active'));
}

// After initial rendering — ensure no modal overlay stuck open:
setTimeout(() => {
  forceCloseAllModals();
}, 250); // run shortly after boot to clear any late-opens