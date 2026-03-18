/* =============================================
   ProJob — script.js
   ============================================= */

// =============================================
// DATA
// =============================================

const companies = [
  {
    id: 'c1', name: 'Vercel', initials: 'V', color: '#000', bg: '#1a1a2e',
    industry: 'Developer Tools', size: '500+', jobs: 14, rating: 4.8,
    location: 'Remote-first',
    about: 'Vercel is the platform for frontend developers, enabling teams to build and deploy high-performance web apps with zero configuration. We live at the intersection of developer experience and performance.',
    perks: ['Remote Work', 'Equity', 'Health', 'Unlimited PTO', 'Learning Budget']
  },
  {
    id: 'c2', name: 'Linear', initials: 'L', color: '#fff', bg: '#5e5ce6',
    industry: 'Productivity Software', size: '100+', jobs: 8, rating: 4.9,
    location: 'San Francisco',
    about: 'Linear is a purpose-built tool for modern software development. We believe software can be beautiful, fast, and delightful to use. The team is small, the impact is large.',
    perks: ['Remote', 'MacBook', 'Equity', 'Health', '401k']
  },
  {
    id: 'c3', name: 'Figma', initials: 'F', color: '#fff', bg: '#e85d75',
    industry: 'Design Tools', size: '1000+', jobs: 22, rating: 4.7,
    location: 'San Francisco',
    about: 'Figma is the collaborative interface design tool. We help teams design and build together in one place. We believe design is a team sport.',
    perks: ['Flexible Hours', 'Equity', 'Parental Leave', 'Health', 'Gym']
  },
  {
    id: 'c4', name: 'Notion', initials: 'N', color: '#fff', bg: '#2e2e3a',
    industry: 'Productivity', size: '400+', jobs: 11, rating: 4.6,
    location: 'New York',
    about: 'Notion is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want.',
    perks: ['Remote', 'Equity', 'Wellness', 'Learning', 'Health']
  },
  {
    id: 'c5', name: 'Stripe', initials: 'S', color: '#fff', bg: '#6772e5',
    industry: 'Fintech', size: '8000+', jobs: 45, rating: 4.8,
    location: 'San Francisco',
    about: 'Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size use our software to accept payments and grow their revenue.',
    perks: ['Competitive Salary', 'Equity', 'Health', '401k', 'Remote']
  },
  {
    id: 'c6', name: 'Midjourney', initials: 'MJ', color: '#fff', bg: '#000',
    industry: 'AI / Creative', size: '200+', jobs: 9, rating: 4.9,
    location: 'Remote',
    about: 'Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.',
    perks: ['Remote', 'Creative Freedom', 'Equity', 'Health', 'PTO']
  },
  {
    id: 'c7', name: 'Canva', initials: 'C', color: '#fff', bg: '#00c4cc',
    industry: 'Design Platform', size: '4000+', jobs: 37, rating: 4.5,
    location: 'Sydney / Remote',
    about: "Canva is a global design platform that empowers everyone to design anything and publish anywhere. Our mission is to empower the world to design.",
    perks: ['Remote', 'Paid Travel', 'Equity', 'Health', 'Sabbatical']
  },
  {
    id: 'c8', name: 'Loom', initials: 'Lo', color: '#fff', bg: '#625df5',
    industry: 'Video Communication', size: '300+', jobs: 6, rating: 4.7,
    location: 'Remote',
    about: 'Loom is a video messaging tool that helps you get your message across through instantly shareable video. We believe the future of work is asynchronous.',
    perks: ['Fully Remote', 'Equity', 'Health', 'Home Office', 'Flexible PTO']
  },
];

