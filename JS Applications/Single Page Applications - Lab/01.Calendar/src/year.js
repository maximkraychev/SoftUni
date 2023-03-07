import { backTo, toMonth } from './month.js';

const years = document.querySelector('#years');

years.addEventListener('click', onYears);

function onYears(event) {
    let year = ''

    if (event.target.tagName == 'TD') {
        year = event.target.children[0].textContent;
    } else if (event.target.tagName == 'DIV') {
        year = event.target.textContent;
    }

    if (year == '') {
        return;
    }

    const thatYearSection = document.querySelector(`#year-${year}`);

    years.style.display = 'none';
    thatYearSection.style.display = 'block';

    const customBackTo = backTo.bind(null, years);
    thatYearSection.addEventListener('click', customBackTo);

    const customToMonth = toMonth.bind(null, thatYearSection, year);
    thatYearSection.addEventListener('click', customToMonth);
}

