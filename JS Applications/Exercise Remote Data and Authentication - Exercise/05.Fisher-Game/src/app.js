const sectionHome = document.querySelector('#home-view');
const main = document.querySelector('main');

export function renderHome() {
    
    if (sessionStorage.getItem('accessToken') == null) {
        main.appendChild(sectionHome.querySelector('aside'));
        return;
    }
  
    main.appendChild(sectionHome);
    sectionHome.style.display = 'block';

    
}