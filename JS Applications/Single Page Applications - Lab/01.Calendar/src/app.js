import {} from './year.js';

const sections = Array.from(document.querySelectorAll('section'));
const yearsCalendar = sections.shift();
sections.forEach(x=> x.style.display = 'none');

