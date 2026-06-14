document.addEventListener('DOMContentLoaded', () => {
    const isSubdomainsPage = document.getElementById('subdomains-content') !== null;
    let currentLang = 'fr'; // Start in French
    
    // Theme logic
    const root = document.documentElement;
    let isLightMode = false;

    // Hint Logic
    const hintEl = document.getElementById('en-hint');
    if (hintEl) {
        const switchEnBtn = document.getElementById('switch-en-btn');
        const closeHintBtn = document.getElementById('close-hint-btn');

        switchEnBtn.addEventListener('click', () => {
            currentLang = 'en';
            hintEl.style.opacity = '0';
            setTimeout(() => hintEl.style.display = 'none', 400);
            render();
        });

        closeHintBtn.addEventListener('click', () => {
            hintEl.style.opacity = '0';
            setTimeout(() => hintEl.style.display = 'none', 400);
        });
    }

    // Scroll to Top Logic
    const scrollBtn = document.getElementById('sci-fi-scroll');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navControls = document.getElementById('nav-controls');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navControls.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navControls.classList.remove('active');
            }
        });
    });

    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    const renderNavbarControls = (data) => {
        const controlsContainer = document.getElementById('nav-controls');
        if (!controlsContainer) return;

        if (!controlsContainer.innerHTML.includes('theme-toggle')) {
            controlsContainer.innerHTML = `
                <button id="theme-toggle" class="btn-icon" aria-label="Toggle Theme">◐</button>
                <button id="lang-toggle" class="btn-toggle" aria-label="Toggle Language">${data.header.toggleLangText}</button>
            `;

            document.getElementById('lang-toggle').addEventListener('click', () => {
                currentLang = currentLang === 'en' ? 'fr' : 'en';
                if(currentLang === 'fr' && hintEl) {
                    hintEl.style.display = 'flex';
                    setTimeout(() => hintEl.style.opacity = '1', 10);
                } else if (hintEl) {
                    hintEl.style.opacity = '0';
                    setTimeout(() => hintEl.style.display = 'none', 400);
                }
                render();
            });

            document.getElementById('theme-toggle').addEventListener('click', () => {
                isLightMode = !isLightMode;
                if (isLightMode) {
                    root.setAttribute('data-theme', 'light');
                } else {
                    root.removeAttribute('data-theme');
                }
                updateCanvasColors(); 
            });
        } else {
            document.getElementById('lang-toggle').textContent = data.header.toggleLangText;
        }
    };

    const renderIndex = (data) => {
        const headerContainer = document.getElementById('header-container');
        if (!headerContainer) return;

        headerContainer.innerHTML = `
            <div class="header-content">
                <div class="profile-info">
                    <h1>${data.header.name}</h1>
                    <div class="location-badge">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span>${data.header.location}</span>
                    </div>
                    <div class="links">
                        <a href="${data.header.resumeLink}" target="_blank" rel="noopener noreferrer" class="btn-resume">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            ${data.header.resumeText}
                        </a>
                        <a href="mailto:${data.header.email}">Email</a>
                        <a href="${data.header.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="${data.header.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        `;

        const summaryPoints = data.summary.points.map(point => `
            <li class="summary-point">
                <span class="point-text">${point}</span>
            </li>
        `).join('');

        const summaryContainer = document.getElementById('summary-container');
        summaryContainer.innerHTML = `
            <h2 class="section-title">${data.summary.title}</h2>
            <ul class="summary-list">${summaryPoints}</ul>
        `;

        const skillsContainer = document.getElementById('skills-container');
        const skillsContent = data.skills.categories.map(cat => `
            <div class="skill-category">
                <h3>${cat.name}</h3>
                <div class="skill-tags">
                    ${cat.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
        skillsContainer.innerHTML = `
            <h2 class="section-title">${data.skills.title}</h2>
            <div class="skills-grid">${skillsContent}</div>
        `;

        const experienceContainer = document.getElementById('experience-container');
        const expItems = data.experience.items.map(item => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3>${item.role} <span>@ ${item.company}</span></h3>
                    <span class="date">${item.date}</span>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
        experienceContainer.innerHTML = `
            <h2 class="section-title">${data.experience.title}</h2>
            <div class="timeline">${expItems}</div>
        `;

        const certsContainer = document.getElementById('certifications-container');
        const certItems = data.certifications.items.map(item => `
            <div class="cert-card">
                <div class="cert-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div class="cert-info">
                    <h3>${item.name}</h3>
                    <p>${item.issuer}</p>
                    <span class="date">${item.date}</span>
                </div>
            </div>
        `).join('');
        certsContainer.innerHTML = `
            <h2 class="section-title">${data.certifications.title}</h2>
            <div class="cert-grid">${certItems}</div>
        `;

        const leadershipContainer = document.getElementById('leadership-container');
        const leadershipItems = data.leadership.items.map(item => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3>${item.role} <span>@ ${item.organization}</span></h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
        leadershipContainer.innerHTML = `
            <h2 class="section-title">${data.leadership.title}</h2>
            <div class="timeline">${leadershipItems}</div>
        `;

        const projectsContainer = document.getElementById('projects-container');
        const projItems = data.projects.items.map((item, index) => {
            const isComingSoon = item.status === 'coming-soon' ? 'coming-soon' : '';
            const spanClass = index % 3 === 0 ? 'span-full' : 'span-half';
            return `
                <div class="project-card ${isComingSoon} ${spanClass}">
                    <h3>${item.name}</h3>
                    ${item.date ? `<span class="date">${item.date}</span>` : ''}
                    <p>${item.description}</p>
                    ${isComingSoon ? `<div class="badge">In Development</div>` : ''}
                </div>
            `;
        }).join('');
        projectsContainer.innerHTML = `
            <h2 class="section-title">${data.projects.title}</h2>
            <div class="projects-grid">${projItems}</div>
        `;

        const pubsContainer = document.getElementById('publications-container');
        const pubItems = data.publications.items.map(item => `
            <div class="pub-card">
                <div class="pub-badge ${item.type === 'Award' ? 'award' : 'pub'}">${item.type}</div>
                <h3>${item.title}</h3>
                <p class="venue">${item.venue}</p>
                ${item.description ? `<p class="desc">${item.description}</p>` : ''}
            </div>
        `).join('');
        pubsContainer.innerHTML = `
            <h2 class="section-title">${data.publications.title}</h2>
            <div class="pub-grid">${pubItems}</div>
        `;

        const contactContainer = document.getElementById('contact-container');
        contactContainer.innerHTML = `
            <h2 class="section-title">${data.contact.title}</h2>
            <form action="https://formspree.io/f/your_form_id" method="POST" class="contact-form">
                <div class="form-group">
                    <label for="name">${data.contact.nameLabel}</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label for="email">${data.contact.emailLabel}</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com">
                </div>
                <div class="form-group">
                    <label for="message">${data.contact.messageLabel}</label>
                    <textarea id="message" name="message" rows="5" required placeholder="Let's build something great together."></textarea>
                </div>
                <button type="submit" class="btn-submit">${data.contact.submitText}</button>
            </form>
        `;
    };

    const renderSubdomains = (data) => {
        const subContainer = document.getElementById('subdomains-content');
        if (!subContainer) return;

        subContainer.innerHTML = `
            <div class="subdomains-content-inner text-center">
                <h1 class="subdomains-title">${data.subdomains.title}</h1>
                <p class="subdomains-description">${data.subdomains.description}</p>
                
                <div class="coming-soon-card">
                    <div class="coming-soon-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="40" height="40">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                        </svg>
                    </div>
                    <h3>${data.subdomains.comingSoonTitle}</h3>
                    <p>${data.subdomains.comingSoonDesc}</p>
                </div>
                
                <a href="index.html" class="btn-resume" style="display:inline-flex; align-items:center; gap:8px;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                        <path d="M19 12H5M12 19l-7-7 7-7"></path>
                    </svg>
                    ${data.subdomains.backText}
                </a>
            </div>
        `;
    };

    const render = () => {
        const data = portfolioData[currentLang];
        document.documentElement.lang = currentLang;
        
        renderNavbarControls(data);

        if (isSubdomainsPage) {
            renderSubdomains(data);
        } else {
            renderIndex(data);
        }
    };

    render();
    initCanvasAnimation();
});

let dotBaseColor = 'rgba(255, 255, 255, 0.15)';
let dotActiveColor = 'rgba(41, 151, 255, 0.8)';

function updateCanvasColors() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    dotBaseColor = isLight ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)';
    dotActiveColor = isLight ? 'rgba(0, 102, 204, 0.8)' : 'rgba(41, 151, 255, 0.8)';
}

function initCanvasAnimation() {
    const canvas = document.getElementById('bg-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let dots = [];
    const spacing = 45;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initDots();
    }
    
    function initDots() {
        dots = [];
        let cols = Math.floor(width / spacing) + 2;
        let rows = Math.floor(height / spacing) + 2;
        
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                dots.push({
                    baseX: i * spacing,
                    baseY: j * spacing,
                    x: i * spacing,
                    y: j * spacing,
                    size: 1.5
                });
            }
        }
    }

    window.addEventListener('resize', resize);
    resize();
    updateCanvasColors();

    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = -1000;
    let targetY = -1000;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });
    
    window.addEventListener('mouseout', () => {
        targetX = -1000;
        targetY = -1000;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        mouseX += (targetX - mouseX) * 0.1;
        mouseY += (targetY - mouseY) * 0.1;

        dots.forEach(dot => {
            let dx = mouseX - dot.baseX;
            let dy = mouseY - dot.baseY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            let maxDist = 250;
            
            if (distance < maxDist) {
                let force = (maxDist - distance) / maxDist;
                // Repel effect
                dot.x = dot.baseX - (dx * force * 0.3);
                dot.y = dot.baseY - (dy * force * 0.3);
                // Scale effect
                dot.size = 1.5 + (force * 4.5);
                
                ctx.fillStyle = dotActiveColor;
                ctx.globalAlpha = Math.min(1, force + 0.1); 
            } else {
                dot.x += (dot.baseX - dot.x) * 0.1;
                dot.y += (dot.baseY - dot.y) * 0.1;
                dot.size = 1.5;
                ctx.fillStyle = dotBaseColor;
                ctx.globalAlpha = 1;
            }

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}
