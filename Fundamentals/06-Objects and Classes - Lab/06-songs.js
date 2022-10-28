function songs(input) {
    let numberOfSongs = Number(input.shift());
    let typeListToPrint = input.pop();
    let arrayOfSongs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    for (let index = 0; index < numberOfSongs; index++) {
        [typeList, name, time] = input[index].split('_');
        arrayOfSongs.push(new Song(typeList, name, time));
    }

    for (currentSong of arrayOfSongs) {
        
        if (typeListToPrint === 'all') {
            console.log(currentSong.name);
        }
        else if (currentSong.typeList === typeListToPrint) {
            console.log(currentSong.name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);