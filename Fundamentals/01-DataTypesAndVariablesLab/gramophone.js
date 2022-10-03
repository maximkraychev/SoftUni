function gramophone(albumName, bandName, songName) {

    let plateOneFullrotation = 2.5;
    let songDurationInSeconds = (albumName.length * bandName.length) * songName.length / 2;

    let rotations = Math.ceil(songDurationInSeconds / plateOneFullrotation);
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');