import { html, render } from '../../node_modules/lit-html/lit-html.js';

const overleyTemplate = (bindedOnOK, message) => html`
<div class="overlay">
    <div class="modal">
        <p>${message}</p>
        <a @click=${bindedOnOK} href="javascript:void(0)" class="action">OK</a>
    </div>
</div>
`;

const body = document.body;

export function showOverlay(message) {
    // Creating the fragment
    const fragment = document.createDocumentFragment();

    // Adding the overlay element into it;
    render(overleyTemplate(onOK, message), fragment);
    
    // Get reference to the main div of overlay so later it can be removed;
    const overley = fragment.querySelector('.overlay');

    // Adding the overlayTemplate to the HTML;
    body.appendChild(fragment)

    function onOK(event) {
        event.preventDefault();
        overley.remove();
    }
}