const jobsData = [
  { id: 'j1',  title: 'Senior Product Designer',  company: 'Figma',       co: 'c3', color: '#e85d75', category: 'design',      type: 'Full-time',  location: 'San Francisco',    mode: 'Onsite',  salary: '$140k–$180k', skills: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'], posted: '2d ago' },
  { id: 'j2',  title: 'Frontend Engineer',         company: 'Vercel',      co: 'c1', color: '#555',    category: 'engineering', type: 'Full-time',  location: 'Remote',           mode: 'Remote',  salary: '$130k–$165k', skills: ['React', 'TypeScript', 'Next.js', 'CSS'],               posted: '1d ago' },
  { id: 'j3',  title: 'Growth Marketing Lead',     company: 'Notion',      co: 'c4', color: '#2e2e3a', category: 'marketing',   type: 'Full-time',  location: 'New York',         mode: 'Hybrid',  salary: '$110k–$140k', skills: ['SEO', 'Performance Marketing', 'Analytics', 'CRO'],     posted: '3d ago' },
  { id: 'j4',  title: 'Product Manager',           company: 'Linear',      co: 'c2', color: '#5e5ce6', category: 'product',     type: 'Full-time',  location: 'San Francisco',    mode: 'Remote',  salary: '$150k–$190k', skills: ['Roadmapping', 'Agile', 'SQL', 'Figma'],                 posted: '5h ago' },
  { id: 'j5',  title: 'ML Engineer',               company: 'Midjourney',  co: 'c6', color: '#333',    category: 'data',        type: 'Full-time',  location: 'Remote',           mode: 'Remote',  salary: '$180k–$240k', skills: ['Python', 'PyTorch', 'Diffusion Models', 'GPU'],          posted: '1d ago' },
  { id: 'j6',  title: 'UX Researcher',             company: 'Stripe',      co: 'c5', color: '#6772e5', category: 'design',      type: 'Full-time',  location: 'San Francisco',    mode: 'Hybrid',  salary: '$120k–$155k', skills: ['User Interviews', 'Usability Testing', 'Quant Research'], posted: '4d ago' },
  { id: 'j7',  title: 'Backend Engineer',          company: 'Stripe',      co: 'c5', color: '#6772e5', category: 'engineering', type: 'Full-time',  location: 'Remote',           mode: 'Remote',  salary: '$145k–$190k', skills: ['Ruby', 'Go', 'PostgreSQL', 'API Design'],               posted: '2d ago' },
  { id: 'j8',  title: 'Data Scientist',            company: 'Canva',       co: 'c7', color: '#00c4cc', category: 'data',        type: 'Full-time',  location: 'Sydney / Remote',  mode: 'Hybrid',  salary: '$120k–$160k', skills: ['Python', 'SQL', 'Statistics', 'Tableau'],               posted: '6d ago' },
  { id: 'j9',  title: 'Brand Designer',            company: 'Loom',        co: 'c8', color: '#625df5', category: 'design',      type: 'Contract',   location: 'Remote',           mode: 'Remote',  salary: '$80k–$110k',  skills: ['Brand Identity', 'Illustration', 'Motion'],             posted: '1w ago' },
  { id: 'j10', title: 'DevRel Engineer',           company: 'Vercel',      co: 'c1', color: '#555',    category: 'engineering', type: 'Full-time',  location: 'Remote',           mode: 'Remote',  salary: '$120k–$155k', skills: ['React', 'Writing', 'Community', 'Next.js'],             posted: '3d ago' },
  { id: 'j11', title: 'Content Strategist',        company: 'Notion',      co: 'c4', color: '#2e2e3a', category: 'marketing',   type: 'Part-time',  location: 'New York',         mode: 'Remote',  salary: '$70k–$90k',   skills: ['SEO', 'Writing', 'Content Planning'],                    posted: '1w ago' },
  { id: 'j12', title: 'AI Product Manager',        company: 'Midjourney',  co: 'c6', color: '#333',    category: 'product',     type: 'Full-time',  location: 'Remote',           mode: 'Remote',  salary: '$160k–$210k', skills: ['AI/ML Basics', 'Product Strategy', 'User Research'],    posted: '2d ago' },
];

// =============================================
// STATE
// =============================================
let currentCategory = 'all';
let savedJobs = JSON.parse(localStorage.getItem('pj_saved') || '{}'); // { jobId: boardName }
let appliedJobs = new Set(JSON.parse(localStorage.getItem('pj_applied') || '[]'));
let dragItem = null;

// =============================================
// COUNTER ANIMATION
// =============================================
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start.toLocaleString() + suffix;
    if (start >= target) clearInterval(timer);
  }, 25);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    animateCounter(document.getElementById('counterJobs'),  12400, '+');
    animateCounter(document.getElementById('counterCos'),     840, '+');
    animateCounter(document.getElementById('counterHires'),  3200, '+');
  }, 600);
});

// =============================================
// THEME TOGGLE
// =============================================
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// =============================================
// HAMBURGER MENU
// =============================================
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

