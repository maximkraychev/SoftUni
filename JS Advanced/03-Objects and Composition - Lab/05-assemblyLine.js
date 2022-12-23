function createAssemblyLine() {

    const decorator = {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function() {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
        },
        hasAudio(obj) {
            obj.currentTrack = { name: null, artist: null }
            obj.nowPlaying = function() {
                //console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }

        },
        hasParktronic(obj) {
            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (0.25 <= distance && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
    return decorator;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);



