import { html } from "./node_modules/lit-html/lit-html.js";

export const templatePreview = (data) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button class="detailsBtn" @click=${clickChecker.bind(null)}>Details</button>
        <div class="details" id="${data.id}">
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>
`;

function clickChecker(event) {
    const infoDiv = event.target.nextElementSibling;
   
    if (infoDiv.style.display == 'block') {
        infoDiv.style.display = 'none';
    } else {
        infoDiv.style.display = 'block';
    }
}