// =============================================
// SCROLL REVEAL
// =============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// =============================================
// RENDER JOB CARDS
// =============================================
function renderJobs(jobs) {
  const grid = document.getElementById('jobsGrid');
  grid.innerHTML = '';

  if (!jobs.length) {
    grid.innerHTML = '<div class="no-jobs">😕 No jobs found. Try different filters.</div>';
    return;
  }

  jobs.forEach((job, i) => {
    const isSaved   = savedJobs[job.id] !== undefined;
    const initials  = job.company.substring(0, 2).toUpperCase();
    const modeClass = job.mode === 'Remote' ? 'chip-remote'
                    : job.mode === 'Onsite' ? 'chip-onsite'
                    : 'chip-type';
    const modeIcon  = job.mode === 'Remote' ? '🌐'
                    : job.mode === 'Onsite' ? '🏢'
                    : '🔄';

    const card = document.createElement('div');
    card.className = 'job-card';
    card.setAttribute('data-id', job.id);

    card.innerHTML = `
      <div class="card-top">
        <div class="company-logo" style="background:${job.color}">${initials}</div>
        <button class="save-btn ${isSaved ? 'saved' : ''}"
                onclick="toggleSave(event,'${job.id}')"
                title="${isSaved ? 'Unsave' : 'Save'}">
          ${isSaved ? '🔖' : '🤍'}
        </button>
      </div>
      <div class="job-title">${job.title}</div>
      <div class="company-name">${job.company}</div>
      <div class="job-meta">
        <span class="meta-chip chip-location">📍 ${job.location}</span>
        <span class="meta-chip chip-type">⏱ ${job.type}</span>
        <span class="meta-chip ${modeClass}">${modeIcon} ${job.mode}</span>
      </div>
      <div class="job-tags">
        ${job.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
      <div class="card-footer">
        <div>
          <div class="salary">${job.salary}</div>
          <div class="posted">Posted ${job.posted}</div>
        </div>
        <button class="apply-btn" onclick="openApplyModal(event,'${job.id}')">Apply</button>
      </div>
    `;

    // Click to open job detail modal
    card.addEventListener('click', (e) => {
      if (e.target.closest('.save-btn') || e.target.closest('.apply-btn')) return;
      openJobModal(job.id);
    });

    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), i * 60);
  });
}

// =============================================
// FILTER JOBS
// =============================================
function filterJobs() {
  const search   = document.getElementById('jobSearchInput').value.toLowerCase();
  const type     = document.getElementById('typeFilter').value;
  const location = document.getElementById('locationFilter').value;

  const filtered = jobsData.filter(job => {
    const matchCat    = currentCategory === 'all' || job.category === currentCategory;
    const matchSearch = !search
      || job.title.toLowerCase().includes(search)
      || job.company.toLowerCase().includes(search)
      || job.skills.some(s => s.toLowerCase().includes(search));
    const matchType = !type     || job.type === type;
    const matchLoc  = !location || job.location.includes(location) || job.mode === location;
    return matchCat && matchSearch && matchType && matchLoc;
  });

  renderJobs(filtered);
}

function setFilter(el, cat) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  filterJobs();
}

// =============================================
// HERO SEARCH
// =============================================
function heroSearchJobs() {
  const q   = document.getElementById('heroSearch').value;
  const cat = document.getElementById('heroCategory').value;

  document.getElementById('jobSearchInput').value = q;

  if (cat) {
    currentCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(b => {
      const text = b.textContent.trim().toLowerCase();
      b.classList.toggle('active', text === cat || (cat === 'all' && text === 'all'));
    });
  }

  filterJobs();
  document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
}

function quickFilter(cat) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim().toLowerCase().includes(cat));
  });
  filterJobs();
  document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
}

// =============================================
// SAVE / UNSAVE JOBS
// =============================================
function toggleSave(e, jobId) {
  e.stopPropagation();

  if (savedJobs[jobId] !== undefined) {
    delete savedJobs[jobId];
    showToast('❌', 'Job removed from saved');
  } else {
    savedJobs[jobId] = 'saved';
    showToast('🔖', 'Job saved to your board!');
  }

  persistSaved();
  filterJobs();
  renderBoards();
}

function persistSaved() {
  localStorage.setItem('pj_saved', JSON.stringify(savedJobs));
}

