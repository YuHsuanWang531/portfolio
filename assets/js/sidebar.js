(function () {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  const SVG = (file) => `<img src="assets/images/${file}" class="nav-icon-img" />`;

  const NAV_ITEMS = [
    { href: 'index.html',           icon: SVG('home.svg'),    label: '首頁',        match: ['index.html', ''] },
    { href: 'work-experience.html', icon: SVG('work.svg'),    label: '工作經歷',    match: ['work-experience.html'] },
    { href: 'index.html#projects',  icon: SVG('design.svg'),  label: '設計專案',    match: ['projects.html', 'project-detail.html', 'project-detail-fitbutler.html', 'project-detail-cwapp.html'] },
    { href: 'education.html',       icon: SVG('book.svg'),    label: '設計教育經歷', match: ['education.html'] },
    { href: 'podcast.html',         icon: SVG('podcast.svg'), label: 'Podcast',     match: ['podcast.html'] },
    { href: 'about.html',           icon: SVG('about.svg'),   label: '關於我',      match: ['about.html'] },
  ];

  const rawPage = window.location.pathname.split('/').pop() || 'index.html';
  const currentPage = rawPage.endsWith('.html') ? rawPage : rawPage + '.html';

  localStorage.removeItem('portfolio-lang');

  const navHTML = NAV_ITEMS.map(item => {
    const isActive = item.match.includes(currentPage) ? ' active' : '';
    return `<li><a href="${item.href}" class="nav-item${isActive}"><span class="nav-icon">${item.icon}</span> ${item.label}</a></li>`;
  }).join('\n        ');

  const sidebarHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-profile">
        <div class="sidebar-avatar"><img src="assets/images/avatar.webp" alt="avatar"></div>
        <div>
          <div class="sidebar-name">王瑀萱｜大胃</div>
          <div class="sidebar-title">Sr. Product Designer</div>
        </div>
      </div>
      <ul class="nav-list">
        ${navHTML}
      </ul>
    </aside>`;

  const layout = document.querySelector('.layout');
  // sidebar and toggle removed — navigation handled by bottom pill dock only

  // Bottom nav (mobile only)
  const isEn = currentPage.endsWith('-en.html');
  const BOTTOM_NAV_ITEMS = [
    { href: 'index.html', label: isEn ? 'Home' : '首頁', match: ['index.html', '', 'index-en.html'], icon: `<img src="assets/images/home.svg" class="nav-icon-img">` },
    { href: (isEn ? 'index-en.html' : 'index.html') + '#projects', label: isEn ? 'Projects' : '設計專案', match: ['projects.html', 'project-detail.html', 'project-detail-fitbutler.html', 'project-detail-cwapp.html'], icon: `<img src="assets/images/design.svg" class="nav-icon-img">` },
    { href: 'about.html', label: isEn ? 'About' : '關於我', match: ['about.html', 'about-en.html'], icon: `<img src="assets/images/about.svg" class="nav-icon-img">` },
    { href: 'https://drive.google.com/file/d/1i-y40wCi06h3AG27A6D_mVHMIXM2dRxS/view?usp=drive_link', label: isEn ? 'Resume' : '下載履歷', match: [], icon: `<img src="assets/images/work.svg" class="nav-icon-img">` },
  ];

  const bottomNavHTML = `<nav class="bottom-nav" id="bottomNav">
    <div class="bottom-nav-inner">
      ${BOTTOM_NAV_ITEMS.map((item, i) => {
        const isActive = item.match.includes(currentPage);
        const isExternal = item.href.startsWith('https://') || item.href.startsWith('http://');
        const divider = i === 3 ? '<div class="bottom-nav-divider"></div>' : '';
        return `${divider}<a href="${item.href}"${isExternal ? ' target="_blank"' : ''} class="bottom-nav-item${isActive ? ' active' : ''}">
          <span class="bottom-nav-icon">${item.icon}</span>
          <span class="bottom-nav-label">${item.label}</span>
        </a>`;
      }).join('')}
    </div>
    <div class="bottom-nav-handle"></div>
  </nav>`;

  document.body.insertAdjacentHTML('beforeend', bottomNavHTML);

  // Save language preference when lang toggle is clicked
  const langBtn = document.querySelector('.bottom-nav-item:last-child');
  if (langBtn) {
    const isEnPage = currentPage.endsWith('-en.html');
    langBtn.addEventListener('click', () => {
      localStorage.setItem('portfolio-lang', isEnPage ? 'zh' : 'en');
    });
  }

  document.addEventListener('click', function (e) {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('mobileToggle');
    if (window.innerWidth <= 900 && sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
  }

  window.toggleSidebar = toggleSidebar;

  // Scroll fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.panel, .stats-row, .works-panel').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
})();
