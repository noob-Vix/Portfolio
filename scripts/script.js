// Theme toggle (preserved behavior, fixed a11y)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
}
themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Projects render — data lives in scripts/projects.js (window.PROJECTS).
// Add public or private entries there; this file needs no edits.
const groups = {
    featured: document.querySelector('[data-group="featured"]'),
    personal: document.querySelector('[data-group="personal"]'),
    experiment: document.querySelector('[data-group="experiment"]'),
    private: document.querySelector('[data-group="private"]'),
};
const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
const modal = document.getElementById('project-modal');
let lastFocus = null;

function badgeClass(p) {
    return p.visibility === 'private' ? 'badge is-private' : 'badge';
}
function topClass(p) {
    if (p.visibility === 'private') return 'project-top is-private';
    if (p.category === 'experiment') return 'project-top is-experiment';
    return 'project-top';
}

function cardHTML(p) {
    const pills = p.tech.map(t => `<li>${t}</li>`).join('');
    const vis = p.visibility === 'private' ? 'Private' : 'Public';
    const link = p.visibility === 'private' || !p.github
        ? `<span class="btn btn-ghost" aria-disabled="true" title="Private repository — no public link">Private repository</span>`
        : `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">GitHub</a>`;
    const demo = p.demo ? `<a class="btn btn-ghost" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>` : "";
    return `
        <div class="${topClass(p)}" aria-hidden="true"></div>
        <div class="project-content">
            <p class="badge-row"><span class="${badgeClass(p)}">${vis}</span> <span class="badge badge-soft">${p.status}</span></p>
            <h3>${p.name}</h3>
            <p>${p.tagline}</p>
            <ul class="pills" aria-label="Tech stack">${pills}</ul>
            <div class="card-actions">
                <button class="btn btn-primary" data-details="${p.id}">Details</button>
                ${link}
                ${demo}
            </div>
        </div>`;
}

Object.entries(groups).forEach(([key, el]) => {
    if (!el) return;
    const list = projects.filter(p => p.category === key);
    if (!list.length) {
        el.innerHTML = key === 'private'
            ? `<div class="empty">No private entries yet. Copy the template at the bottom of <code>scripts/projects.js</code> — name, purpose, role, tech only. No code, URLs, or secrets.</div>`
            : `<div class="empty">Nothing here yet.</div>`;
        return;
    }
    el.innerHTML = '';
    list.forEach(p => {
        const article = document.createElement('article');
        article.className = 'project-card';
        article.innerHTML = cardHTML(p);
        el.appendChild(article);
    });
});

// Details modal
function openModal(p) {
    lastFocus = document.activeElement;
    modal.querySelector('[data-field="visibility"]').textContent = p.visibility === 'private' ? 'Private' : 'Public';
    modal.querySelector('[data-field="status"]').textContent = p.status;
    modal.querySelector('[data-field="name"]').textContent = p.name;
    modal.querySelector('[data-field="tagline"]').textContent = p.tagline;
    modal.querySelector('[data-field="role"]').textContent = p.role;
    modal.querySelector('[data-field="tech"]').innerHTML = p.tech.map(t => `<li>${t}</li>`).join('');
    modal.querySelector('[data-field="problem"]').textContent = p.details.problem;
    modal.querySelector('[data-field="built"]').textContent = p.details.built;
    modal.querySelector('[data-field="engineering"]').innerHTML = p.details.engineering.map(e => `<li>${e}</li>`).join('');
    modal.querySelector('[data-field="outcome"]').textContent = p.details.outcome;
    const links = modal.querySelector('[data-field="links"]');
    links.innerHTML = '';
    if (p.visibility !== 'private' && p.github) {
        const a = document.createElement('a');
        a.className = 'btn btn-primary';
        a.href = p.github; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = 'View on GitHub';
        links.appendChild(a);
    } else {
        const s = document.createElement('span');
        s.className = 'muted small';
        s.textContent = 'Private repository — no public link. Details on request.';
        links.appendChild(s);
    }
    if (p.demo) {
        const d = document.createElement('a');
        d.className = 'btn btn-ghost'; d.href = p.demo; d.target = '_blank'; d.rel = 'noopener';
        d.textContent = 'Live demo';
        links.appendChild(d);
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
}
function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
}
document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-details]');
    if (btn) {
        const p = projects.find(x => x.id === btn.dataset.details);
        if (p) openModal(p);
        return;
    }
    if (e.target.closest('[data-close]') || e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
});

// Scroll reveal (respects reduced motion via CSS)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
document.querySelectorAll('.skill-card, .t-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Navigation
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const section = document.getElementById(button.dataset.section);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 768) document.querySelector('.nav-buttons').classList.remove('show');
    });
});
const menuBtn = document.querySelector('.mobile-menu-button');
menuBtn.addEventListener('click', () => {
    const nav = document.querySelector('.nav-buttons');
    const open = nav.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
const sections = document.querySelectorAll('main section[id]');
const navButtons = document.querySelectorAll('.nav-button');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - section.clientHeight / 3) current = section.id;
    });
    navButtons.forEach(button => button.classList.toggle('active', button.dataset.section === current));
}, { passive: true });
