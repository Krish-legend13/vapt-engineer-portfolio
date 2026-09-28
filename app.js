// Main Application Controller for G Murali Krishnan Portfolio
// VAPT Engineer & Aspiring Red Teamer

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Initialize all subsystems
  initBootSequence();
  initCustomCursor();
  initStickyNav();
  initOperatorPhotoCard();
  initArsenalModule();
  initMissionsModule();
  initAttackSurfaceModule();
  initResumeViewerModal();
  initContactModule();
  initLiveClock();
});

/* ==========================================================================
   01. Boot Sequence Controller
   ========================================================================== */
function initBootSequence() {
  const overlay = document.getElementById('boot-sequence-overlay');
  const bootBody = document.getElementById('boot-terminal-lines');
  const skipBtn = document.getElementById('boot-skip-btn');

  if (!overlay || !bootBody) return;

  // Check if previously booted in this session
  if (sessionStorage.getItem('gmk_vapt_booted') === 'true') {
    overlay.classList.add('hidden');
    return;
  }

  const bootLines = [
    { text: '> establishing secure encrypted session...', cls: 'dim', delay: 200 },
    { text: '> initializing offensive security workstation v2.6.4...', cls: 'cyan', delay: 500 },
    { text: '> loading reconnaissance frameworks and network probes...', cls: 'dim', delay: 850 },
    { text: '> connecting to classified mission database...', cls: 'dim', delay: 1200 },
    { text: '> loading operator profile: G MURALI KRISHNAN [VAPT ENGINEER]...', cls: 'cyan', delay: 1600 },
    { text: '> verifying system integrity... [100% OK]', cls: 'green', delay: 2000 },
    { text: '> ACCESS GRANTED. Welcome, Operator.', cls: 'green', delay: 2400 }
  ];

  let timers = [];

  function finishBoot() {
    timers.forEach(t => clearTimeout(t));
    sessionStorage.setItem('gmk_vapt_booted', 'true');
    overlay.classList.add('hidden');
  }

  // Bind skip triggers
  if (skipBtn) {
    skipBtn.addEventListener('click', finishBoot);
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      finishBoot();
    }
  });

  // Typewriter sequence
  bootLines.forEach(line => {
    const timer = setTimeout(() => {
      const lineDiv = document.createElement('div');
      lineDiv.className = `boot-line ${line.cls}`;
      lineDiv.textContent = line.text;
      bootBody.appendChild(lineDiv);
    }, line.delay);
    timers.push(timer);
  });

  // Auto-finish after sequence completes
  const finalTimer = setTimeout(() => {
    finishBoot();
  }, 3100);
  timers.push(finalTimer);
}

/* ==========================================================================
   02. Custom Cyber Cursor
   ========================================================================== */
function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  const label = ring ? ring.querySelector('.cursor-label') : null;

  if (!dot || !ring || window.matchMedia('(hover: none)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Smooth ring interpolation
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover target bindings
  function bindHoverTargets() {
    const targets = document.querySelectorAll('a, button, [data-cursor], .mission-dossier-card, .exp-card, .ctf-op-card, .tree-node-btn');
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('cursor-active');
        const customText = el.getAttribute('data-cursor') || 
          (el.classList.contains('mission-dossier-card') ? 'VIEW DETAILS' : 
           el.classList.contains('exp-card') ? 'VIEW DETAILS' :
           el.classList.contains('ctf-op-card') ? 'VIEW DETAILS' :
           el.tagName === 'A' && el.target === '_blank' ? 'OPEN →' : 
           el.classList.contains('tree-node-btn') ? 'INSPECT' : 'EXECUTE');

        if (label) label.textContent = customText;
        if (el.getAttribute('data-cursor-color') === 'green') {
          ring.classList.add('cursor-green');
        }
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('cursor-active', 'cursor-green');
        if (label) label.textContent = '';
      });
    });
  }

  bindHoverTargets();
  window.bindCursorTargets = bindHoverTargets;
}