// =============================================
// RENDER KANBAN BOARDS
// =============================================
function renderBoards() {
  ['saved', 'applied', 'interview'].forEach(board => {
    const container = document.getElementById(`board-${board}`);
    container.innerHTML = '';

    const boardJobs = Object.entries(savedJobs)
      .filter(([, b]) => b === board)
      .map(([id]) => jobsData.find(j => j.id === id))
      .filter(Boolean);

    document.getElementById(`count-${board}`).textContent = boardJobs.length;

    if (!boardJobs.length) {
      container.innerHTML = `
        <div style="color:var(--text3);font-size:0.82rem;text-align:center;padding:20px 0;">
          Drop jobs here
        </div>`;
    }

    boardJobs.forEach(job => {
      const item = document.createElement('div');
      item.className = 'board-item';
      item.draggable = true;
      item.setAttribute('data-id', job.id);

      item.innerHTML = `
        <div class="board-item-logo" style="background:${job.color}">
          ${job.company.substring(0, 2).toUpperCase()}
        </div>
        <div class="board-item-info">
          <div class="board-item-title">${job.title}</div>
          <div class="board-item-co">${job.company}</div>
        </div>
      `;

      item.addEventListener('dragstart', () => {
        dragItem = job.id;
        item.classList.add('dragging');
      });
      item.addEventListener('dragend', () => item.classList.remove('dragging'));

      container.appendChild(item);
    });

    // Drop zone events
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      container.classList.add('drag-over');
    });
    container.addEventListener('dragleave', () => container.classList.remove('drag-over'));
    container.addEventListener('drop', (e) => {
      e.preventDefault();
      container.classList.remove('drag-over');
      if (dragItem && savedJobs[dragItem] !== undefined) {
        savedJobs[dragItem] = board;
        persistSaved();
        renderBoards();
        showToast('🔄', `Moved to ${board.charAt(0).toUpperCase() + board.slice(1)}`);
      }
    });
  });
}

