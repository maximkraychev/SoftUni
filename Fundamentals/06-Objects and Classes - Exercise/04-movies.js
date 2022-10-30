function movies(input) {

    const movieInfromation = [];

    input.forEach(line => {
        if (line.includes('addMovie')) {
            const name = line.replace('addMovie ', '');
            movieInfromation.push({ name });

        } else if (line.includes('directedBy')) {

            const [movieName, director] = line.split(' directedBy ');
            const movie = movieInfromation.find(object => object.name === movieName);

            if (movie) {
                movie.director = director;
            }

        } else if (line.includes('onDate')) {
            const [movieName, date] = line.split(' onDate ');
            const movie = movieInfromation.find(object => object.name === movieName);

            if (movie) {
                movie.date = date
            }
        }
    })

    movieInfromation.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);