const months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sept: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
}

export function toMonth(yearSection, year, event) {
    let month = '';

    if (event.target.tagName == 'TD') {
        month = event.target.children[0].textContent;
    } else if (event.target.tagName == 'DIV') {
        month = event.target.textContent;
    }

    if(month == '') {
        return;
    }

    const numberOfMonth = months[month];
    const monthSection = document.querySelector(`#month-${year}-${numberOfMonth}`);

    const customBackTo = backTo.bind(null, yearSection);
    monthSection.addEventListener('click', customBackTo);

    yearSection.style.display = 'none';
    monthSection.style.display = 'block';
}

export function backTo(previousEl, event) {
    if (event.target.tagName != 'CAPTION') {
        return;
    }

    let section = event.currentTarget;
    section.style.display = 'none';
    previousEl.style.display = 'block';

    const withoutListener = section.cloneNode(true);
    section.parentNode.replaceChild(withoutListener, section);
}