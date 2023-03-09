import { renderComments } from './renderComments.js';

export const sectionHome = document.querySelector('.new-topic');
const commentsDiv = sectionHome.querySelector('.topic-container');
sectionHome.remove();

const main = document.querySelector('main');

export function renderHome() {
    main.replaceChildren(sectionHome);
    renderPostsPreview();
}


async function renderPostsPreview() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        commentsDiv.replaceChildren(...Object.values(data).map(post => createPostPreview(post)));

    } catch (err) {
        alert(err);
    }
}


function createPostPreview(data) {
    const element = document.createElement('div');
    element.classList.add('topic-name-wrapper');
    element.innerHTML = `
    <div class="topic-name">
            <a href="#" data-id="${data._id}" class="normal">
                <h2>${data.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `
    return element;
}

commentsDiv.addEventListener('click', previewHandler);

function previewHandler(event) {
    let target = event.target;

    if (target.tagName == 'H2') {
        target = target.parentElement;
    }

    if (target.tagName == 'A') {
        event.preventDefault();
        const postId = target.dataset.id;
        renderComments(postId)
    }
}