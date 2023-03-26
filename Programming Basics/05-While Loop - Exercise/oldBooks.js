function oldBooks(input) {

    let index = 0;
    let theBookWeAreLookingFor = input[index];
    index++
    let booksInput = input[index];
    let checkedBooks = 0; 

    while(booksInput !== theBookWeAreLookingFor) {
        if(booksInput === "No More Books"){
            break;
        }
        index++
        booksInput = input[index];
        checkedBooks++
    }

    if(booksInput === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    } else {
        console.log(`You checked ${checkedBooks} books and found it.`);
    }
    
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


