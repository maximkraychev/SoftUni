function city(object) {

    for (key in object) {
        console.log(`${key} -> ${object[key]}`);
    }

}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);