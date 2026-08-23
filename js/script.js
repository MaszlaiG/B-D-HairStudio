document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 12));
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
const setMenu = (open) => {
  links.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
};
toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
addEventListener('resize', () => {
  if (innerWidth > 860) setMenu(false);
});
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
const dateEl = document.getElementById('fDate');
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
dateEl.min = today.toISOString().split('T')[0];
let selectedSlot = '';
document.querySelectorAll('#slots .slot').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#slots .slot').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSlot = btn.textContent;
  });
});
const msg = document.getElementById('formMsg');
document.getElementById('submitBtn').addEventListener('click', () => {
  const service = document.getElementById('fService').value;
  const date = dateEl.value;
  const name = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  const note = document.getElementById('fNote').value.trim();
  msg.className = 'form-msg';
  if (!service) {
    msg.textContent = 'Kérlek válassz szolgáltatást.';
    msg.className = 'form-msg err';
    return;
  }
  if (!date) {
    msg.textContent = 'Kérlek add meg a dátumot.';
    msg.className = 'form-msg err';
    return;
  }
  if (!selectedSlot) {
    msg.textContent = 'Kérlek válassz egy időpontot.';
    msg.className = 'form-msg err';
    return;
  }
  if (!name) {
    msg.textContent = 'Kérlek add meg a neved.';
    msg.className = 'form-msg err';
    return;
  }
  if (!phone) {
    msg.textContent = 'Kérlek add meg a telefonszámod.';
    msg.className = 'form-msg err';
    return;
  }
  msg.textContent = '';
  const dateFmt = new Date(date).toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('cName').textContent = name.split(' ')[0] || name;
  document.getElementById('cList').innerHTML =
    '<li><span>Szolgáltatás:</span> ' +
    service +
    '</li>' +
    '<li><span>Időpont:</span> ' +
    dateFmt +
    ', ' +
    selectedSlot +
    '</li>' +
    '<li><span>Telefon:</span> ' +
    phone +
    '</li>' +
    (note ? '<li><span>Megjegyzés:</span> ' + note + '</li>' : '');
  const body = encodeURIComponent(
    'Foglalási kérelem – B&D Hairstudio\n\n' +
      'Név: ' +
      name +
      '\nTelefon: ' +
      phone +
      '\nSzolgáltatás: ' +
      service +
      '\nIdőpont: ' +
      dateFmt +
      ', ' +
      selectedSlot +
      (note ? '\nMegjegyzés: ' + note : '')
  );
  document.getElementById('mailLink').href =
    'mailto:hello@bdhairstudio.hu?subject=' +
    encodeURIComponent('Időpontfoglalás – ' + name) +
    '&body=' +
    body;
  const confirm = document.getElementById('confirm');
  confirm.classList.add('show');
  confirm.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
});
(function () {
  const day = new Date().getDay();
  const hour = new Date().getHours();
  document.querySelectorAll('.hrow').forEach((r) => {
    if (+r.dataset.day === day) r.classList.add('today');
  });
  let open = false;
  if (day >= 1 && day <= 5) open = hour >= 9 && hour < 19;
  else if (day === 6) open = hour >= 9 && hour < 14;
  const pill = document.getElementById('openPill');
  if (!open) {
    pill.textContent = 'Zárva';
    pill.classList.add('closed');
  }
})();
