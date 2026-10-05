const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#current-year');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('is-open', !open);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const projectEmpty = document.querySelector('#project-empty');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visible = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    projectCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    projectEmpty.hidden = visible !== 0;
  });
});

// Skill filters are independent from the project filters.
const skillFilters = document.querySelectorAll('[data-skill-filter]');
const skillGroups = document.querySelectorAll('[data-skill-category]');
const skillsStatus = document.querySelector('#skills-status');
document.querySelector('.skills__filters').hidden = false;

skillFilters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.skillFilter;
    skillFilters.forEach((filter) => {
      filter.setAttribute('aria-pressed', String(filter === button));
    });
    skillGroups.forEach((group) => {
      group.hidden = category !== 'all' && group.dataset.skillCategory !== category;
    });
    skillsStatus.textContent = category === 'all'
      ? 'Showing all four skill categories.'
      : `Showing ${button.textContent.trim()} skills.`;
  });
});

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = new FormData(contactForm);
  const name = values.get('name').trim();
  const email = values.get('email').trim();
  const message = values.get('message').trim();
  const status = document.querySelector('#contact-status');
  if (!name || !email || !message) {
    status.textContent = 'Please complete all fields before opening your draft.';
    return;
  }
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
  window.location.href = `mailto:aybuke_calik@hotmail.com?subject=${subject}&body=${body}`;
  status.textContent = 'Your email app should open with a draft. Review it and press Send there. If nothing opens, use the email address below.';
});
