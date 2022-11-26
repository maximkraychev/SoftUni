function destinationMapper(text) {

    const regExp = /([\=|\/]{1})(?<places>[A-Z][A-Za-z]{2,})\1/g;

    const matches = text.matchAll(regExp);
    let allPlaces = [];
    let travelPoints = 0;

    for (const match of matches) {
        place = match.groups.places;
        travelPoints += place.length;
        allPlaces.push(place);
    }

    console.log(`Destinations: ${allPlaces.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));

destinationMapper(("ThisIs some InvalidInput"))