// ============================================
// PRODUCT DATA - Update this with your products
// ============================================
const products = [
  {
    id: 1,
    name: "200 Red Roses with Gyps",
    type: "Red Roses Collection",
    buds: 200,
    price: 3500,
    image: "product_images/200 RED ROSES WITH GYPS INITIAL_1.jfif",
    variations: [
      "product_images/200 RED ROSES WITH GYPS INITIAL_1.jfif",
      "product_images/200 RED ROSES WITH GYPS INITIAL_2.jfif",
    ],
    description:
      "An extraordinary statement piece featuring 200 premium red roses with delicate gypsophila. A show-stopping arrangement that speaks volumes about your devotion.",
    details:
      "200 hand-selected red rose buds arranged with white gypsophila, presented in our signature black box with luxury packaging.",
  },
  {
    id: 2,
    name: "40 Mixed Roses Bouquet",
    type: "Mixed Rose Collection",
    buds: 40,
    price: 1200,
    image: "product_images/40 Mixed Roses Bouque.jpeg",
    variations: ["product_images/40 Mixed Roses Bouque.jpeg"],
    description:
      "A vibrant and colorful arrangement of 40 mixed roses in various shades. Perfect for celebrating joy and variety in relationships.",
    details:
      "40 premium mixed rose buds in assorted colors, expertly arranged to create visual harmony.",
  },
  {
    id: 3,
    name: "40 Red Roses Collection",
    type: "Classic Red Roses",
    buds: 40,
    price: 1500,
    image: "product_images/40 ROSES_1.jpeg",
    variations: [
      "product_images/40 ROSES_1.jpeg",
      "product_images/40 ROSES_2.jpeg",
    ],
    description:
      "Classic elegance with 40 premium red roses. A timeless expression of deep love and romance, perfect for Valentine's Day and special occasions.",
    details:
      "40 handpicked red rose buds, arranged in our luxury presentation style with premium finishing touches.",
  },
  {
    id: 4,
    name: "50 Colored Roses Collection",
    type: "Multi-Color Roses",
    buds: 50,
    price: 1800,
    image: "product_images/50 Colored Roses_1.jpeg",
    variations: [
      "product_images/50 Colored Roses_1.jpeg",
      "product_images/50 Colored Roses_2.jpeg",
    ],
    description:
      "A stunning display of 50 roses in a beautiful array of colors. Each shade represents different sentiments, creating a powerful emotional expression.",
    details:
      "50 premium colored roses carefully selected and arranged for maximum visual impact and elegance.",
  },
  {
    id: 5,
    name: "50 Roses with Picture Frame",
    type: "Roses with Memories",
    buds: 50,
    price: 2200,
    image: "product_images/50 Roses wrapped with a Picture_2.jpeg",
    variations: [
      "product_images/50 Roses wrapped with a Picture_1.jpeg",
      "product_images/50 Roses wrapped with a Picture_2.jpeg",
      "product_images/50 Roses wrapped with a Picture_3.jpeg",
      "product_images/50 Roses wrapped with a Picture_4.jpeg",
    ],
    description:
      "Personalize your gift with 50 premium roses artfully wrapped with your favorite photograph. A unique way to combine flowers with memories.",
    details:
      "50 premium roses carefully arranged with your selected photo. Please provide photo details when placing your order via WhatsApp.",
  },
  {
    id: 6,
    name: "50 Roses with Gyps & Notes",
    type: "Roses with Personal Touch",
    buds: 50,
    price: 2000,
    image: "product_images/50 ROSES WRAPPED WITH GYP AND NOTES_1.jpeg",
    variations: [
      "product_images/50 ROSES WRAPPED WITH GYP AND NOTES_1.jpeg",
      "product_images/50 ROSES WRAPPED WITH GYP AND NOTES_2.jpeg",
    ],
    description:
      "50 elegant roses combined with delicate gypsophila and personalized handwritten notes. A truly intimate gift that captures your heartfelt message.",
    details:
      "50 premium red roses, complemented by white gypsophila, wrapped with your personalized message cards.",
  },
  {
    id: 7,
    name: "70 Roses with Glitters",
    type: "Glamorous Rose Collection",
    buds: 70,
    price: 2800,
    image: "product_images/70 ROSES with Glitters_1.jpeg",
    variations: [
      "product_images/70 ROSES with Glitters_1.jpeg",
      "product_images/70 ROSES with Glitters_2.jpeg",
      "product_images/70 ROSES with Glitters_3.jpeg",
    ],
    description:
      "70 luxurious roses adorned with shimmering glitter accents for a show-stopping presentation. Perfect for making a bold romantic statement.",
    details:
      "70 premium roses with luxurious glitter embellishments, creating a glamorous and unforgettable display.",
  },
  {
    id: 8,
    name: "Small Mixed Bouquet",
    type: "Compact Arrangement",
    buds: 20,
    price: 800,
    image: "product_images/Small Mixed Bouquet_1.jpeg",
    variations: [
      "product_images/Small Mixed Bouquet_1.jpeg",
      "product_images/Small Mixed Bouquet_2.jpeg",
    ],
    description:
      "A charming and compact arrangement of mixed roses perfect for expressing affection in an elegant yet subtle way.",
    details:
      "20 premium mixed rose buds in an intimate, beautifully arranged presentation.",
  },
];

