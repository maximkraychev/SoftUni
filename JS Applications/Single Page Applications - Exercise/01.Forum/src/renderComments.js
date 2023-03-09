const commentsSection = document.querySelector('.info-comments');
const main = document.querySelector('main');
commentsSection.remove();

const commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const comment = commentsSection.querySelector('.comment');
const postName = commentsSection.querySelector('h2');

let postId = '';
const formElement = commentsSection.querySelector('form');
formElement.addEventListener('submit', (event) => createComment(postId, event));

export async function renderComments(id) {
    postId = id;
    const data = await requestForComments(id);
    comment.replaceChildren(loadPost(data.post));
    postName.textContent = data.post.topicName;

    const element = document.createElement('div');
    element.id = 'user-comment';
    const commentsData = await loadComments(id);
    element.replaceChildren(...commentsData);
    comment.appendChild(element);

    main.replaceChildren(commentsSection);
}


async function requestForComments(id) {
    try {
        const [resPost, resComments] = await Promise.all([fetch(`${postUrl}/${id}`), fetch(commentsUrl)]);

        if (resPost.ok == false) {
            const error = await resPost.json();
            throw error;
        }

        if (resComments.ok == false) {
            const error = await resComments.json();
            throw error;
        }

        const [post, comments] = await Promise.all([resPost.json(), resComments.json()]);

        return { post, comments }
    } catch (err) {
        alert(err.message);
    }
}

function loadPost(post) {
    const element = document.createElement('div');
    element.classList.add('header');
    element.innerHTML = `
        <img src="./static/profile.png" alt="avatar">
        <p><span>${post.username}</span> posted on <time>${post.date}</time></p>

        <p class="post-content">${post.postText}</p>
    `

    return element;
}

async function createComment(postId, event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const userName = form.get('username')
    const text = form.get('postText');

    try {
        const response = await fetch(commentsUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName,
                text,
                date: new Date(),
                postId
            })
        })

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        formElement.reset()
        renderComments(postId);
    } catch (err) {
        alert(err.message);
    }
}

async function loadComments(id) {
    try {
        const response = await fetch(commentsUrl);

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        return Object.values(data).filter(comment => comment.postId == id).map(x => createCommntStructure(x));

    } catch (err) {
        alert(err.message);
    }
}

function createCommntStructure(data) {
    const element = document.createElement('div');
    element.classList.add('topic-name-wrapper');
    element.innerHTML = `
    <div class="topic-name">
                <p><strong>${data.userName}</strong> commented on <time>${data.date}</time></p>
                <div class="post-content">
                    <p>${data.text}</p>
                </div>
            </div>
    `
    return element;
}
