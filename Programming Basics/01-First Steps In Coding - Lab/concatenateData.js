function concatenateData1(input){

    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
    
}

concatenateData(["Maria", "Ivanova",
20, "Sofia"])



function concatenateData2(input){

    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];

    let sentence = "You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".";
    
    console.log(sentence);
}