// =============================================
// RENDER COMPANY CARDS
// =============================================
function renderCompanies() {
  const grid = document.getElementById('companiesGrid');

  companies.forEach((co, i) => {
    const card = document.createElement('div');
    card.className = 'company-card';

    card.innerHTML = `
      <div class="company-big-logo" style="background:${co.bg}; color:${co.color}">
        ${co.initials}
      </div>
      <div class="company-card-name">${co.name}</div>
      <div class="company-card-industry">${co.industry}</div>
      <div class="company-card-stats">
        <div>
          <div class="c-stat-num">${co.jobs}</div>
          <div class="c-stat-label">Open Jobs</div>
        </div>
        <div>
          <div class="c-stat-num">⭐ ${co.rating}</div>
          <div class="c-stat-label">Rating</div>
        </div>
        <div>
          <div class="c-stat-num">${co.size}</div>
          <div class="c-stat-label">Employees</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openCompanyModal(co.id));
    grid.appendChild(card);

    // Scroll reveal per card
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => card.classList.add('visible'), i * 80);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(card);
  });
}

// =============================================
// COMPANY MODAL
// =============================================
function openCompanyModal(coId) {
  const co     = companies.find(c => c.id === coId);
  if (!co) return;
  const coJobs = jobsData.filter(j => j.co === coId);
  const content = document.getElementById('companyModalContent');

  content.innerHTML = `
    <div class="modal-header">
      <div></div>
      <button class="modal-close" onclick="closeModal('companyModal')">✕</button>
    </div>
    <div class="modal-co-logo" style="background:${co.bg}; color:${co.color}">${co.initials}</div>
    <div class="modal-title">${co.name}</div>
    <div class="modal-sub">${co.industry} · ${co.location} · ${co.size} employees</div>
    <div class="modal-info">
      <span class="modal-chip">⭐ ${co.rating} rating</span>
      <span class="modal-chip">💼 ${co.jobs} open jobs</span>
    </div>
    <div class="modal-section-title">About</div>
    <div class="modal-body">${co.about}</div>
    <div class="modal-section-title">Perks & Benefits</div>
    <div class="modal-perks">
      ${co.perks.map(p => `<span class="perk-chip">✓ ${p}</span>`).join('')}
    </div>
    <div class="modal-section-title">Open Roles (${coJobs.length})</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
      ${coJobs.map(j => `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;
                    padding:12px 16px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-weight:600;font-size:0.9rem;">${j.title}</div>
            <div style="font-size:0.78rem;color:var(--text3);margin-top:2px;">
              ${j.type} · ${j.mode} · ${j.salary}
            </div>
          </div>
          <button class="apply-btn" onclick="openApplyModal(event,'${j.id}')">Apply</button>
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById('companyModal').classList.add('open');
}

// =============================================
// JOB DETAIL MODAL
// =============================================
function openJobModal(jobId) {
  const job = jobsData.find(j => j.id === jobId);
  if (!job) return;
  const co        = companies.find(c => c.id === job.co);
  const isApplied = appliedJobs.has(jobId);
  const content   = document.getElementById('companyModalContent');

  content.innerHTML = `
    <div class="modal-header">
      <div></div>
      <button class="modal-close" onclick="closeModal('companyModal')">✕</button>
    </div>
    <div class="modal-co-logo" style="background:${job.color}">
      ${job.company.substring(0, 2).toUpperCase()}
    </div>
    <div class="modal-title">${job.title}</div>
    <div class="modal-sub">${job.company} · ${job.location}</div>
    <div class="modal-info">
      <span class="modal-chip">⏱ ${job.type}</span>
      <span class="modal-chip">${job.mode === 'Remote' ? '🌐' : '🏢'} ${job.mode}</span>
      <span class="modal-chip">💰 ${job.salary}</span>
      <span class="modal-chip">📅 Posted ${job.posted}</span>
    </div>
    <div class="modal-section-title">Required Skills</div>
    <div class="modal-perks">
      ${job.skills.map(s => `<span class="perk-chip">✓ ${s}</span>`).join('')}
    </div>
    ${co ? `
      <div class="modal-section-title">About ${co.name}</div>
      <div class="modal-body">${co.about.substring(0, 200)}…</div>
    ` : ''}
    <button class="modal-apply ${isApplied ? 'applied' : ''}"
            onclick="openApplyModal(event,'${jobId}')">
      ${isApplied ? '✅ Already Applied' : '🚀 Apply Now'}
    </button>
  `;

  document.getElementById('companyModal').classList.add('open');
}

// =============================================
// APPLY MODAL
// =============================================
function openApplyModal(e, jobId) {
  e.stopPropagation();
  closeModal('companyModal');

  const job = jobsData.find(j => j.id === jobId);
  if (!job) return;

  const content = document.getElementById('applyModalContent');
  content.innerHTML = `
    <div class="modal-header">
      <div>
        <div class="modal-title" style="font-size:1.2rem;">Apply to ${job.title}</div>
        <div class="modal-sub">${job.company} · ${job.salary}</div>
      </div>
      <button class="modal-close" onclick="closeModal('applyModal')">✕</button>
    </div>
    <div class="form-group">
      <label class="form-label">Full Name *</label>
      <input class="form-input" type="text" placeholder="Your full name" id="applyName" />
    </div>
    <div class="form-group">
      <label class="form-label">Email *</label>
      <input class="form-input" type="email" placeholder="your@email.com" id="applyEmail" />
    </div>
    <div class="form-group">
      <label class="form-label">LinkedIn / Portfolio URL</label>
      <input class="form-input" type="url" placeholder="https://…" id="applyUrl" />
    </div>
    <div class="form-group">
      <label class="form-label">Cover Note</label>
      <textarea class="form-input" placeholder="Why are you excited about this role?" id="applyNote"></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-cancel" onclick="closeModal('applyModal')">Cancel</button>
      <button class="btn-submit" onclick="submitApplication('${jobId}')">Submit Application →</button>
    </div>
  `;

  document.getElementById('applyModal').classList.add('open');
}

function submitApplication(jobId) {
  const name  = document.getElementById('applyName').value.trim();
  const email = document.getElementById('applyEmail').value.trim();

  if (!name || !email) {
    showToast('⚠️', 'Please fill in required fields');
    return;
  }

  // Mark as applied
  appliedJobs.add(jobId);
  localStorage.setItem('pj_applied', JSON.stringify([...appliedJobs]));

  // Move to "Applied" board
  savedJobs[jobId] = 'applied';
  persistSaved();
  renderBoards();
  closeModal('applyModal');
  filterJobs();

  const companyName = jobsData.find(j => j.id === jobId)?.company || 'company';
  showToast('🎉', `Application submitted to ${companyName}!`);
}

// =============================================
// MODAL HELPERS
// =============================================
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// =============================================
// TOAST NOTIFICATION
// =============================================
let toastTimer;

function showToast(icon, msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastIcon').textContent = icon;
  document.getElementById('toastMsg').textContent  = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// =============================================
// INIT — run on page load
// =============================================
renderJobs(jobsData);
renderCompanies();
renderBoards();