/* ==========================================================================
   03. Sticky Navigation & Mobile Menu
   ========================================================================== */
function initStickyNav() {
  const nav = document.querySelector('.cyber-nav');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-menu-drawer');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll detection for compact navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    highlightActiveSection();
  }, { passive: true });

  // Mobile drawer toggle
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('active');
      toggleBtn.textContent = isOpen ? '[ CLOSE ]' : '[ MENU ]';
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on any link or button click inside drawer
    drawer.querySelectorAll('.nav-link, button, a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
        toggleBtn.textContent = '[ MENU ]';
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section spy
  function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
}

/* ==========================================================================
   04. Operator Profile Photo Card Interactive Effects
   ========================================================================== */
function initOperatorPhotoCard() {
  const card = document.querySelector('.operator-photo-card');
  if (!card) return;

  // Add subtle 3D tilt reaction on mouse move
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.transition = 'transform 0.5s ease';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease';
  });
}

/* ==========================================================================
   05. Arsenal Interactive Category Switcher
   ========================================================================== */
function initArsenalModule() {
  const container = document.getElementById('arsenal-skills-container');
  const termFeedback = document.getElementById('arsenal-term-cmd');
  const tabs = document.querySelectorAll('.arsenal-tab-btn');

  if (!container || !window.PORTFOLIO_DATA) return;

  // Map each arsenal tab to its skill category color class
  const CAT_COLOR_CLASS = {
    web:         'skill-offensive',   // Web app pentesting = Offensive → RED
    network:     'skill-offensive',   // Network/infra testing = Offensive → RED
    redteam:     'skill-offensive',   // Red Team / AD = Offensive → RED
    tools:       'skill-other',       // Security tooling = Other → PURPLE
    programming: 'skill-programming'  // Dev / scripting = Programming → BLUE
  };

  function renderCategory(catId) {
    const data = window.PORTFOLIO_DATA.arsenal;
    const items = data.items[catId] || [];
    const catMeta = data.categories.find(c => c.id === catId);
    const colorClass = CAT_COLOR_CLASS[catId] || 'skill-other';

    if (termFeedback && catMeta) {
      termFeedback.innerHTML = `$ <span class="term-cyan">${catMeta.command}</span><br><span class="term-green">[+] Loaded ${items.length} verified offensive/security modules.</span>`;
    }

    container.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = `skill-tech-card ${colorClass}`;
      card.innerHTML = `
        <span class="skill-name">${item.name}</span>
      `;
      container.appendChild(card);
    });

    if (window.bindCursorTargets) window.bindCursorTargets();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCategory(tab.dataset.cat);
    });
  });

  // Render initial web category
  renderCategory('web');
}

/* ==========================================================================
   06. Projects / Experience / Achievement Dossier Controller & Modals
   ========================================================================== */
