function solution(arguments) {

    if (arguments == 'upvote') {
        this.upvotes++;
    } else if (arguments == 'downvote') {
        this.downvotes++;
    } else if (arguments == 'score') {
        const result = [];
        let currentUpVotes = this.upvotes;
        let currentDownVotes = this.downvotes;

        let rating = '';
        const percentPositive = (currentUpVotes / Math.abs(currentUpVotes + currentDownVotes)) * 100;
        if (currentUpVotes + currentDownVotes < 10) {
            rating = 'new';
        } else if (percentPositive > 66) {
            rating = 'hot';
        } else if (currentUpVotes - currentDownVotes < 0) {
            rating = 'unpopular';
        } else if (currentUpVotes - currentDownVotes >= 0 && currentUpVotes + currentDownVotes > 100) {
            rating = 'controversial';
        } else {
            rating = 'new';
        }

        if (currentUpVotes + currentDownVotes > 50) {
            const bonusToHideRealVotes = Math.ceil(Math.max(currentUpVotes, currentDownVotes) * 0.25);
            currentUpVotes += bonusToHideRealVotes;
            currentDownVotes += bonusToHideRealVotes;
        }
        result.push(currentUpVotes, currentDownVotes, currentUpVotes - currentDownVotes, rating);
        return result;
    }
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);


for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}
                                           // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(solution.call(post, 'score'));
