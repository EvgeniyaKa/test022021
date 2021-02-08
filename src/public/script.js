
const cont_320 = document.querySelector('#cont_320');
const js_contacts = document.querySelector('.js_contacts');

cont_320.addEventListener('click', function(e) {
  e.preventDefault();
  cont_320.classList.toggle('active');
  js_contacts.classList.toggle('active');
});

const nav_320 = document.querySelector('#nav_mob_320');
const js_nav = document.querySelector('.js_nav');

nav_320.addEventListener('click', function(e) {
  e.preventDefault();
  nav_320.classList.toggle('active');
  js_nav.classList.toggle('active');
});