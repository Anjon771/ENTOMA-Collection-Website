/**
 * ENTOMA — Bionic Entomology & Mechanical Automata
 * Interactive Experience Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initAudioSynthesizer();
  initTiltCards();
  initCategoryFilters();
  initSpecimenModal();
  initAnatomyExplorer();
  initBespokeConfigurator();
  initLedgerVerification();
  initSalonBooking();
  initSmoothScroll();
  initThemeSwitcher();
});

/* =======================================================
   1. SPECIMEN DATABASE
   ======================================================= */
const SPECIMENS = {
  'queen-bee': {
    id: 'queen-bee',
    name: 'Elegant Queen Bee',
    latin: 'Apis Mechanica Regalis',
    taxon: 'hymenoptera',
    taxonLabel: 'Order Hymenoptera',
    price: 5999,
    formattedPrice: '$5,999',
    serial: 'ENT-084-QB',
    edition: 'Limited Edition — 12 Pieces (8 Allocated)',
    image: 'assets/img/insect-1.png',
    bg: 'assets/img/bg-card.png',
    dimensions: '148 × 112 × 42 mm',
    weight: '142 g',
    materials: 'Grade 5 Aerospace Titanium, 24k Gold Leaf Chitin, Honeycomb Damascus Plates',
    movement: 'Caliber EN-01 Twin-Spring Escapement, 28,800 vph (4 Hz)',
    powerReserve: '72 Hours Kinetic Autonomy',
    jewels: '36 Synthetic Ruby & Sapphire Bearings',
    craftHours: '320 Hand-Bench Hours',
    description: 'An exquisite kinetic masterwork blending organic honeybee posture with high Swiss watchmaking escapements. The abdominal segments flex with organic grace as the balance wheel oscillates, while twin golden filigree antennas register atmospheric micro-vibrations.',
    highlights: [
      'Micro-machined tourbillon cage visible within the thoracic cavity',
      'Hand-beveled 24k gold leaf inlay over hardened damascus chassis',
      'Synchronized micro-crank gear train powering dual-speed wing resonance',
      'Hand-serialized sapphire crystal display case included'
    ]
  },
  'magic-butterfly': {
    id: 'magic-butterfly',
    name: 'Mechanical Magic Butterfly',
    latin: 'Morpho Aetheria Chrono',
    taxon: 'lepidoptera',
    taxonLabel: 'Order Lepidoptera',
    price: 3999,
    formattedPrice: '$3,999',
    serial: 'ENT-102-MB',
    edition: 'Limited Edition — 15 Pieces (11 Allocated)',
    image: 'assets/img/insect-2.png',
    bg: 'assets/img/bg-card.png',
    dimensions: '210 × 165 × 38 mm',
    weight: '118 g',
    materials: 'Magnesium-Aluminium Alloy, Dichroic Thin-Film Silica, Rose Gold Gear Train',
    movement: 'Caliber EN-04 Harmonic Dual-Cam Oscillation, 21,600 vph (3 Hz)',
    powerReserve: '60 Hours Kinetic Autonomy',
    jewels: '28 Fine Synthetic Rubies',
    craftHours: '280 Hand-Bench Hours',
    description: 'Engineered with nanostructured optical thin-film wings that generate iridescent blues and deep amethyst hues through natural light diffraction, requiring no artificial pigment. Harmonic cams drive a lifelike, whisper-silent wing flutter.',
    highlights: [
      'Structural color wing membranes engineered via vacuum vapor deposition',
      'Featherweight skeletal chassis weighing merely 118 grams',
      'Dual-cam harmonic oscillating governor for lifelike wing fluttering',
      'Articulated proboscis wound by a micro crown in 18k rose gold'
    ]
  },
  'flower-beetle': {
    id: 'flower-beetle',
    name: 'Wonderful Flower Beetle',
    latin: 'Cetonia Aurata Machina',
    taxon: 'coleoptera',
    taxonLabel: 'Order Coleoptera',
    price: 8999,
    formattedPrice: '$8,999',
    serial: 'ENT-217-FB',
    edition: 'Masterpiece Series — 5 Pieces Worldwide (Private Allocation)',
    image: 'assets/img/insect-3.png',
    bg: 'assets/img/bg-card.png',
    dimensions: '165 × 124 × 54 mm',
    weight: '230 g',
    materials: 'Blackened Zirconium, Raw Colombian Emerald Pavé, Mirror-Polished Brass Filigree',
    movement: 'Caliber EN-09 Perpetual Rotor with Power Reserve Sub-Dial, 18,000 vph',
    powerReserve: '96 Hours Dual-Barrel Autonomy',
    jewels: '44 Jeweled Pivots & Diamond Endstones',
    craftHours: '480 Hand-Bench Hours',
    description: 'The crowning jewel of the Entoma atelier. Beneath motorized elytra wings of deep iridescence lies an exposed perpetual movement. The exoskeleton is armored in hardened zirconium with hand-carved floral baroque engravings and brilliant-cut emerald eyes.',
    highlights: [
      'Motorized elytra shells that open smoothly via concealed micro-pusher',
      'Twin spring barrels providing 96 hours of continuous mechanical reserve',
      'Natural Colombian emeralds pavé-set into ocular orbits and pronotum',
      'Satin-brushed and black-polished horological beveling on every steel bridge'
    ]
  },
  'chronos-dragonfly': {
    id: 'chronos-dragonfly',
    name: 'Chronos Dragonfly',
    latin: 'Anax Chronometrica',
    taxon: 'odonata',
    taxonLabel: 'Order Odonata',
    price: 7450,
    formattedPrice: '$7,450',
    serial: 'ENT-305-CD',
    edition: 'Limited Edition — 8 Pieces Worldwide (4 Allocated)',
    image: 'assets/img/chronos_dragonfly_1789024328486.jpg',
    bg: 'assets/img/bg-card.png',
    dimensions: '185 × 140 × 34 mm',
    weight: '108 g',
    materials: 'Aero-Grade 5 Titanium, 4 Independent Sapphire Wing Blades, Cyan Corundum Pivots',
    movement: 'Caliber EN-12 High-Beat Dual-Differential, 36,000 vph (5 Hz)',
    powerReserve: '48 Hours High-Beat Autonomy',
    jewels: '52 Synthetic Corundum & Diamond Endstones',
    craftHours: '390 Hand-Bench Hours',
    description: 'A tour de force of micro-mechanics. Four independent crystalline sapphire wing planes flap in precise 180° counter-phase kinematics driven by twin differential gear trains, replicating the agile hovering aerodynamics of the emperor dragonfly with zero electronic parts.',
    highlights: [
      '36,000 vph high-beat escapement for lightning-fast wing cadence',
      'Quad sapphire crystal wings laser-etched with 0.02mm venation tracery',
      'Articulated titanium vertebrae tail flexing organically during winding',
      'High-contrast glowing cyan corundum jewel pivots visible through skeleton bridges'
    ]
  },
  'aegis-scarab': {
    id: 'aegis-scarab',
    name: 'Aegis Golden Scarab',
    latin: 'Scarabaeus Sacer Aegypti',
    taxon: 'coleoptera',
    taxonLabel: 'Order Coleoptera',
    price: 9800,
    formattedPrice: '$9,800',
    serial: 'ENT-412-GS',
    edition: 'Masterpiece Series — 3 Pieces Worldwide (Strictly Commissioned)',
    image: 'assets/img/aegis_scarab_1789024346490.jpg',
    bg: 'assets/img/bg-card.png',
    dimensions: '155 × 118 × 62 mm',
    weight: '245 g',
    materials: '24k Solid Gold Leaf Inlay, Hardened Bronze, Zambian Emerald Cabochons, Obsidian Carapace',
    movement: 'Caliber EN-15 Astronomical Perpetual Tourbillon, 21,600 vph (3 Hz)',
    powerReserve: '120 Hours Dual-Barrel Autonomy',
    jewels: '48 Jeweled Bearings & 2 Natural Diamond Endstones',
    craftHours: '540 Hand-Bench Hours',
    description: 'Inspired by ancient sacred scarab talismans and Swiss astronomical clocks. A hand-engraved solar complication rotates on the pronotum, tracking the solar hour while twin mainspring barrels provide five days of autonomous kinetic motion.',
    highlights: [
      'Pronotum astronomical gear disc displaying real-time 24-hour solar progression',
      'Exoskeleton carved with Egyptian hieroglyphic relief and 24k gold leaf filigree',
      'Twin mainspring barrels delivering extraordinary 120-hour power autonomy',
      'Cabochon emerald ocular orbits that gleam under vitrine fiber-optic light'
    ]
  },
  'lunar-moth': {
    id: 'lunar-moth',
    name: 'Lunar Emperor Moth',
    latin: 'Actias Luna Horologia',
    taxon: 'lepidoptera',
    taxonLabel: 'Order Lepidoptera',
    price: 6250,
    formattedPrice: '$6,250',
    serial: 'ENT-518-LM',
    edition: 'Limited Edition — 10 Pieces Worldwide (6 Allocated)',
    image: 'assets/img/lunar_moth_1789024359170.jpg',
    bg: 'assets/img/bg-card.png',
    dimensions: '195 × 155 × 36 mm',
    weight: '124 g',
    materials: 'Violet-Silver Titanium Foil, Hand-Pierced Gold Filigree, Ceylon Moonstone Cabochons',
    movement: 'Caliber EN-08 Harmonic Pendulum Resonance Escapement, 21,600 vph',
    powerReserve: '68 Hours Kinetic Autonomy',
    jewels: '32 Synthetic Ruby & Moonstone Pivots',
    craftHours: '340 Hand-Bench Hours',
    description: 'Evoking the mystical aura of nocturnal Lepidoptera. Nanostructured titanium wing foils refract light into shifting lunar violet and ethereal silver. The escapement incorporates Swiss Super-LumiNova luminescence that emits a tranquil twilight glow in darkened collector salons.',
    highlights: [
      'Molecular vapor deposition creating shimmering lunar violet wing refraction',
      'Luminescent phosphor-doped escapement bridges glowing soft turquoise in dim light',
      'Feathered pectinate antennae handcrafted from 18k white gold filigree',
      'Natural Ceylon moonstones set into the central ocular ocelli'
    ]
  }
};

