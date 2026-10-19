/**
 * NEXUS Landing Page Scripts
 * - Interactive Particle/Node Mesh Canvas
 * - Marquee Carousel
 * - Scroll Reveal with IntersectionObserver
 * - Animated Numeric Counter
 * - Mobile Navigation Toggle
 * - Smooth Scrolling
 * - Monthly / Annual Pricing Toggle
 * - CTA Waitlist Form Validation
 * - Dynamic Active Nav Highlighter
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ─── CANVAS BACKGROUND ─── */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3,
      color: Math.random() > 0.8 ? '#f59e0b' : '#6c63ff'
    }));

    function drawCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Node mesh connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = '#6c63ff';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Particle motion update
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;

        if (nodes[i].x < 0 || nodes[i].x > canvas.width) nodes[i].vx *= -1;
        if (nodes[i].y < 0 || nodes[i].y > canvas.height) nodes[i].vy *= -1;

        // Render particle
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = nodes[i].color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = nodes[i].color;
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(drawCanvas);
    }

    drawCanvas();
  }

  /* ─── MARQUEE SETUP ─── */
  const marqueeTrack = document.getElementById('marquee');
  if (marqueeTrack) {
    const items = [
      'Neural Interface',
      'Retinal HUD',
      'Nano-Shield',
      'Exo-Skeleton',
      'Quantum Comms',
      'Bio-Synth',
      'Cortex Mapping',
      'Field Telemetry'
    ];
    const iconSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/></svg>`;

    // Duplicate list for infinite smooth looping
    [...items, ...items].forEach(name => {
      const el = document.createElement('div');
      el.className = 'marquee-item';
      el.innerHTML = `${iconSvg}<span>${name}</span>`;
      marqueeTrack.appendChild(el);
    });
  }

  /* ─── SCROLL REVEAL (INTERSECTION OBSERVER) ─── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(el => revealObserver.observe(el));

  /* ─── METRIC COUNTER ANIMATIONS ─── */
  function animateCounter(el) {
    const display = el.dataset.display;
    if (display) {
      el.textContent = display;
      return;
    }

    const target = parseFloat(el.dataset.target);
    const duration = 1600;
    const startTime = performance.now();

    function updateCounter(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document
    .querySelectorAll('.metric-num[data-target]')
    .forEach(el => counterObserver.observe(el));

  /* ─── HAMBURGER & MOBILE NAVIGATION ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ─── ACTIVE NAV HIGHLIGHTER & SCROLL SHADOW ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navbar = document.getElementById('navbar');

  window.addEventListener(
    'scroll',
    () => {
      let currentSectionId = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 110) {
          currentSectionId = sec.id;
        }
      });

      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${currentSectionId}`;
        link.style.color = isActive ? 'var(--fg)' : '';
        link.style.fontWeight = isActive ? '600' : '';
      });

      if (navbar) {
        navbar.style.boxShadow =
          window.scrollY > 20 ? '0 4px 40px rgba(0, 0, 0, 0.4)' : '';
      }
    },
    { passive: true }
  );
});

/* ─── GLOBAL UTILITIES ─── */

/**
 * Smooth scrolls directly to element by ID
 * @param {string} id
 */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Monthly / Annual Pricing Toggle
 * @param {'monthly' | 'annual'} mode
 */
function setToggle(mode) {
  const monthlyBtn = document.getElementById('t-monthly');
  const annualBtn = document.getElementById('t-annual');

  if (monthlyBtn && annualBtn) {
    monthlyBtn.classList.toggle('active', mode === 'monthly');
    annualBtn.classList.toggle('active', mode === 'annual');
  }

  document.querySelectorAll('.price-val').forEach(el => {
    const val = parseInt(el.dataset[mode], 10);
    if (!isNaN(val)) {
      el.textContent = val.toLocaleString();
    }
  });
}

/**
 * CTA Waitlist Form Submission & Validation
 */
function handleCTA() {
  const emailInput = document.getElementById('cta-email');
  const successMsg = document.getElementById('cta-success');

  if (!emailInput) return;

  const emailVal = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailVal || !emailRegex.test(emailVal)) {
    emailInput.style.borderColor = '#ef4444';
    emailInput.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.15)';
    setTimeout(() => {
      emailInput.style.borderColor = '';
      emailInput.style.boxShadow = '';
    }, 1800);
    return;
  }

  // Success state feedback
  if (emailInput.parentElement) {
    emailInput.parentElement.style.display = 'none';
  }
  if (successMsg) {
    successMsg.style.display = 'block';
  }
}
