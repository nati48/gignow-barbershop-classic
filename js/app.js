/* ============================================
   APP.JS — General UI Logic (Light Theme)
   ============================================ */

// ── Mobile Menu Toggle ──────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
  if (!mobileMenu || !mobileMenuBtn) return;
  mobileMenu.classList.add('hidden');
  mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars text-xl';
}

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.className = 'fa-solid fa-bars text-xl';
    } else {
      icon.className = 'fa-solid fa-xmark text-xl';
    }
  });

  mobileMenu.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => closeMobileMenu());
  });
}

// ── Navbar scroll effect ────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// ── Smooth scroll for anchor links ──────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Horizontal services scroll ──────────────
function scrollServices(direction) {
  const container = document.getElementById('services-scroll');
  if (!container) return;
  const scrollAmount = 280; // card width + gap
  container.scrollBy({ left: direction * scrollAmount * (document.dir === 'rtl' ? -1 : 1), behavior: 'smooth' });
}

// ── Footer year ─────────────────────────────
const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// ── Hide floating CTA when booking modal is open ──
const floatingCta = document.getElementById('floating-cta');
const bookingOverlay = document.getElementById('booking-modal-overlay');
if (floatingCta && bookingOverlay) {
  const observer = new MutationObserver(() => {
    if (!bookingOverlay.classList.contains('opacity-0')) {
      floatingCta.style.display = 'none';
    } else {
      floatingCta.style.display = '';
    }
  });
  observer.observe(bookingOverlay, { attributes: true, attributeFilter: ['class'] });
}