function initMissionsModule() {
  const grid = document.getElementById('missions-grid-container');
  const modal = document.getElementById('dossier-modal');
  if (!grid || !window.PORTFOLIO_DATA) return;

  const missions = window.PORTFOLIO_DATA.missions;

  // Render project cards
  grid.innerHTML = '';
  missions.forEach(m => {
    const card = document.createElement('div');
    card.className = `mission-dossier-card ${m.highlight ? 'highlight' : ''}`;
    card.setAttribute('data-mission-id', m.id);
    card.setAttribute('data-cursor', 'VIEW DETAILS');

    const statusCls = m.status === 'COMPLETED' ? 'completed' : 'lab';

    card.innerHTML = `
      <div class="mission-header-bar">
        <span class="mission-code">${m.code.replace('MISSION', 'PROJECT')}</span>
        <span class="mission-status-chip ${statusCls}">${m.status}</span>
      </div>
      <h3 class="mission-title">${m.title}</h3>
      <div class="mission-context">${m.context}</div>
      <p class="mission-summary">${m.summary}</p>
      <div class="mission-meta-fields">
        <div class="meta-field-row">
          <span class="meta-key">CATEGORY:</span>
          <span class="meta-val">${m.category}</span>
        </div>
        <div class="meta-field-row">
          <span class="meta-key">TARGET:</span>
          <span class="meta-val">${m.target}</span>
        </div>
        <div class="meta-field-row">
          <span class="meta-key">METHOD:</span>
          <span class="meta-val">${m.method}</span>
        </div>
      </div>
      <div class="mission-tech-tags">
        ${m.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <button type="button" class="cyber-btn cyber-btn-outline cyber-btn-sm open-dossier-btn" data-mission-id="${m.id}" data-cursor="VIEW DETAILS">
        [ VIEW DETAILS ]
      </button>
    `;

    grid.appendChild(card);
  });

  // ── Shared modal open / close ──────────────────────────────────────────
  function openModal(badgeText, titleText, bodyHTML) {
    if (!modal) return;
    modal.querySelector('.modal-code-badge').textContent = badgeText;
    modal.querySelector('.modal-title').textContent = titleText;
    modal.querySelector('.modal-scroll-body').innerHTML = bodyHTML;
    modal.querySelector('.modal-scroll-body').scrollTop = 0;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.bindCursorTargets) window.bindCursorTargets();
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ── Project (Mission) Dossier ──────────────────────────────────────────
  function openDossier(id) {
    const m = missions.find(item => item.id === id);
    if (!m) return;

    const body = `
      <div class="dossier-section-block">
        <div class="dossier-sec-heading">PROJECT OVERVIEW</div>
        <div class="modal-meta-grid">
          <div class="modal-meta-row">
            <span class="modal-meta-label">CATEGORY</span>
            <span class="modal-meta-value">${m.category}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">TARGET</span>
            <span class="modal-meta-value">${m.target}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">METHOD</span>
            <span class="modal-meta-value">${m.method}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">CONTEXT</span>
            <span class="modal-meta-value">${m.context}</span>
          </div>
        </div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">OBJECTIVE</div>
        <div class="dossier-sec-content">${m.objective}</div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">HOW I BUILT IT</div>
        <div class="dossier-sec-content">${m.approach}</div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">TECHNOLOGIES USED</div>
        <div class="mission-tech-tags">
          ${m.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">KEY FEATURES</div>
        <ul class="dossier-list">
          ${m.keyFeatures.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">SECURITY CONCEPTS & METHODOLOGIES</div>
        <ul class="dossier-list">
          ${m.securityConcepts.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">LESSONS LEARNED</div>
        <div class="dossier-sec-content">${m.lessonsLearned}</div>
      </div>
    `;

    openModal(m.code.replace('MISSION', 'PROJECT'), m.title, body);
  }

  // ── Experience Dossier ─────────────────────────────────────────────────
  function openExperienceDossier(id) {
    if (!window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.experience) return;
    const exp = window.PORTFOLIO_DATA.experience.find(e => e.id === id);
    if (!exp) return;

    const responsibilities = (exp.responsibilities || []).map(r => `<li>${r}</li>`).join('');
    const technicalWork = (exp.technicalWork || []).map(t => `<li>${t}</li>`).join('');
    const tools = (exp.toolsFrameworks || []).map(t => `<span class="tech-tag">${t}</span>`).join('');
    const contributions = (exp.projectsContributions || []).map(c => `<li>${c}</li>`).join('');

    const body = `
      <div class="dossier-section-block">
        <div class="dossier-sec-heading">ROLE & DETAILS</div>
        <div class="modal-meta-grid">
          <div class="modal-meta-row">
            <span class="modal-meta-label">ROLE</span>
            <span class="modal-meta-value">${exp.role}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">COMPANY</span>
            <span class="modal-meta-value">${exp.company}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">DURATION</span>
            <span class="modal-meta-value">${exp.duration}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">STATUS</span>
            <span class="modal-meta-value" style="color: var(--green);">${exp.type || exp.status}</span>
          </div>
        </div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">SUMMARY</div>
        <div class="dossier-sec-content">${exp.summary}</div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">RESPONSIBILITIES</div>
        <ul class="dossier-list">${responsibilities}</ul>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">TECHNICAL WORK</div>
        <ul class="dossier-list">${technicalWork}</ul>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">TOOLS & TECHNOLOGIES</div>
        <div class="mission-tech-tags">${tools}</div>
      </div>

      ${contributions ? `<div class="dossier-section-block">
        <div class="dossier-sec-heading">PROJECTS & CONTRIBUTIONS</div>
        <ul class="dossier-list">${contributions}</ul>
      </div>` : ''}

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">KEY LEARNING</div>
        <div class="dossier-sec-content">${exp.keyLearning}</div>
      </div>
    `;

    openModal('EXPERIENCE', `${exp.role} — ${exp.company}`, body);
  }

  // ── Achievement / CTF Dossier ──────────────────────────────────────────
  function openOperationDossier(id) {
    if (!window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.operations) return;
    const op = window.PORTFOLIO_DATA.operations.find(o => o.id === id);
    if (!op) return;

    const categories = (op.categoriesChallenges || []).map(c => `<li>${c}</li>`).join('');
    const skills = (op.skillsUsed || []).map(s => `<span class="tech-tag">${s}</span>`).join('');

    // Image section with fallback
    const imgSection = op.image ? `
      <div class="dossier-section-block ctf-evidence-container">
        <div class="dossier-sec-heading">ACHIEVEMENT PHOTO</div>
        <div class="ctf-evidence-frame">
          <img src="${op.image}" alt="${op.title} Achievement"
            class="ctf-evidence-img"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="ctf-placeholder-box" style="display:none;">
            <div class="ctf-placeholder-title">[ ACHIEVEMENT IMAGE PENDING ]</div>
            <div class="ctf-placeholder-sub">Place image at: ${op.image}</div>
          </div>
        </div>
      </div>
    ` : `
      <div class="dossier-section-block ctf-evidence-container">
        <div class="dossier-sec-heading">ACHIEVEMENT PHOTO</div>
        <div class="ctf-evidence-frame">
          <div class="ctf-placeholder-box">
            <div class="ctf-placeholder-title">[ ACHIEVEMENT IMAGE PENDING ]</div>
            <div class="ctf-placeholder-sub">Image will be added when provided.</div>
          </div>
        </div>
      </div>
    `;

    const body = `
      <div class="dossier-section-block">
        <div class="dossier-sec-heading">EVENT DETAILS</div>
        <div class="modal-meta-grid">
          <div class="modal-meta-row">
            <span class="modal-meta-label">EVENT</span>
            <span class="modal-meta-value">${op.title}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">ORGANIZATION</span>
            <span class="modal-meta-value">${op.event}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">DATE</span>
            <span class="modal-meta-value">${op.date}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">RESULT</span>
            <span class="modal-meta-value" style="color: var(--green);">${op.result}</span>
          </div>
          <div class="modal-meta-row">
            <span class="modal-meta-label">CATEGORY</span>
            <span class="modal-meta-value">${op.category}</span>
          </div>
        </div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">ABOUT THE EVENT</div>
        <div class="dossier-sec-content">${op.whatItWas}</div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">WHAT I DID</div>
        <div class="dossier-sec-content">${op.whatIDid}</div>
      </div>

      ${categories ? `<div class="dossier-section-block">
        <div class="dossier-sec-heading">CHALLENGE CATEGORIES</div>
        <ul class="dossier-list">${categories}</ul>
      </div>` : ''}

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">SKILLS USED</div>
        <div class="mission-tech-tags">${skills}</div>
      </div>

      <div class="dossier-section-block">
        <div class="dossier-sec-heading">KEY TAKEAWAYS</div>
        <div class="dossier-sec-content">${op.keyTakeaways}</div>
      </div>

      ${imgSection}
    `;

    openModal('ACHIEVEMENT', op.title, body);
  }

  // ── Click event delegation ─────────────────────────────────────────────
  // Project cards
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-dossier-btn');
    const card = e.target.closest('.mission-dossier-card');
    if (btn) {
      openDossier(btn.dataset.missionId);
    } else if (card) {
      openDossier(card.dataset.missionId);
    }
  });

  // Experience cards
  document.querySelectorAll('.exp-card[data-exp-id]').forEach(card => {
    card.addEventListener('click', () => {
      openExperienceDossier(card.dataset.expId);
    });
  });

  // CTF / Achievement cards
  document.querySelectorAll('.ctf-op-card[data-op-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.opId;
      if (id === 'ctf-participations') {
        openCTFParticipationsList();
      } else {
        openOperationDossier(id);
      }
    });
  });

  // CTF Participations list modal
  function openCTFParticipationsList() {
    const participations = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.ctfParticipations) || [];
    const listItems = participations.map(p => `<li>${p}</li>`).join('');
    const body = `
      <div class="dossier-section-block">
        <div class="dossier-sec-heading">CTF PARTICIPATION RECORD</div>
        <div class="dossier-sec-content" style="margin-bottom: 16px;">
          Active participation across <strong style="color: var(--amber);">${participations.length}+ CTF competitions</strong> at national and college levels (2024–2026). This list represents participations only — not all are wins.
        </div>
        <ul class="dossier-list" style="gap: 10px;">
          ${listItems}
        </ul>
      </div>
      <div class="dossier-section-block">
        <div class="dossier-sec-heading">NOTE</div>
        <div class="dossier-sec-content" style="color: var(--text-muted);">
          Competition wins (1st Place / Runner-Up) are listed separately in the Achievements section above.
        </div>
      </div>
    `;
    openModal('CTF PARTICIPATIONS', '10+ CTF Participations — Full List', body);
  }

  // Modal close handlers
  if (modal) {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  window.openDossierById = openDossier;
  window.openExperienceDossier = openExperienceDossier;
  window.openOperationDossier = openOperationDossier;
}