// ============================================
// CAROUSEL STATE
// ============================================
let carouselState = {
  currentProductId: null,
  currentVariationIndex: 0,
  currentVariations: [],
};

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  setupMobileMenu();
  setupModalControls();
  setupSmoothScrolling();
  setupHeaderScroll();
});

// ============================================
// PRODUCT LOADING & RENDERING
// ============================================
function loadProducts() {
  const productsContainer = document.getElementById("products-container");
  if (!productsContainer) return;

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card bg-white rounded-sm overflow-hidden";
    productCard.innerHTML = `
      <div class="h-64 bg-gray-100 overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover hover:scale-105 transition duration-500">
      </div>
      <div class="p-6">
        <h3 class="cormorant text-xl font-medium mb-2">${product.name}</h3>
        <p class="text-gray-600 text-sm mb-4">${product.type} • ${product.buds} Buds</p>
        <div class="flex justify-between items-center">
          <p class="text-2xl font-medium">R${product.price}</p>
          <div>
            <button class="view-details border border-black px-4 py-2 text-sm font-medium mr-2 hover:bg-black hover:text-white transition" data-id="${product.id}">
              Details
            </button>
            <button class="whatsapp-order bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition" data-id="${product.id}">
              <i class="fab fa-whatsapp mr-1"></i> Order
            </button>
          </div>
        </div>
      </div>
    `;

    productsContainer.appendChild(productCard);
  });

  // Setup product detail buttons
  document.querySelectorAll(".view-details").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      openProductModal(productId);
    });
  });

  // Setup WhatsApp order buttons
  document.querySelectorAll(".whatsapp-order").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      if (product) {
        const message = `Hi Sandton Fleurs! I'm interested in ordering: ${product.name} (${product.type} - ${product.buds} Buds) for R${product.price}.`;
        const url = `https://wa.me/27762183239?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }
    });
  });
}

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================
function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Initialize carousel state
  carouselState.currentProductId = productId;
  carouselState.currentVariations =
    product.variations && product.variations.length > 0
      ? product.variations
      : [product.image];
  carouselState.currentVariationIndex = 0;

  // Set modal content
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-description").textContent =
    product.description;
  document.getElementById("modal-price").textContent = `R${product.price}`;
  document.getElementById("modal-details").textContent =
    `${product.type} • ${product.buds} Premium Buds`;

  // Set data attribute on WhatsApp button
  document.getElementById("modal-whatsapp").setAttribute("data-id", productId);

  // Initialize carousel
  initializeCarousel();

  // Show modal
  document.getElementById("product-modal").classList.remove("hidden");
}

function initializeCarousel() {
  const variations = carouselState.currentVariations;
  const container = document.getElementById("carousel-main");

  // Display first variation
  displayCarouselImage(0);

  // Update carousel controls visibility
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const thumbnailsContainer = document.getElementById("carousel-thumbnails");

  if (variations.length <= 1) {
    // Hide controls if only one variation
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    thumbnailsContainer.innerHTML = "";
  } else {
    // Show controls
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    updateCarouselButtons();
    generateThumbnails();

    // Setup carousel button listeners
    prevBtn.onclick = () => carouselPrev();
    nextBtn.onclick = () => carouselNext();
  }
}

function displayCarouselImage(index) {
  const variations = carouselState.currentVariations;
  if (index < 0 || index >= variations.length) return;

  carouselState.currentVariationIndex = index;
  const imageUrl = variations[index];

  // Update main image
  const img = document.getElementById("carousel-image");
  img.src = imageUrl;

  // Update counter
  const counter = document.getElementById("carousel-counter");
  counter.textContent = `${index + 1} / ${variations.length}`;

  // Update active thumbnail
  document.querySelectorAll(".carousel-thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  updateCarouselButtons();
}

function carouselPrev() {
  const newIndex = carouselState.currentVariationIndex - 1;
  if (newIndex >= 0) {
    displayCarouselImage(newIndex);
  }
}

function carouselNext() {
  const newIndex = carouselState.currentVariationIndex + 1;
  if (newIndex < carouselState.currentVariations.length) {
    displayCarouselImage(newIndex);
  }
}

function updateCarouselButtons() {
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const index = carouselState.currentVariationIndex;
  const total = carouselState.currentVariations.length;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === total - 1;
}

function generateThumbnails() {
  const thumbnailsContainer = document.getElementById("carousel-thumbnails");
  thumbnailsContainer.innerHTML = "";

  carouselState.currentVariations.forEach((imageUrl, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = "carousel-thumbnail " + (index === 0 ? "active" : "");
    thumbnail.innerHTML = `<img src="${imageUrl}" alt="Variation ${index + 1}">`;
    thumbnail.addEventListener("click", () => displayCarouselImage(index));
    thumbnailsContainer.appendChild(thumbnail);
  });
}

// ============================================
// MODAL CONTROLS
// ============================================
function setupModalControls() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  // Close button
  const closeBtn = document.getElementById("close-modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  // Close when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target.id === "product-modal") {
      modal.classList.add("hidden");
    }
  });

  // WhatsApp button in modal
  const whatsappBtn = document.getElementById("modal-whatsapp");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const productId = parseInt(whatsappBtn.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      if (product) {
        const message = `Hi Sandton Fleurs! I'm interested in ordering: ${product.name} (${product.type} - ${product.buds} Buds) for R${product.price}.`;
        const url = `https://wa.me/27762183239?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }
    });
  }
}

// ============================================
// MOBILE MENU
// ============================================
function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when clicking a link
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// ============================================
// SERVICES & CONTACT FUNCTIONS
// ============================================
function orderService(serviceName) {
  const message = `Hi Sandton Fleurs! I'm interested in your ${serviceName} service.`;
  const url = `https://wa.me/27762183239?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function sendCustomWhatsApp() {
  const phone = document.getElementById("user-phone").value;
  const message = document.getElementById("user-message").value;

  let fullMessage = "Hi Sandton Fleurs! ";

  if (message) {
    fullMessage += message;
  } else {
    fullMessage += "I'd like to inquire about your services.";
  }

  if (phone) {
    fullMessage += ` My contact number is ${phone}.`;
  }

  const url = `https://wa.me/27762183239?text=${encodeURIComponent(fullMessage)}`;
  window.open(url, "_blank");
}

// ============================================
// SMOOTH SCROLLING
// ============================================
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function setupHeaderScroll() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (!header) return;

    if (window.scrollY > 100) {
      header.classList.add("shadow-md");
    } else {
      header.classList.remove("shadow-md");
    }
  });
}