/* =======================================================
   2. PARTICLES BACKGROUND CANVAS
   ======================================================= */
function initParticleCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 45;
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = -(Math.random() * 0.4 + 0.15);
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.hue = Math.random() > 0.6 ? 45 : 170; // Gold or Emerald hue
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;

      // Mouse repulsion
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        this.x -= (dx / dist) * force * 2;
        this.y -= (dy / dist) * force * 2;
      }

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, 75%, ${this.alpha})`;
      ctx.shadowColor = `hsla(${this.hue}, 80%, 65%, 0.4)`;
      ctx.shadowBlur = 8;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!prefersReducedMotion.matches) {
    animate();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else if (!prefersReducedMotion.matches) {
      animate();
    }
  });
}

/* =======================================================
   3. WEB AUDIO SYNTHESIZER (HAUTE CLOCKWORK SOUNDSCAPE)
   ======================================================= */
let audioCtx = null;
let isAudioMuted = true;
let clockTimer = null;

function initAudioSynthesizer() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const soundWave = document.getElementById('sound-wave-indicator');
  if (!toggleBtn) return;

  function ensureAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTickSound() {
    if (isAudioMuted || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      // High-precision horology tick generator
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3200, now);
      filter.Q.setValueAtTime(8, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch (err) {
      console.warn('Audio synthesis warning:', err);
    }
  }

  function playChime() {
    if (isAudioMuted || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.4);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {}
  }

  toggleBtn.addEventListener('click', () => {
    ensureAudioContext();
    isAudioMuted = !isAudioMuted;

    if (!isAudioMuted) {
      toggleBtn.classList.add('audio-active');
      toggleBtn.setAttribute('aria-pressed', 'true');
      if (soundWave) soundWave.classList.add('playing');
      showToast('Clockwork soundscape activated (21,600 vph)');
      playChime();

      // Start regular clockwork escapement ticking (2 ticks per second)
      if (clockTimer) clearInterval(clockTimer);
      clockTimer = setInterval(() => {
        playTickSound();
      }, 500);
    } else {
      toggleBtn.classList.remove('audio-active');
      toggleBtn.setAttribute('aria-pressed', 'false');
      if (soundWave) soundWave.classList.remove('playing');
      showToast('Soundscape muted');
      if (clockTimer) {
        clearInterval(clockTimer);
        clockTimer = null;
      }
    }
  });
}

/* =======================================================
   4. 3D CARD TILT EFFECT & INTERACTIVE HOVER
   ======================================================= */
function initTiltCards() {
  const cards = document.querySelectorAll('.card__article');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* =======================================================
   5. CATEGORY FILTER TABS
   ======================================================= */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card__article');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      cards.forEach(card => {
        const cardTaxon = card.dataset.taxon;
        if (filterValue === 'all' || cardTaxon === filterValue) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* =======================================================
   6. SPECIMEN DOSSIER MODAL & 360 INSPECTION
   ======================================================= */
function initSpecimenModal() {
  const modal = document.getElementById('specimen-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('modal-overlay');
  const viewMoreButtons = document.querySelectorAll('.card__button, .quick-inspect-btn');

  if (!modal) return;

  function openSpecimen(specimenId) {
    const spec = SPECIMENS[specimenId] || SPECIMENS['queen-bee'];

    // Fill Modal Data
    document.getElementById('modal-specimen-title').textContent = spec.name;
    document.getElementById('modal-specimen-latin').textContent = spec.latin;
    document.getElementById('modal-specimen-taxon').textContent = spec.taxonLabel;
    document.getElementById('modal-specimen-serial').textContent = spec.serial;
    document.getElementById('modal-specimen-edition').textContent = spec.edition;
    document.getElementById('modal-specimen-price').textContent = spec.formattedPrice;
    document.getElementById('modal-specimen-desc').textContent = spec.description;

    document.getElementById('modal-spec-dimensions').textContent = spec.dimensions;
    document.getElementById('modal-spec-weight').textContent = spec.weight;
    document.getElementById('modal-spec-materials').textContent = spec.materials;
    document.getElementById('modal-spec-movement').textContent = spec.movement;
    document.getElementById('modal-spec-power').textContent = spec.powerReserve;
    document.getElementById('modal-spec-jewels').textContent = spec.jewels;
    document.getElementById('modal-spec-craft').textContent = spec.craftHours;

    const imgEl = document.getElementById('modal-specimen-img');
    imgEl.src = spec.image;
    imgEl.alt = spec.name;
    if (spec.image.endsWith('.jpg')) {
      imgEl.classList.add('framed');
    } else {
      imgEl.classList.remove('framed');
    }

    // Populate highlights
    const highlightsList = document.getElementById('modal-specimen-highlights');
    if (highlightsList) {
      highlightsList.innerHTML = spec.highlights.map(h => `<li><i class="ri-check-line"></i> <span>${h}</span></li>`).join('');
    }

    // Set inquiry button data
    const acquireBtn = document.getElementById('modal-acquire-btn');
    if (acquireBtn) {
      acquireBtn.dataset.specimenId = spec.id;
      acquireBtn.onclick = () => {
        closeModal();
        openConciergeModal(spec.name, spec.formattedPrice);
      };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset 360 viewer rotation
    const rotationSlider = document.getElementById('rotation-slider');
    if (rotationSlider) {
      rotationSlider.value = 0;
      updateRotation(0);
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewMoreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const specimenId = btn.dataset.specimen || btn.closest('.card__article')?.dataset.specimen || 'queen-bee';
      openSpecimen(specimenId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 360 rotation slider
  const rotationSlider = document.getElementById('rotation-slider');
  const modalImg = document.getElementById('modal-specimen-img');
  function updateRotation(deg) {
    if (modalImg) {
      modalImg.style.transform = `rotateY(${deg}deg) rotateZ(${deg * 0.05}deg)`;
    }
  }
  if (rotationSlider) {
    rotationSlider.addEventListener('input', (e) => {
      updateRotation(e.target.value);
    });
  }
}

/* =======================================================
   7. ANATOMY & BIOMIMETIC SCHEMATICS EXPLORER
   ======================================================= */
function initAnatomyExplorer() {
  const hotspots = document.querySelectorAll('.schematic-hotspot');
  const anatomyTitle = document.getElementById('anatomy-feature-title');
  const anatomySubtitle = document.getElementById('anatomy-feature-subtitle');
  const anatomyDesc = document.getElementById('anatomy-feature-desc');
  const anatomySpec = document.getElementById('anatomy-feature-spec');
  const anatomyBadge = document.getElementById('anatomy-feature-badge');

  const ANATOMY_DATA = {
    'escapement': {
      title: 'Chronometer Tourbillon Escapement',
      subtitle: 'Sub-assembly A-01 // Core Kinetic Motor',
      badge: 'Escapement / 28,800 VPH',
      desc: 'Suspended in a featherweight titanium cage, the tourbillon counters gravity while maintaining chronometric cadence. Fitted with a Breguet overcoil hairspring and gold timing screws adjusted to six positions.',
      spec: 'Tolerance: ±1.5 sec/day • Reserve: 72 Hours • Material: Glucydur & 24k Inlay'
    },
    'wings': {
      title: 'Synchronized Harmonic Wing Cams',
      subtitle: 'Sub-assembly W-02 // Kinetic Aerodynamics',
      badge: 'Kinetic Drive / 18 Hz Fluctuation',
      desc: 'Twin eccentric cams translate rotational escapement energy into an organic figure-eight oscillation. The dichroic silica membrane diffracts incoming ambient light into iridescent emerald and sapphire reflections.',
      spec: 'Membrane Thickness: 12 Microns • Optical Layers: 24 Vapor-Deposited Oxides'
    },
    'chitin': {
      title: 'Articulated Zirconium & Gold Chitin',
      subtitle: 'Sub-assembly C-03 // Biomimetic Exoskeleton',
      badge: 'Exoskeleton / Aerospace Grade 5',
      desc: 'Each carapace shell is hand-beveled with microscopic chamfers and finished with diamond lapping. Segmented abdominal plates slide on Teflon guide rails to simulate breathing arthropod respiration.',
      spec: 'Vickers Hardness: 1,200 HV • Hand Finishing: 160 Individual Chamfers'
    },
    'tarsal': {
      title: 'Micro-Articulated Tarsal Claws',
      subtitle: 'Sub-assembly T-04 // Suspension & Anchoring',
      badge: 'Pivots / Micro-Ball Bearings',
      desc: 'Six multi-jointed limbs utilize miniature ceramic ball bearings with 0.8mm pivot pins. The claws feature non-marring silicone pad inserts, allowing display on museum-grade glass pedestals without scratching.',
      spec: 'Pivot Count: 24 Micro-Bearings • Articulation Range: 45 Degrees per Joint'
    }
  };

  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      hotspots.forEach(s => s.classList.remove('active'));
      spot.classList.add('active');

      const key = spot.dataset.feature;
      const data = ANATOMY_DATA[key];
      if (!data) return;

      if (anatomyTitle) anatomyTitle.textContent = data.title;
      if (anatomySubtitle) anatomySubtitle.textContent = data.subtitle;
      if (anatomyDesc) anatomyDesc.textContent = data.desc;
      if (anatomySpec) anatomySpec.textContent = data.spec;
      if (anatomyBadge) anatomyBadge.textContent = data.badge;

      // Pulse animation
      const container = document.getElementById('anatomy-details-box');
      if (container) {
        container.classList.remove('fade-in-quick');
        void container.offsetWidth; // trigger reflow
        container.classList.add('fade-in-quick');
      }
    });
  });
}

/* =======================================================
   8. BESPOKE ATELIER CONFIGURATOR
   ======================================================= */
function initBespokeConfigurator() {
  const modelBtns = document.querySelectorAll('.config-model-btn');
  const finishBtns = document.querySelectorAll('.config-finish-btn');
  const wingBtns = document.querySelectorAll('.config-wing-btn');
  const jewelBtns = document.querySelectorAll('.config-jewel-btn');

  const previewImg = document.getElementById('config-preview-img');
  const previewGlow = document.getElementById('config-preview-glow');
  const priceDisplay = document.getElementById('config-price-display');
  const serialDisplay = document.getElementById('config-serial-display');
  const orderBtn = document.getElementById('config-order-btn');

  let state = {
    model: 'queen-bee',
    modelName: 'Queen Bee',
    basePrice: 5999,
    finish: 'obsidian',
    finishCost: 0,
    finishName: 'Midnight Obsidian',
    wing: 'prism',
    wingCost: 0,
    wingName: 'Dichroic Prism Film',
    jewel: 'sapphire',
    jewelCost: 0,
    jewelName: 'Royal Blue Sapphire'
  };

  function updateConfigurator() {
    const total = state.basePrice + state.finishCost + state.wingCost + state.jewelCost;
    const formatted = '$' + total.toLocaleString();

    if (priceDisplay) priceDisplay.textContent = formatted;

    const serial = `BESPOKE-${state.model.substring(0, 2).toUpperCase()}-${state.finish.substring(0, 3).toUpperCase()}-${state.jewel.substring(0, 3).toUpperCase()}-2026`;
    if (serialDisplay) serialDisplay.textContent = serial;

    // Update Model Image
    if (previewImg) {
      if (state.model === 'queen-bee') previewImg.src = 'assets/img/insect-1.png';
      else if (state.model === 'magic-butterfly') previewImg.src = 'assets/img/insect-2.png';
      else if (state.model === 'flower-beetle') previewImg.src = 'assets/img/insect-3.png';
      else if (state.model === 'chronos-dragonfly') previewImg.src = 'assets/img/chronos_dragonfly_1789024328486.jpg';
      else if (state.model === 'aegis-scarab') previewImg.src = 'assets/img/aegis_scarab_1789024346490.jpg';
      else if (state.model === 'lunar-moth') previewImg.src = 'assets/img/lunar_moth_1789024359170.jpg';

      if (previewImg.src.endsWith('.jpg')) {
        previewImg.classList.add('framed');
      } else {
        previewImg.classList.remove('framed');
      }

      // Apply finish filters
      let filterString = 'drop-shadow(0 15px 30px rgba(0,0,0,0.6)) ';
      let glowColor = 'hsla(170, 80%, 40%, 0.3)';

      if (state.finish === 'obsidian') {
        filterString += 'contrast(1.15) brightness(0.95)';
        glowColor = 'rgba(40, 60, 60, 0.4)';
      } else if (state.finish === 'gold') {
        filterString += 'sepia(0.85) saturate(2.4) hue-rotate(5deg) brightness(1.1)';
        glowColor = 'hsla(45, 90%, 50%, 0.4)';
      } else if (state.finish === 'emerald') {
        filterString += 'hue-rotate(60deg) saturate(1.8) brightness(1.05)';
        glowColor = 'hsla(155, 90%, 45%, 0.4)';
      } else if (state.finish === 'titanium') {
        filterString += 'saturate(0.2) contrast(1.2) brightness(1.25)';
        glowColor = 'hsla(200, 30%, 70%, 0.4)';
      }

      previewImg.style.filter = filterString;
      if (previewGlow) {
        previewGlow.style.background = `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`;
      }
    }
  }

  // Model selection
  modelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.model = btn.dataset.model;
      state.modelName = btn.dataset.name;
      state.basePrice = parseInt(btn.dataset.price, 10);
      updateConfigurator();
    });
  });

  // Finish selection
  finishBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      finishBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.finish = btn.dataset.finish;
      state.finishName = btn.dataset.name;
      state.finishCost = parseInt(btn.dataset.cost, 10);
      updateConfigurator();
    });
  });

  // Wing selection
  wingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      wingBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.wing = btn.dataset.wing;
      state.wingName = btn.dataset.name;
      state.wingCost = parseInt(btn.dataset.cost, 10);
      updateConfigurator();
    });
  });

  // Jewel selection
  jewelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      jewelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.jewel = btn.dataset.jewel;
      state.jewelName = btn.dataset.name;
      state.jewelCost = parseInt(btn.dataset.cost, 10);
      updateConfigurator();
    });
  });

  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      const title = `Bespoke ${state.modelName} (${state.finishName}, ${state.jewelName})`;
      const price = '$' + (state.basePrice + state.finishCost + state.wingCost + state.jewelCost).toLocaleString();
      openConciergeModal(title, price);
    });
  }

  updateConfigurator();
}

/* =======================================================
   9. AUTHENTICITY CERTIFICATE LEDGER VERIFICATION
   ======================================================= */
function initLedgerVerification() {
  const serialInput = document.getElementById('ledger-serial-input');
  const verifyBtn = document.getElementById('ledger-verify-btn');
  const resultBox = document.getElementById('ledger-result-box');
  const quickPills = document.querySelectorAll('.quick-serial-pill');

  if (!verifyBtn || !serialInput || !resultBox) return;

  const VERIFIED_ARCHIVE = {
    'ENT-084-QB': {
      specimen: 'Elegant Queen Bee',
      owner: 'Private Collection — Zurich, Switzerland',
      date: 'April 14, 2025',
      master: 'Philippe Vaneau, Master Horologist',
      status: 'Authenticated & Registered',
      hash: '0x8f3c71a9b24e6012d098ef11b7a2'
    },
    'ENT-102-MB': {
      specimen: 'Mechanical Magic Butterfly',
      owner: 'Musée des Arts Cinétiques — Paris, France',
      date: 'June 29, 2025',
      master: 'Kenji Takahashi, Kinetic Sculptor',
      status: 'Authenticated & Museum Loan Registered',
      hash: '0x33b81ef09a721c4355de89ca118b'
    },
    'ENT-217-FB': {
      specimen: 'Wonderful Flower Beetle',
      owner: 'Private Sovereign Vault — Tokyo, Japan',
      date: 'January 18, 2026',
      master: 'Mikhail Rostov & Philippe Vaneau',
      status: 'Authenticated & Masterpiece Allocation',
      hash: '0xaa429ef991c02456b37fd91040ce'
    },
    'ENT-305-CD': {
      specimen: 'Chronos Dragonfly',
      owner: 'Palais des Horloges — Geneva, Switzerland',
      date: 'May 04, 2026',
      master: 'Jean-Marc Vacheron, Escapement Master',
      status: 'Authenticated & Chronometer Tested',
      hash: '0xd7a5109b33fe88c7104b28394a61'
    },
    'ENT-412-GS': {
      specimen: 'Aegis Golden Scarab',
      owner: 'Imperial Heritage Trust — London & Cairo',
      date: 'August 12, 2026',
      master: 'Philippe Vaneau & Hélène Dupont',
      status: 'Authenticated & Masterpiece Allocation',
      hash: '0x99e120fbbcd54817aa0480392ce1'
    },
    'ENT-518-LM': {
      specimen: 'Lunar Emperor Moth',
      owner: 'Atelier Privé — Kyoto, Japan',
      date: 'July 22, 2026',
      master: 'Kenji Takahashi & Master Goldsmiths',
      status: 'Authenticated & Registered Collector Piece',
      hash: '0x55bc14839de210674ba390587efa'
    }
  };

  function performVerification(code) {
    const trimmed = code.trim().toUpperCase();
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `
      <div class="verifying-spinner">
        <i class="ri-loader-4-line ri-spin"></i>
        <span>Consulting Cryptographic Provenance Ledger...</span>
      </div>
    `;

    setTimeout(() => {
      const record = VERIFIED_ARCHIVE[trimmed];
      if (record) {
        resultBox.innerHTML = `
          <div class="cert-plaque">
            <div class="cert-header">
              <span class="cert-seal"><i class="ri-verified-badge-fill"></i> REGISTERED MASTERWORK</span>
              <span class="cert-serial">${trimmed}</span>
            </div>
            <h4 class="cert-title">${record.specimen}</h4>
            <div class="cert-grid">
              <div><strong>Registered Owner:</strong> ${record.owner}</div>
              <div><strong>Attestation Date:</strong> ${record.date}</div>
              <div><strong>Master Attendant:</strong> ${record.master}</div>
              <div><strong>Status:</strong> <span class="text-emerald">${record.status}</span></div>
            </div>
            <div class="cert-hash">SHA-256 Ledger Provenance: <code>${record.hash}</code></div>
          </div>
        `;
        showToast('Certificate verified against global atelier registry');
      } else {
        resultBox.innerHTML = `
          <div class="cert-plaque cert-unregistered">
            <div class="cert-header">
              <span class="cert-seal text-warning"><i class="ri-alert-line"></i> UNREGISTERED SERIAL</span>
              <span class="cert-serial">${trimmed}</span>
            </div>
            <p>Serial "${trimmed}" is not currently in the public masterwork registry. If you recently commissioned this piece, registration may take up to 48 hours following salon hand-delivery, or contact atelier concierge.</p>
          </div>
        `;
      }
    }, 600);
  }

  verifyBtn.addEventListener('click', () => {
    if (serialInput.value.trim()) {
      performVerification(serialInput.value);
    }
  });

  serialInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && serialInput.value.trim()) {
      performVerification(serialInput.value);
    }
  });

  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const code = pill.dataset.serial;
      serialInput.value = code;
      performVerification(code);
    });
  });
}

/* =======================================================
   10. SALON BOOKING & CONCIERGE MODAL
   ======================================================= */
function initSalonBooking() {
  const conciergeModal = document.getElementById('concierge-modal');
  const conciergeClose = document.getElementById('concierge-close-btn');
  const conciergeOverlay = document.getElementById('concierge-overlay');
  const form = document.getElementById('concierge-form');
  const salonReserveBtns = document.querySelectorAll('.salon-reserve-btn, .concierge-trigger-btn');

  salonReserveBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const salonName = btn.dataset.salon || 'Private Viewing Consultation';
      openConciergeModal(salonName, 'Complimentary Private Salon');
    });
  });

  if (conciergeClose) conciergeClose.addEventListener('click', closeConciergeModal);
  if (conciergeOverlay) conciergeOverlay.addEventListener('click', closeConciergeModal);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('concierge-name')?.value || 'Valued Collector';
      const email = document.getElementById('concierge-email')?.value || '';
      const subject = document.getElementById('concierge-specimen-title')?.value || 'Private Consultation';

      closeConciergeModal();
      showToast(`Inquiry received for ${subject}. An atelier concierge will contact ${email || name} within 12 hours.`);
      form.reset();
    });
  }
}

function openConciergeModal(specimenName = 'General Inquiry', estimatedPrice = 'On Consultation') {
  const modal = document.getElementById('concierge-modal');
  if (!modal) return;
  const titleInput = document.getElementById('concierge-specimen-title');
  const priceInput = document.getElementById('concierge-specimen-price');

  if (titleInput) titleInput.value = specimenName;
  if (priceInput) priceInput.value = estimatedPrice;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeConciergeModal() {
  const modal = document.getElementById('concierge-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* =======================================================
   11. SMOOTH SCROLL & ACTIVE LINK TRACKING
   ======================================================= */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });

        // Close mobile nav if open
        if (navMenu && navMenu.classList.contains('show-menu')) {
          navMenu.classList.remove('show-menu');
        }
      }
    });
  });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
      const expanded = navMenu.classList.contains('show-menu');
      navToggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Header scroll blur effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      header?.classList.add('scroll-header');
    } else {
      header?.classList.remove('scroll-header');
    }
  });
}

/* =======================================================
   12. THEME ACCENT SWITCHER
   ======================================================= */
function initThemeSwitcher() {
  const themeBtns = document.querySelectorAll('.theme-btn');
  const root = document.documentElement;

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const theme = btn.dataset.theme;
      if (theme === 'emerald') {
        root.style.setProperty('--accent-hue', '170');
        root.style.setProperty('--accent-glow', 'hsla(170, 80%, 55%, 0.25)');
      } else if (theme === 'gold') {
        root.style.setProperty('--accent-hue', '42');
        root.style.setProperty('--accent-glow', 'hsla(42, 90%, 55%, 0.25)');
      } else if (theme === 'obsidian') {
        root.style.setProperty('--accent-hue', '220');
        root.style.setProperty('--accent-glow', 'hsla(220, 40%, 65%, 0.25)');
      }
      showToast(`Palette tuned to ${theme.toUpperCase()} tone`);
    });
  });
}

/* =======================================================
   13. TOAST NOTIFICATION UTILITY
   ======================================================= */
function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<i class="ri-information-line"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}
