// First trie

function timePlus15Min(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    if(minutes + 15 > 59){
        minutes -= 45;
        hours++;
    } else if(minutes + 15 <= 59){
        minutes += 15;
    }

    if(hours > 23) {
        hours -= 24;
    }

    if(minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
        
}
timePlus15Min(["0", "44"])


// Second trie

function Plus15Min(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    totalMinutes = hours * 60 + minutes + 15;

    hours = Math.floor(totalMinutes / 60);
    minutes = totalMinutes % 60;

    if(hours > 23) {
        hours -= 24
    }

    if(minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}

Plus15Min(["1", "46"])