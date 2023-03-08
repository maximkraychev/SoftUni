const commentsSection = document.querySelector('.info-comments');
const main = document.querySelector('main');
commentsSection.remove();

const commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';

export function renderComments(id) {

    const fargment = document.createDocumentFragment(); 
    const data = requestForComments(id);
    console.log(data);
    //fargment.appendChild(createPost(data.post));


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

function createPost(post) {

}