function attachEvents() {
    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const selectElement = document.querySelector('#posts');
    const titleElement = document.querySelector('#post-title');
    const bodyElement = document.querySelector('#post-body');
    const commentList = document.querySelector('#post-comments');

    const urlForPosts = 'http://localhost:3030/jsonstore/blog/posts';
    const urlForComments = 'http://localhost:3030/jsonstore/blog/comments';

    // Adding event Listeners to the buttons;
    loadBtn.addEventListener('click', addOptionsElemnts);
    viewBtn.addEventListener('click', renderPostsWithComments);

    // After the button Load is click send request for data and render it;
    async function addOptionsElemnts() {
        try {
            const data = await getDataForPosts(urlForPosts);

            //Clear the previous options elements before rendaring the new ones, that way we ensure there will be no stacking if the button is clicked second time;
            selectElement.innerHTML = '';

            Object.values(data)
                .forEach(el => {
                    const option = document.createElement('option');
                    option.value = el.id;
                    option.textContent = el.title;
                    selectElement.appendChild(option);
                });

        } catch (err) {
            console.log(err);
        }
    }

    async function renderPostsWithComments() {
        // If the button View is clicked before LoadPost button return;
        const selectedPostId = selectElement.value;
        if (selectedPostId == '') {
            return;
        }

        try {
            // Receiving array of objects;
            //  on 0 index => should have already selected object for the post;
            //  on 1 index => should have all comments and we need to filter them;
            const data = await Promise.all([getDataForPosts(`${urlForPosts}/${selectedPostId}`), getDataForComments(urlForComments)]);

            // Getting only the data for the selected Post;
            const post = data[0];
            const comments = Object.values(data[1]).filter(x => x.postId == selectedPostId);

            // Append the information from the data;
            titleElement.textContent = post.title;
            bodyElement.textContent = post.body;

            // Clear the list of comments before rendaring the new one, that way we ensure there will be no stacking from the previous click on the button;
            commentList.innerHTML = '';

            comments.forEach(x => {
                const li = document.createElement('li');
                li.id = x.id;
                li.textContent = x.text;
                commentList.appendChild(li);
            })

        } catch (err) {
            console.log(err);
        }
    }

    // Getting data for post;
    async function getDataForPosts(url) {
        const postsRequest = fetch(url);
        const postsPromise = await postsRequest;
        return postsPromise.json();

    }

    // Getting data for comments;
    async function getDataForComments(url) {
        const commentsRequest = fetch(url);
        const commentsPromise = await commentsRequest;
        return commentsPromise.json();
    }
}

attachEvents();


    // async function getData(firstURL, secondURL) {
    //     const postsRequest = fetch(firstURL);
    //     const commentsRequest = fetch(secondURL);

    //     // const postsRequest = setTimeout(()=> 'Post', 2000);
    //     // const commentsRequest = setTimeout(()=> 'Comments', 2000);

    //     const [postsPromise, commentsPromise] = await Promise.all([postsRequest, commentsRequest]);
    //     const [posts, comments] = await Promise.all([postsPromise.json(), commentsPromise.json()]);

    //     return {
    //         posts,
    //         comments,
    //     }
    // }