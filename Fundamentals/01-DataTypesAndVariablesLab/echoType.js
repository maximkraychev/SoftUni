function echoType(input) {

    let type = typeof input

    console.log(type);

    if(type === "string" || type === "number") {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType(null)