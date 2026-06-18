(function () {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  const SVG = (file) => `<img src="assets/images/${file}" class="nav-icon-img" />`;

  const NAV_ITEMS = [
    { href: 'index.html',           icon: SVG('home.svg'),    label: '首頁',        match: ['index.html', ''] },
    { href: 'work-experience.html', icon: SVG('work.svg'),    label: '工作經歷',    match: ['work-experience.html'] },
    { href: 'projects.html',        icon: SVG('design.svg'),  label: '設計專案',    match: ['projects.html', 'project-detail.html', 'project-detail-fitbutler.html', 'project-detail-cwapp.html'] },
    { href: 'education.html',       icon: SVG('book.svg'),    label: '設計教育經歷', match: ['education.html'] },
    { href: 'podcast.html',         icon: SVG('podcast.svg'), label: 'Podcast',     match: ['podcast.html'] },
    { href: 'about.html',           icon: SVG('about.svg'),   label: '關於我',      match: ['about.html'] },
  ];

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

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

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'mobile-nav-toggle';
  toggleBtn.id = 'mobileToggle';
  toggleBtn.textContent = '☰';
  toggleBtn.onclick = toggleSidebar;
  document.body.prepend(toggleBtn);

  const layout = document.querySelector('.layout');
  layout.insertAdjacentHTML('afterbegin', sidebarHTML);

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
