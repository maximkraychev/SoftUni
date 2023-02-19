function solution() {

    // First constructor function--------------------------------------------------------
    function Post(title, content) {
        this.title = title;
        this.content = content;
    }

    Post.prototype = Object.create({});
    Post.prototype.toString = function () {
        return `Post: ${this.title}\nContent: ${this.content}`;
    }

    // Second constructor function--------------------------------------------------------
    function SocialMediaPost(title, content, likes, dislikes) {
        Post.call(this, title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }

    SocialMediaPost.prototype = Object.create(Post.prototype);

    SocialMediaPost.prototype.addComment = function (value) {
        this.comments.push(value);
    }

    SocialMediaPost.prototype.toString = function () {
        let stringToreturn = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;

        if (this.comments.length == 0) {
            return stringToreturn;
        }

        stringToreturn += '\nComments:';
        this.comments.forEach(x => stringToreturn += `\n * ${x}`);
        return stringToreturn;
    }

    // Third constructor function -------------------------------------------------------
    function BlogPost(title, content, views) {
        Post.call(this, title, content);
        this.views = views;
    }

    BlogPost.prototype = Object.create(Post.prototype);

    BlogPost.prototype.view = function () {
        this.views++;
        return this;
    }

    BlogPost.prototype.toString = function () {
        return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
    }

    // Return object with all constructors;
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}


const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