/* ==========================================================================
   07. Attack Surface Interactive Node Explorer
   ========================================================================== */
function initAttackSurfaceModule() {
  const inspector = document.getElementById('attack-intel-inspect');
  const buttons = document.querySelectorAll('.tree-node-btn');

  if (!inspector || !window.PORTFOLIO_DATA) return;

  const nodes = window.PORTFOLIO_DATA.attackSurface.nodes;

  function inspectNode(nodeId) {
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.nodeId === nodeId);
    });

    inspector.innerHTML = `
      <div class="intel-inspect-title">[+] NODE: ${node.label}</div>
      <div class="intel-row">
        <span class="intel-label">TESTING PHASE / SCOPE:</span>
        <span class="intel-value term-cyan">${node.phase}</span>
      </div>
      <div class="intel-row">
        <span class="intel-label">ARCHITECTURAL CONTEXT:</span>
        <span class="intel-value">${node.desc}</span>
      </div>
      <div class="intel-row">
        <span class="intel-label">VAPT VALIDATION & RECON TESTS:</span>
        <span class="intel-value term-green">${node.tests}</span>
      </div>
    `;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      inspectNode(btn.dataset.nodeId);
    });
  });

  // Default inspection on Web Auth node
  inspectNode('web-login');
}

/* ==========================================================================
   08. In-Site PDF Resume Viewer Modal
   ========================================================================== */
