import { html } from '../../node_modules/lit-html/lit-html.js';
import { addDonation, deleteRequest, donationFromSpecificUser, getDetails, getNumberOfDonation } from '../api/data.js';

const detailsTemplate = (ctx, animal, isGuest, isOwner, isAlreadyDonated) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="/images/Shiba-Inu.png">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${animal.name}</h1>
                <h3>Breed: ${animal.breed}</h3>
                <h4>Age: ${animal.age}</h4>
                <h4>Weight: ${animal.weight}</h4>
                <h4 class="donation">Donation: ${ctx.donateCount}$</h4>
                
            </div>

            <!-- if there is no registered user, do not display div-->
            ${isGuest 
                ? null 
                : html`
                    <div class="actionBtn">

                        ${isOwner 
                            ? html`
                                <!-- Only for registered user and creator of the pets-->
                                <a href="/details/${animal._id}/edit" class="edit">Edit</a>
                                <a @click=${onDelete.bind(null, animal._id)} href="javascript:void(0)" class="remove">Delete</a>` 
                            : null}

                         ${!isOwner && !isAlreadyDonated 
                         ? html`
                            <!--(Bonus Part) Only for no creator and user-->
                            <a @click=${onDonate.bind(null, animal._id, isAlreadyDonated)} href="javascript:void(0)" class="donate">Donate</a> ` 
                         : null}   
                            
                    </div>`}
        </div>
    </div>
</section>`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const petId = ctx.params.id;
    const requests = [getDetails(petId), getNumberOfDonation(petId)];
    const isGuest = ctx.user == null;

    if(!isGuest) {
        requests.push(donationFromSpecificUser(petId, ctx.user._id));
    }

    const [animalData, donationCount, isAlreadyDonated] = await Promise.all(requests);
    const isOwner = animalData._ownerId == ctx.user?._id;

    console.log(animalData);
    console.log(donationCount);
    console.log(isAlreadyDonated);

    ctx.donateCount = donationCount * 100;

    const bindedUpdate = update.bind(null, detailsTemplate, ctx, animalData, isGuest, isOwner, isAlreadyDonated);
    ctx.update = bindedUpdate;
    ctx.update();
}


function update(template, ...state) {
    context.render(template(...state));
}


async function onDelete(petId) {
    const choice = confirm('Are you sure ?');

    if(choice) {
        await deleteRequest(petId);
        context.page.redirect('/welcome');
    }
}


async function onDonate(petId, isAlreadyDonated, event) {
    const anchorElement = event.currentTarget;
    try {
        anchorElement.style.display = 'none';
        await addDonation(petId);
        // after donation is succesful it change the local state and rerender then, that way we dont need to make new requests;
        context.donateCount += 100;
        isAlreadyDonated = 0;
        context.update()
    } catch(err) {
        anchorElement.style.display = '';
        throw err;
    }
}