function initResumeViewerModal() {
  const modal = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('.trigger-resume-modal');
  const closeBtn = document.getElementById('resume-modal-close');
  const frame = document.getElementById('resume-pdf-frame');
  const zoomInBtn = document.getElementById('pdf-zoom-in');
  const zoomOutBtn = document.getElementById('pdf-zoom-out');
  const zoomResetBtn = document.getElementById('pdf-zoom-reset');
  const fullscreenBtn = document.getElementById('pdf-fullscreen-btn');

  const pdfUrl = 'G Murali Krishnan - 1ST23CY012.pdf';
  let currentZoom = 100;

  function openModal() {
    if (!modal) return;
    if (frame && (!frame.src || frame.src === 'about:blank')) {
      frame.src = `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Zoom controls
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      currentZoom = Math.min(180, currentZoom + 15);
      applyZoom();
    });
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      currentZoom = Math.max(70, currentZoom - 15);
      applyZoom();
    });
  }
  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', () => {
      currentZoom = 100;
      applyZoom();
    });
  }

  function applyZoom() {
    if (frame) {
      frame.style.transform = `scale(${currentZoom / 100})`;
      frame.style.transformOrigin = 'top center';
    }
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      const modalBox = modal.querySelector('.cyber-modal-box');
      if (!document.fullscreenElement) {
        if (modalBox.requestFullscreen) modalBox.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  window.openResumeModal = openModal;
  window.closeResumeModal = closeModal;
}

/* ==========================================================================
   09. Contact Form & Action Controller
   ========================================================================== */
function initContactModule() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('contact-form-status');
  const copyBtn = document.getElementById('copy-email-btn');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  const email = 'muralikrishnancy2021@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <div class="endpoint-info">
            <span class="endpoint-label">EMAIL COPIED</span>
            <span class="endpoint-val">${email}</span>
          </div>
          <span class="term-green">COPIED ✓</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2500);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-sender-name');
      const subjectInput = document.getElementById('form-subject-type');
      const messageInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const purpose = subjectInput ? subjectInput.value : 'General Opportunity';
      const message = messageInput ? messageInput.value.trim() : '';

      // 1. Validation: Prevent empty submissions
      if (!name || !message) {
        if (statusMsg) {
          statusMsg.innerHTML = '<span class="term-red">[-] Validation error: Name and message are required.</span>';
        }
        return;
      }

      // 2. Submitting state
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "[ LET'S WORK TOGETHER ]";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '[ TRANSMITTING MESSAGE... ]';
        submitBtn.style.opacity = '0.7';
      }

      if (statusMsg) {
        statusMsg.innerHTML = '<span class="term-cyan">[~] Dispatching transmission to serverless gateway...</span>';
      }

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            purpose,
            message,
            timestamp: new Date().toISOString()
          })
        });

        const data = await res.json().catch(() => ({}));

        if (res.ok && data.success) {
          if (statusMsg) {
            statusMsg.innerHTML = `<span class="term-green">[+] TRANSMISSION DELIVERED. Thank you for reaching out! Your message was sent to ${email}. Murali will respond shortly.</span>`;
          }
          form.reset();
        } else {
          const detail = data.message || 'Serverless endpoint did not confirm delivery';
          if (statusMsg) {
            statusMsg.innerHTML = `<span class="term-yellow">[!] Status: ${detail}. You can also email directly: <a href="mailto:${email}?subject=${encodeURIComponent('[Portfolio Contact] ' + purpose + ' from ' + name)}&body=${encodeURIComponent(message)}" class="term-cyan" style="text-decoration: underline;">${email}</a></span>`;
          }
        }
      } catch (err) {
        if (statusMsg) {
          statusMsg.innerHTML = `<span class="term-yellow">[!] Transmission failed over network. Dispatch directly via mail client: <a href="mailto:${email}?subject=${encodeURIComponent('[Portfolio Contact] ' + purpose + ' from ' + name)}&body=${encodeURIComponent(message)}" class="term-cyan" style="text-decoration: underline;">${email}</a></span>`;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.opacity = '1';
        }
      }
    });
  }
}

/* ==========================================================================
   10. Live Operator Telemetry Clock
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById('telemetry-live-clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const utc = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    clockEl.textContent = utc;
  }

  updateClock();
  setInterval(updateClock, 1000);
}
